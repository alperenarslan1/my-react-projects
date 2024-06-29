import { useState, useEffect } from "react";

function QuestionTimer({ timeout, onTimeout, mode }) {
   const [remainingTime, setRemainingTime] = useState(timeout);

   useEffect(() => {
      console.log("TIMEOUT setting");
      const timer = setTimeout(onTimeout, timeout);

      return () => {
         clearTimeout(timer);
      };
   }, [timeout, onTimeout]);

   useEffect(() => {
      console.log("INTERVAL setting");
      const interval = setInterval(() => {
         setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
      }, 100);

      return () => {
         clearInterval(interval);
      };
   }, []);

   return (
      <progress
         value={remainingTime}
         max={timeout}
         className={mode}
      ></progress>
   );
}

export default QuestionTimer;
