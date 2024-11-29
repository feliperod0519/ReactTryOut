import { useState, useCallback } from "react";
import QUESTIONS from '../data/questions.js'
import quizCompleteImg from '../assets/quiz-complete.png'

import Question from "./Question.jsx";

export default function Quiz(){

    const [ userAnswers, setUserAnswers ] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback( function handleSelectAnswer(selectedAnswer){
                                                setUserAnswers((prevUserAnswers)=>{
                                                    return [...prevUserAnswers, selectedAnswer]
                                                })
                                            },[]);

    const handleSkipAnswer = useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer]);

    if (quizIsComplete){
        return <div id="summary">
                <img src={quizCompleteImg} alt="Trophy Icon!" />
                <h2>Quiz Completed!</h2>
               </div>
    }
    
    return (<div id="quiz">
                <Question key= {activeQuestionIndex}
                          questionIndex={activeQuestionIndex}
                          questionText={QUESTIONS[activeQuestionIndex].text} 
                          answers={QUESTIONS[activeQuestionIndex].answers}
                          selectedAnswer={useCallback[userAnswers.length -1]}
                          onSelectAnswer={handleSelectAnswer} 
                          onSkipAnswer={handleSkipAnswer}/>
            </div>);
    
}