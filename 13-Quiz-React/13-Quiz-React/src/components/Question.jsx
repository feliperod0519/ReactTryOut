import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import { useState } from 'react';
import QUESTIONS from '../data/questions.js';

export default function Question({ questionIndex,onSelectAnswer,  onSkipAnswer}){
    
    const [ answer, setAnswer ] = useState({
        selectedAnswer: '',
        isCorrect:null
    })

    function handleSelectAnswer(answer){
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })
        setTimeout(()=>{
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[questionIndex].answers[0] === answer
            })

            setTimeout(()=>{
                onSelectAnswer(answer);
            },2000)
        },1000)
    }

    let answerState = '';
    if (answer.selectedAnswer && answer.isCorrect !== null){
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer){
        answerState = 'answered'
    }

    return <div id="question">
                <QuestionTimer timeout={10000} 
                               onTimeOut={onSkipAnswer} />
                <h2>{ QUESTIONS[questionIndex].text }</h2>
                <Answers answers={QUESTIONS[questionIndex].answers} 
                        selectedAnswer={answer.selectedAnswer}
                        answerState={answerState}
                        onSelect={onSelectAnswer} />
            </div>
}