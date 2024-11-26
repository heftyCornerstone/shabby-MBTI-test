import { useState } from "react";
import { questions } from "../../data/questions";

const TestItemInput = ({ itemId, config, handleInputChange, answers }) => {

    const { id, option, type } = config;
    const qIndex = id-1;

    return (
        <div className="p-3 border-zinc-500 border-solid border-2">
            <input
                type="radio"
                name={`test-item_${itemId}`}
                id={`test-item_${itemId}`}
                value={option}
                checked={answers[qIndex]?.answer === type}
                onChange={() => handleInputChange(qIndex, type)}
            />
            <label htmlFor={`test-item_${itemId}`} className="pl-3">
                {option}
            </label>
        </div>
    );
}

const TestItem = ({ questionObj, handleInputChange, answers }) => {
    const { id, question, options, type } = questionObj;
    const types = type.split("/");

    return (
        <div className="w-5/12 bg-white rounded-md flex flex-col">
            <div className="p-8">
                <div className="mb-4 font-bold">{question}</div>
                <div className="flex flex-col gap-2">
                    {
                        options.map((option, i) => {
                            const type = types[i];
                            const config = { id, option, type };

                            return (<TestItemInput key={`${id}_${i}`} itemId={`${id}_${i}`} config={config} handleInputChange={handleInputChange} answers={answers} />)
                        })
                    }
                </div>
            </div>
        </div>
    );
};

const TestForm = ({ onTestSubmit }) => {
    //유효성 검사 필요
    const [answers, setAnswers] = useState(
        Array(questions.length).fill({ type: "", answer: "" }),
    );

    const handleInputChange = (i, value) => {
        const newAnswers = [...answers];
        newAnswers[i] = { type: questions[i].type, answer: value };
        setAnswers(newAnswers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Answers:", answers);
        onTestSubmit(answers);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full bg-slate-200 common-border">
            <div className="p-5 flex flex-col gap-10 items-center">
                {questions.map((questionObj) => (
                    <TestItem key={questionObj.id} questionObj={questionObj} handleInputChange={handleInputChange} answers={answers} />
                ))}
                <button className="lime-button w-1/4 mb-5">제출하기</button>
            </div>
        </form>
    );
};

export default TestForm;