import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

function TimerChallenge({ title, targetTime }) {
   const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

   const timer = useRef();
   const dialog = useRef();

   const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

   if (timeRemaining <= 0) {
      clearInterval(timer.current);
      dialog.current.open();
   }

   function handleRestart() {
      setTimeRemaining(targetTime * 1000);
   }
   function handleStart() {
      timer.current = setInterval(() => {
         setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
      }, 10);
   }
   function handleStop() {
      //  kazandı
      dialog.current.open();
      clearInterval(timer.current);
   }
   return (
      <>
         <ResultModal
            handleRestart={handleRestart}
            ref={dialog}
            targetTime={targetTime}
            timeRemaining={timeRemaining}
         />

         <section className="challenge">
            <h2 className={timerIsActive ? "active" : undefined}>{title}</h2>
            <p className="challenge-time">
               {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>

            <p>
               <button onClick={timerIsActive ? handleStop : handleStart}>
                  {timerIsActive ? "Stop" : "Start"} Challenge
               </button>
            </p>

            <p className="mt-4">
               {timerIsActive ? "Time is running" : "Timer inactive"}
            </p>
         </section>
      </>
   );
}

export default TimerChallenge;
