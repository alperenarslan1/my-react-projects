import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
   useEffect(() => {
      const timer = setTimeout(() => {
         onConfirm();
      }, TIMER);
      console.log("TIMER");

      return () => {
         console.log("timer clean");
         clearTimeout(timer);
      };
   }, [onConfirm]);
   console.log("komponent");
   return (
      <div id="delete-confirmation">
         <h2>Are you sure?</h2>
         <p>Do you really want to remove this place?</p>
         <div id="confirmation-actions">
            <button
               onClick={onCancel}
               className="button-text"
            >
               No
            </button>
            <button
               onClick={onConfirm}
               className="button"
            >
               Yes
            </button>
         </div>
         <ProgressBar />
      </div>
   );
}
