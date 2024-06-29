import { useRef } from "react";

function Answers({ answers, selectedAnswer, answerState, onSelect }) {
   const shuffledAnswers = useRef();

   if (!shuffledAnswers.current) {
      shuffledAnswers.current = [...answers];
      shuffledAnswers.current.sort(() => Math.random() - 0.5);
   }

   console.log("shuffledanswerlistesi", shuffledAnswers.current);
   return (
      <ul id="answers">
         {shuffledAnswers.current.map((answer) => {
            let cssClass = "";
            let isSelected = selectedAnswer === answer;

            if (answerState === "answered" && isSelected) {
               cssClass = "selected";
            }

            if ((answerState === "correct" || answerState === "wrong") && isSelected) {
               cssClass = answerState;
            }
            return (
               <li
                  key={answer}
                  className="answer"
               >
                  <button
                     onClick={() => onSelect(answer)}
                     className={cssClass}
                     disabled={answerState !== ""}
                  >
                     {answer}
                  </button>
               </li>
            );
         })}
      </ul>
   );
}

export default Answers;
