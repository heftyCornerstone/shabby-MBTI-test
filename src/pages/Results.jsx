import { mbtiDescriptions } from "../utils/mbtiCalculator";
import useUserAuthStore from "../zustand/userAuthStore";
import useGetTestResults from "../hooks/useGetTestResults";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteTestResult,
  getUserTestResult,
  updateTestResultVisibility,
} from "../api/testResult";

const TestResultItemBtnSet = () => {
  const queryClient = useQueryClient();
  const { userId } = useUserAuthStore();

  const { data, isPending:isLoading, isError: isGetError } = useQuery({
    queryKey: ["getUserResult"],
    queryFn: () => getUserTestResult(userId),
  });
  if (isGetError) console.error(isGetError);

  const { mutate: petchVisibility } = useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries(["getUserResult"]);
    },
  });
  const { mutate: deleteResult } = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries(["getUserResult"]);
    },
  });

  const handleVisibility = () => {
    petchVisibility(userId);
  };
  const handleDeleteClick = () => {
    deleteResult(userId);
  };

  const visibilityBtnTxt = data?.visibility ? "비공개" : "공개"

  return (
    <div className="justify-end flex gap-4">
      <button
        onClick={handleVisibility}
        type="button"
        className="sm-button bg-lime-600 hover:bg-lime-700"
      >
        {(isLoading) ? '' : visibilityBtnTxt}
      </button>
      <button
        onClick={handleDeleteClick}
        type="button"
        className="sm-button bg-slate-500 hover:bg-slate-600"
      >
        삭제하기
      </button>
    </div>
  );
};

const TestResultItem = ({ config, isOwner }) => {
  const { userName, mbtiType } = config;
  const mbtiData = mbtiDescriptions[mbtiType];
  const content = mbtiData
    ? mbtiData.split(":")[1]
    : "아직 테스트 결과가 없습니다!";

  return (
    <div className="w-3/4 flex flex-col items-center rounded-md bg-stone-800">
      <div className="w-full p-5 pl-8 flex justify-between border-b-2 border-white">
        <h4 className="text-white text-xl font-bold">{userName}</h4>
        {isOwner && <TestResultItemBtnSet />}
      </div>
      <div className="w-full p-8 border-b-2 border-white">
        <div className="text-white">
          <h4 className="mb-5 text-2xl font-bold">{mbtiType}</h4>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

const TestResultList = () => {
  const { userId } = useUserAuthStore();
  const { testResultsData, isLoading } = useGetTestResults();

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        testResultsData.map(({ id, testResult, visibility }) => {
          const isOwner = !!(id === userId);
          const config = { mbtiType: testResult, userName: id };
          return visibility ? (
            <TestResultItem key={id} config={config} isOwner={isOwner} />
          ) : null;
        })
      )}
    </>
  );
};

const Results = () => {
  const { userId } = useUserAuthStore();

  const {
    data,
    isError,
    isPending: isLoading,
  } = useQuery({
    queryKey: ["getUserResult"],
    queryFn: () => getUserTestResult(),
  });
  if (isError) console.error(isError);

  const myResultConfig = {
    mbtiType: (data) ? data.testResult : "테스트를 해주세요",
    userName: userId,
  };

  const myResult = data ? (
    <TestResultItem config={myResultConfig} isOwner={true} />
  ) : (
    <TestResultItem config={myResultConfig} isOwner={false} />
  );

  return (
    <>
      <div className="w-3/4 flex flex-col items-center gap-14">
        <section className="w-full flex flex-col items-center">
          <h4 className="mb-3 w-3/4 text-2xl font-bold">나의 결과</h4>
          {isLoading ? <div>Loading...</div> : myResult}
        </section>
        <section className="flex flex-col items-center">
          <h4 className="mb-3 w-3/4 text-2xl font-bold">모든 테스트 결과</h4>
          <div className="flex flex-col items-center gap-14">
            <TestResultList />
          </div>
        </section>
      </div>
    </>
  );
};

export default Results;