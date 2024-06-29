import Tasks from "./Tasks";

function SelectedProject({
   project,
   tasks,
   onDeleteProject,
   onAddTask,
   onDeleteTask,
}) {
   const formattedDate = new Date(project.date).toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
   });

   const formattedTasks = tasks.filter((task) => task.projectId === project.id);
   return (
      <div className="w-[35rem] mt-16">
         <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
               <h1 className="text-3xl font-bold text-stone-600 mb-2">
                  {project.title}
               </h1>
               <button
                  onClick={onDeleteProject}
                  className="text-stone-600 hover:text-stone-950"
               >
                  Delete
               </button>
            </div>
            <p className="mb-4 text-stone-400">{formattedDate}</p>
            <p className="text-stone-600 whitespace-pre-wrap">
               {project.description}
            </p>
         </header>
         <Tasks
            tasks={formattedTasks}
            onAdd={onAddTask}
            onDelete={onDeleteTask}
         />
      </div>
   );
}

export default SelectedProject;
