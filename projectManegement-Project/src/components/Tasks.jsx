import NewTask from "./NewTask";

function Tasks({ tasks, onAdd, onDelete }) {
   return (
      <section>
         <h2 className="text-2xl font-bold text-stone-700 mb-4">
            Yapılacaklar
         </h2>
         <NewTask onAddTask={onAdd} />

         {tasks.length === 0 && (
            <p className="text-stone-800 my-4">
               Bu projeye henüz bir görev eklenmedi.
            </p>
         )}

         {tasks.length > 0 && (
            <ul className="mt-8 p-5 bg-stone-200 rounded-md">
               {tasks.map((task) => (
                  <li
                     key={task.id}
                     className="my-4 flex justify-between"
                  >
                     <span>{task.detail}</span>
                     <button
                        onClick={() => onDelete(task.id)}
                        className="text-stone-900 hover:text-red-500"
                     >
                        Clear
                     </button>
                  </li>
               ))}
            </ul>
         )}
      </section>
   );
}

export default Tasks;
