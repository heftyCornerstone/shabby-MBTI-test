import useUserAuthStore from "../../zustand/userAuthStore";
import useResultManager from "../../hooks/useResultManager";

const TestResultItemBtnSet = () => {
    const { userId } = useUserAuthStore();
    const { data, isLoading, petchVisibility, deleteResult } = useResultManager(userId);

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

export default TestResultItemBtnSet;