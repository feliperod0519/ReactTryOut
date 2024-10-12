import { useRef, useState } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({title, targetTime}) {
    
    // const [timerExpired, setTimerExpired] = useState(false);
    // const [timerStarted, setTimerStarted] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
    const timer = useRef();
    const dialog = useRef();
    
    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();  
    }

    function handleStart(){
        timer.current=setInterval(() => {
            //setTimerExpired(true);
            //dialog.current.open();
            setTimeRemaining((prevTimeRemaining)=>prevTimeRemaining-10);
        }, 10);
        //setTimerStarted(true);
    }

    function handleReset(){
        setTimeRemaining(targetTime * 1000);
    }

    function handleStop(){
        //clearTimeout(timer.current);
        //setTimerStarted(false);
        dialog.current.open();
        clearInterval(timer.current);
    }
    
    return (
      <>
        <ResultModal ref={dialog} 
                     targetTime={targetTime}
                     remainingTime={timeRemaining}
                     onReset={handleReset} />
        <section className="challenge">
            <h2>{title}</h2>
            {/* {timerExpired && <p>You Lost!</p>} */}
            <p className="challenge-time">
                {targetTime} second{targetTime>1?'s':''}
            </p>
            <p>
                <button onClick={timerIsActive?handleStop:handleStart}>
                    {timerIsActive?'Stop':'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive?'active':undefined}>
            {timerIsActive?'Time is running':'Timer inactive'}
            </p>
        </section>
      </>
    );
}