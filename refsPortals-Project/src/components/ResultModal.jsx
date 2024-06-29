import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
   { timeRemaining, targetTime, handleRestart },
   ref
) {
   const dialog = useRef();
   useImperativeHandle(ref, () => {
      return {
         open() {
            dialog.current.showModal();
         },
      };
   });

   const userLost = timeRemaining <= 0;
   const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
   const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

   return createPortal(
      <dialog
         ref={dialog}
         className="result-modal"
         onClose={handleRestart}
      >
         {userLost && <h2>You Lost</h2>}
         {!userLost && <h2>Your score : {score}</h2>}
         <p>
            The target time was <strong>{targetTime}</strong>
         </p>
         <p>
            You stopped the timer with{" "}
            <strong>{formattedTimeRemaining} seconds left.</strong>
         </p>
         <form
            method="dialog"
            onSubmit={handleRestart}
         >
            <button>Close</button>
         </form>
      </dialog>,
      document.getElementById("modal")
   );
});

export default ResultModal;
