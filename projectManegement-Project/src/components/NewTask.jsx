import { useState } from "react";

function NewTask({ onAddTask }) {
   const [enteredTask, setEnteredTask] = useState("");

   function handleChangeInput(event) {
      setEnteredTask(event.target.value);
   }

   function handleAddTask() {
      if (enteredTask.trim() === "") return;
      onAddTask(enteredTask);
      setEnteredTask("");
   }

   return (
      <div className="flex items-center gap-4">
         <input
            className="w-96 px-2 py-1 rounded-sm bg-stone-200 "
            type="text"
            onChange={handleChangeInput}
            value={enteredTask}
         />
         <button
            onClick={handleAddTask}
            className="text-stone-700 hover:text-stone-950"
         >
            Add Task
         </button>
      </div>
   );
}

export default NewTask;
