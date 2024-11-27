import { useContext } from "react";
import { questions } from "../../data/questions";
import { testFormContext } from "../../context/testFormContext";

const TestItemInput = ({ itemId, config }) => {
    const [answers, setAnswers] = useContext(testFormContext);
    const { id, option, type } = config;
    const qIndex = id - 1;

    const handleInputChange = (i, value) => {
        const newAnswers = [...answers];
        newAnswers[i] = { type: questions[i].type, answer: value };
        setAnswers(newAnswers);
    };

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

const TestItem = ({ questionObj }) => {
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

                            return (
                                <TestItemInput
                                    key={`${id}_${i}`}
                                    itemId={`${id}_${i}`}
                                    config={config}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default TestItem;