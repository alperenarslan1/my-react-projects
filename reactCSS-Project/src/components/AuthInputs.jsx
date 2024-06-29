import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function AuthInputs() {
   const [enteredEmail, setEnteredEmail] = useState("");
   const [enteredPassword, setEnteredPassword] = useState("");
   const [submitted, setSubmitted] = useState(false);

   function handleInputChange(identifier, value) {
      if (identifier === "email") {
         setEnteredEmail(value);
      } else {
         setEnteredPassword(value);
      }
   }

   function handleLogin() {
      setSubmitted(true);
   }

   const emailNotValid = submitted && !enteredEmail.includes("@");
   const passwordNotValid = submitted && enteredPassword.trim().length < 6;

   return (
      <div className="w-100 max-w-sm bg-gradient-to-b from-stone-700 to-stone-800 p-8 rounded shadow-md mx-auto">
         <div className="flex flex-col gap-3">
            <Input
               label="email"
               invalid={emailNotValid}
               onChange={(event) => handleInputChange("email", event.target.value)}
            />
            <Input
               label="password"
               invalid={passwordNotValid}
               onChange={(event) =>
                  handleInputChange("password", event.target.value)
               }
            />
         </div>
         <div className="mt-2 flex justify-between ">
            <button
               type="button"
               className=" text-amber-400 hover:text-amber-300"
            >
               Create a new account
            </button>
            <Button onClick={handleLogin}>Sign In</Button>
         </div>
      </div>
   );
}
