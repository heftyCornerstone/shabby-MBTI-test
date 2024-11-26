import { questions } from "../../data/questions";

const TestItemInput = ({ itemId, option }) => {
    return (
        <div className="p-3 border-zinc-500 border-solid border-2">
            <input
                type="radio"
                name={`test-item_${itemId}`}
                id={`test-item_${itemId}`}
                value={option}
            />
            <label htmlFor={`test-item_${itemId}`} className="pl-3">
                {option}
            </label>
        </div>
    );
}

const TestItem = ({ questionObj }) => {
    const { id, question, options } = questionObj;

    return (
        <div className="w-5/12 bg-white rounded-md flex flex-col">
            <div className="p-8">
                <div className="mb-4 font-bold">{question}</div>
                <div className="flex flex-col gap-2">
                    <TestItemInput itemId={`${id}_0`} option={options[0]} />
                    <TestItemInput itemId={`${id}_1`} option={options[1]} />
                </div>
            </div>
        </div>
    );
};

const TestForm = () => {
    //유효성 검사 필요
    return (
        <form className="w-full bg-slate-200 common-border">
            <div className="p-5 flex flex-col gap-10 items-center">
                {questions.map((questionObj) => (
                    <TestItem key={questionObj.id} questionObj={questionObj} />
                ))}
                <button className="lime-button w-1/4 mb-5">제출하기</button>
            </div>
        </form>
    );
};

export default TestForm;