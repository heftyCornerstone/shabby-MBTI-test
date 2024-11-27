import { useState } from "react";
import TestForm from "../components/test/Testform";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { useNavigate } from "react-router-dom";
import useUserAuthStore from "../zustand/userAuthStore";
import { createTestResult, getUserTestResult, updateTestResult } from "../api/testResult";
import { useQuery } from "@tanstack/react-query";

const TestPage = () => {
  const { userId } = useUserAuthStore();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  const { data } = useQuery({
    queryKey: ['getUserResult'],
    queryFn: () => getUserTestResult()
  })

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);

    //테스트 결과 생성, 이미 결과가 존재한다면 새 결과로 업데이트
    (data) ? updateTestResult(mbtiResult) : createTestResult({ userId, mbtiResult });

    setResult(mbtiResult);
  };

  const handleNavigateToResults = () => {
    navigate("/results");
  };

  return (
    <div className="mb-20 flex justify-center items-center">
      <div className="w-3/4 bg-white flex flex-col items-center gap-14">
        {!result ? (
          <>
            <h1 className="text-4xl font-bold">테스트지</h1>
            <TestForm onTestSubmit={handleTestSubmit}/>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold">테스트 결과: {result}</h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button onClick={handleNavigateToResults} className="lime-button">
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
