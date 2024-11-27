import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { useNavigate } from "react-router-dom";
import useUserAuthStore from "../zustand/userAuthStore";
import { createTestResult} from "../api/testResult";
import useGetUserTestResult from "../hooks/useGetUserTestResult";
import { TestForm } from "../components/test/TestForm";


const TestPage = () => {
  const { userId } = useUserAuthStore();
  const navigate = useNavigate();

  const { data } = useGetUserTestResult();
  const testResult = (data) ? data.testResult : null;

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);

    //테스트 결과 생성
    createTestResult({ userId, mbtiResult });
  };

  const handleNavigateToResults = () => {
    navigate("/results");
  };

  return (
    <div className="mb-20 w-3/4 bg-white flex flex-col items-center gap-14">
      {!data ? (
        <>
          <h1 className="text-4xl font-bold">테스트지</h1>
          <TestForm onTestSubmit={handleTestSubmit} />
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold">테스트 결과: {testResult}</h1>
          <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[testResult] ||
              "해당 성격 유형에 대한 설명이 없습니다."}
          </p>
          <button onClick={handleNavigateToResults} className="lime-button">
            결과 페이지로 이동하기
          </button>
        </>
      )}
    </div>
  );
};

export default TestPage;
