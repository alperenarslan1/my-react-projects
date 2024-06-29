import Button from "./Button";

function SideBar({
   onStartNewProject,
   projects,
   onSelectProject,
   selectedProjectId,
}) {
   return (
      <>
         <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
               YOUR PROJECTS
            </h2>
            <Button onClick={onStartNewProject}>+ Add Project</Button>
            <ul className="mt-8">
               {projects.map((project) => {
                  let cssClasses =
                     "my-1 w-full px-2 py-1 text-left hover:text-stone-200 hover:bg-stone-800 rounded-sm";
                  if (project.id === selectedProjectId) {
                     cssClasses += " bg-stone-800 text-stone-200";
                  } else {
                     cssClasses += " text-stone-400";
                  }

                  return (
                     <li key={project.id}>
                        <button
                           onClick={() => onSelectProject(project.id)}
                           className={cssClasses}
                        >
                           {project.title}
                        </button>
                     </li>
                  );
               })}
            </ul>
         </aside>
      </>
   );
}
export default SideBar;

// https://github.com/sudheerj/reactjs-interview-questions/tree/master/coding-exercise
