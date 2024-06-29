import { useState } from "react";

import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
   const [investmentValues, setInvestmentValues] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
   });

   function handleChangeInput(inputIdentifier, newValue) {
      setInvestmentValues((prevInputs) => {
         return {
            ...prevInputs,
            [inputIdentifier]: +newValue,
         };
      });
   }

   const inputIsValid =
      investmentValues.duration >= 1 && investmentValues.duration <= 100;
   return (
      <>
         <UserInput
            handleChange={handleChangeInput}
            investmentValues={investmentValues}
         />
         {!inputIsValid && (
            <p className="center">
               Lütfen yatırım süresini 0'dan büyük ve 100 yıldan küçük giriniz
            </p>
         )}
         {inputIsValid && <Result investmentValues={investmentValues} />}
      </>
   );
}

export default App;
