import { useEffect, useState } from "react";

const TIME = 3000;

function ProgressBar() {
   const [remainingTime, setRemainingTime] = useState(TIME);

   useEffect(() => {
      const interval = setInterval(() => {
         setRemainingTime((prevTime) => prevTime - 10);
      }, 10);

      console.log("INTERVAL");
      return () => {
         console.log("cleaning interval");
         clearInterval(interval);
      };
   }, []);

   return (
      <progress
         value={remainingTime}
         max={TIME}
      ></progress>
   );
}

export default ProgressBar;
