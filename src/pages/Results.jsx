import useUserAuthStore from "../zustand/userAuthStore";
import useGetUserTestResult from "../hooks/useGetUserTestResult";
import { TestResultItem, TestResultList } from "../components/results/TestResultList";

const Results = () => {
  const { userId } = useUserAuthStore();
  const { data, isLoading } = useGetUserTestResult(userId);

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
        <section className="w-full flex flex-col items-center">
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