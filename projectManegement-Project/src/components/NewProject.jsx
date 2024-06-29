import Input from "./Input";

function NewProject({ title, description, date, saveProject, cancelProject }) {
   return (
      <div className="w-[35rem] mt-16">
         <menu className="flex items-center justify-end gap-4 my-4">
            <li className="flex justify-between my-4">
               <button
                  onClick={cancelProject}
                  className="text-stone-800 hover:text-stone-950"
               >
                  Cancel
               </button>
            </li>
            <li className="flex justify-between my-4">
               <button
                  onClick={saveProject}
                  className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
               >
                  Save
               </button>
            </li>
         </menu>

         <div>
            <Input
               ref={title}
               label="Title"
               type="text"
            />
            <Input
               ref={description}
               label="Description"
               textarea
            />
            <Input
               ref={date}
               label="Due Date"
               type="date"
            />
         </div>
      </div>
   );
}

export default NewProject;
