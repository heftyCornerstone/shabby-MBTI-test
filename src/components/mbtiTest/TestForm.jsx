import { useState } from "react";
import { questions } from "../../data/questions";
import { useNavigate } from "react-router-dom";
import TestItem from "./TestItem";
import { testFormContext } from "../../context/testFormContext";
import Swal from "sweetalert2";

export const TestForm = ({ onTestSubmit }) => {
    const navigate = useNavigate();

    //testItem의 input 내용을 저장한다
    const answersState = useState(
        Array(questions.length).fill({ type: "", answer: "" }),
    );
    const [answers] = answersState;

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onTestSubmit(answers);
        Swal.fire({
            text: "3초 뒤에 결과 페이지로 이동합니다",
            icon: "success"
        });
        setTimeout(()=>navigate("/results"), 3000);
        ;
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

