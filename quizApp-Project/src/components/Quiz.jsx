import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question";

export default function Quiz() {
   const [userAnswers, setUserAnswers] = useState([]);

   const activeQuestionIndex = userAnswers.length;

   const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

   const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
      setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
   }, []);

   const handleSkipQuestion = useCallback(
      () => handleSelectAnswer(null),
      [handleSelectAnswer]
   );

   if (quizIsComplete) {
      return (
         <div id="summary">
            <img
               src={quizCompleteImg}
               alt="icon"
            />
            <h2> Quiz Completed!</h2>
         </div>
      );
   }

   return (
      <div id="quiz">
         <Question
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipQuestion={handleSkipQuestion}
         />
      </div>
   );
}
