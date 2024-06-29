import { useState, useRef } from "react";

export default function Player() {
   const [enteredPlayerName, setEnteredPlayerName] = useState(undefined);

   const playerName = useRef();

   function handleClick() {
      setEnteredPlayerName(playerName.current.value);
      playerName.current.value = "";
   }

   return (
      <section
         className="text-center"
         id="player"
      >
         <h2 className="text-emerald-500 mb-3 text-lg">
            Welcome {enteredPlayerName ?? "unknown entity"}
         </h2>
         <p className="flex justify-center items-center">
            <input
               ref={playerName}
               className="border-emerald-600 border bg-emerald-900 p-1.5 text-white rounded rounded-r-none"
               type="text"
            />
            <button
               onClick={handleClick}
               className="bg-emerald-500 py-1.5  px-4 border border-emerald-500 rounded-r hover:bg-emerald-700 hover:border-emerald-600 text-black"
            >
               Set Name
            </button>
         </p>
      </section>
   );
}
