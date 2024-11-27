import { useState } from "react";
import { questions } from "../../data/questions";
import { useNavigate } from "react-router-dom";
import TestItem from "./TestItem";
import { testFormContext } from "../../context/testFormContext";

export const TestForm = ({ onTestSubmit }) => {

    const navigate = useNavigate();
    const answersState = useState(
        Array(questions.length).fill({ type: "", answer: "" }),
    );
    const [answers] = answersState;

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onTestSubmit(answers);
        navigate("/results");
    };

    return (
        <form onSubmit={handleSubmit} className="w-full bg-slate-200 common-border">
            <div className="p-5 flex flex-col gap-10 items-center">
                <testFormContext.Provider value={answersState}>
                    {questions.map((questionObj) => (
                        <TestItem
                            key={questionObj.id}
                            questionObj={questionObj}
                        />
                    ))}
                </testFormContext.Provider>
                <button className="lime-button w-1/4 mb-5">제출하기</button>
            </div>
        </form>
    );
};

