import React, { useState } from 'react';
import '../components/Quiz.css';
import Results from '../components/Results'

function Quiz() {
    const QuestionBank = [
        {
            question: "What is your Country Name?",
            options: ["Nepal", "Bangladesh", "India", "Japan"],
            answer: "Nepal",
        },
        {
            question: "What is the capital of your country",
            options: ["Tokyo", "Beijing", "New Delhi", "Kathmandu"],
            answer: "Kathmandu",
        },
        {
            question: "What is your favorite game?",
            options: ["Football", "Cricket", "Basketball", "Table Tennis"],
            answer: "Cricket",
        },
        {
            question: "What is your district Name?",
            options: ["Dhanusha", "Jhapa", "Kathmandu", "Bara"],
            answer: "Dhanusha",
        }
    ];

    const userAnswers = [null, null, null, null];
    const [questionNumber, setQuestionNumber] = useState(0);
    const [userSelectedAnswer, setUserSelectedAnswer] = useState(userAnswers);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const selectedAnswer = userSelectedAnswer[questionNumber]

    function handleUserSelectedAnswer(option){
        const newUserAnswers = [...userSelectedAnswer];
        newUserAnswers[questionNumber] = option;
        setUserSelectedAnswer(newUserAnswers);// also update selectedAnswer
    }

    function Next() {
        if(questionNumber==QuestionBank.length-1){
            setIsQuizFinished(true)
        }
        else{
             setQuestionNumber(questionNumber + 1);
        }
    }

    function Back() {
            setQuestionNumber(questionNumber - 1);
    }

    if (isQuizFinished)
    {
        return <Results/>;
    }

    return (
        <>
            <div className="question">
                <h2>Question {questionNumber + 1}</h2>
            </div>

            <div className='options'>
                <h2>{QuestionBank[questionNumber].question}</h2>
                
                {QuestionBank[questionNumber].options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleUserSelectedAnswer(option)}
                        className={userSelectedAnswer[questionNumber] === option ? "selected" : ""}
                    >
                        {option}
                    </button>
                ))}
            </div>

            <div className='btn-holder'>
                <button className="Previous btn" onClick={Back} disabled ={questionNumber===0}>Previous</button>
                <button className="gotoNext btn" onClick={Next} disabled = {!selectedAnswer}> {questionNumber === QuestionBank.length-1? "Finish Quiz": "Next"}</button>
            </div>
        </>
    );
}

export default Quiz;
