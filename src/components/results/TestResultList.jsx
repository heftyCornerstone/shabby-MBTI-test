import useGetTestResults from "../../hooks/useGetTestResults";
import { mbtiDescriptions } from "../../utils/mbtiCalculator";
import useUserAuthStore from "../../zustand/userAuthStore";
import TestResultItemBtnSet from "./TestResultItemBtnSet";


export const TestResultItem = ({ config, isOwner }) => {
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

export const TestResultList = () => {
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