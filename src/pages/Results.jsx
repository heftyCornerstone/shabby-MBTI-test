import { mbtiDescriptions } from "../utils/mbtiCalculator";
import useUserAuthStore from "../zustand/userAuthStore";
import useGetTestResults from "../hooks/useGetTestResults";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getUserTestResult,
  updateTestResultVisibility,
} from "../api/testResult";

/*
updateTestResultVisibility API로 공개 여부를 변경합니다.
deleteTestResult API로 결과를 삭제합니다.
refresh 기능:
- `visibility` 변경 또는 삭제 후 부모 컴포넌트에서 데이터를 다시 가져오도록 콜백을 넘깁니다. (렌더링이 다시 되도록!)
- TanstackQuery 를 이용하면 조금 더 쉽게 가능 할 것입니다.
*/
const TestResultItemBtnSet = () => {
  const queryClient = useQueryClient();
  const { userId } = useUserAuthStore();
  //til 거리
  const { data, isError: isGetError } = useQuery({
    queryKey: ["getUerResult"],
    queryFn: () => getUserTestResult(userId),
  });
  if (isGetError) console.error(isGetError);
  console.log("re-renderd! ", data.visibility);

  const { mutate } = useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries(["getUerResult"]);
    },
  });

  const handleVisibility = () => {
    mutate(userId);
  };

  return (
    <div className="justify-end flex gap-4">
      <button
        onClick={handleVisibility}
        type="button"
        className="sm-button bg-lime-600 hover:bg-lime-700"
      >
        {data.visibility ? "숨기기" : "보이기"}
      </button>
      <button
        type="button"
        className="sm-button bg-slate-500 hover:bg-slate-600"
      >
        삭제하기
      </button>
    </div>
  );
};

// `TestResultItem`은 각 항목의 개별적인 동작(공개 여부 변경, 삭제)을 처리합니다.
const TestResultItem = ({ config, isOwner }) => {
  const { userName, mbtiType } = config;
  const content = mbtiDescriptions[mbtiType].split(":")[1];

  return (
    <div className="w-3/4 flex flex-col items-center rounded-md bg-stone-800">
      <div className="w-full p-5 pl-8 flex justify-between border-b-2 border-white">
        <h4 className="text-white text-xl font-bold">{userName}</h4>
        {isOwner || <TestResultItemBtnSet />}
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

//`TestResultList`는 데이터를 받아서 필터링 및 리스트 렌더링을 담당합니다.
const TestResultList = () => {
  const { userId } = useUserAuthStore();
  const { testResultsData, isLoading } = useGetTestResults();

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        testResultsData.map(({ id, testResult, visibility }) => {
          const isOwner = !(id === userId);
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
  //각 항목을 TestResultItem으로 렌더링합니다.
  const { userId } = useUserAuthStore();

  const {
    data,
    isError,
    isPending: isLoading,
  } = useQuery({
    queryKey: ["getUerResult"],
    queryFn: () => getUserTestResult(userId),
  });
  if (isError) console.error(isError);

  const myResultConfig = {
    mbtiType: data.testResult,
    userName: userId,
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-3/4 flex flex-col items-center gap-14">
          <div className="flex flex-col items-center">
            <h4 className="mb-3 w-3/4 text-2xl font-bold">나의 결과</h4>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <TestResultItem config={myResultConfig} isMine={true} />
            )}
          </div>
          <div className="flex flex-col items-center">
            <h4 className="mb-3 w-3/4 text-2xl font-bold">모든 테스트 결과</h4>
            <div className="flex flex-col items-center gap-14">
              <TestResultList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;

/*
<div className="flex flex-col items-center">
  <h4 className="mb-3 w-3/4 text-2xl font-bold">나의 결과</h4>
  <TestResultItem
    mbtiType={testResult}
    userName={userId}
    isMine={true}
  />
</div>
*/
