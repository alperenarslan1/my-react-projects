import Button from "./Button";
import noProjectImage from "/logo.png";

function NoProjectSelected({ onStartNewProject }) {
   return (
      <div className="mt-24 text-center w-2/3">
         <img
            className="size-16 mx-auto "
            src={noProjectImage}
            alt="empty task list logo"
         />
         <h2 className="text-xl font-bold text-stone-500 my-4">
            No Project Selected
         </h2>
         <p className="text-stone-400 mb-4">
            Select a project or get started with a new one
         </p>
         <p className="mt-8">
            <Button onClick={onStartNewProject}>Create new project </Button>
         </p>
      </div>
   );
}

export default NoProjectSelected;
