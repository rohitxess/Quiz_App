// create questions for the quiz 

import { useState } from "react";

/**
 * Simple view with title and answers 
 * title: string 
 * choices: string[]
 * image?:  string 
 */

export function Quiz (QuizData, socket, userId, problemId): {
    QuizData: {
        title: string;
        options: string[];
    },
    socket:any;
    roomId: string;
    userId: string;
    problemId: string;
}) {
    const [submitted, setSubmitted] = useState(false);
    const [submission, setSubmission] = useState(0);

    return (
        <div className="h-screen">
            <div className="flex w-full justify-center"></div>
                <div className="">
                    <SingleQuiz 
                        choices={quizData.options.map(x => x.title)}
                        title = {quizData.title}
                        imageURL={""}
                        setSelected={setSubmission}
                        />
                    <div className="flex justify-between w-full mt-4 text-white">
                        <button 
                            className="py-3 px-10 bg-indigo-600 rounded-lg mx-8"
                            disabled={submitted}
                            onClick={() => {
                                setSubmitted=(true);
                                socket.emit("submit", {
                                    userId,
                                    problemId, 
                                    submission: Number(submission),
                                    roomId,
                                })
                            }}
                        > Submit </button>
                    </div>
                </div>
        </div>
    );
}


type SingleQuizProps = {
    title: string;
    choices: string[];
    imageURL?: string;
    setSelected: any;
};

function SingleQuiz({title, choices, imageURL, setSelected}: SingleQuizProps) {
    return (
        <article>
            <h4 className="mt-10 text-x1">Question</h4>
            <div className="mt-4 text-2x">{title}</div>
            {imageURL && <img src={imageURL} alt=""/>}
            {choices.length && choices.map ((choice, index) => {
                return (
                    <div key={index} className="flex items-center w-full py-4 pl-5 m-2 m1-0 space-x-2 border-2 cursor pointer border-white/10 rounded-x1 bg-white/5">
                        <input 
                        type="radio"
                        name="option"
                        value={choice}
                        className="w-6 h-6 bg-black"
                        onClick={() => {
                            setSelected(index)
                        }}
                    />
                        <p className="m1-6">{choices}</p>
                    </div>
                );
            })}
            <div className="flex flex-col items-start w-full"></div>
        </article>
    );
}

// need to add dependencies for css-tailwind