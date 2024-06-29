import { useRef, useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import Modal from "./components/Modal";
import SelectedProject from "./components/SelectedProject";
import useProjectsState from "./components/useProjectsState";

function App() {
   const {
      projectsState,
      handleSaveNewProject,
      handleStartNewProject,
      handleCancelNewProject,
      handleSelectProject,
      handleDeleteProject,
      handleAddTask,
      handleDeleteTask,
      modal,
      title,
      description,
      date,
   } = useProjectsState();

   const selectedProject = projectsState.projects.find(
      (project) => project.id === projectsState.selectedProjectId
   );

   console.log(projectsState);

   let content = (
      <SelectedProject
         project={selectedProject}
         tasks={projectsState.tasks}
         onDeleteProject={handleDeleteProject}
         onAddTask={handleAddTask}
         onDeleteTask={handleDeleteTask}
      />
   );

   if (projectsState.selectedProjectId === null) {
      content = (
         <NewProject
            title={title}
            description={description}
            date={date}
            saveProject={handleSaveNewProject}
            cancelProject={handleCancelNewProject}
         />
      );
   } else if (projectsState.selectedProjectId === undefined) {
      content = <NoProjectSelected onStartNewProject={handleStartNewProject} />;
   }

   return (
      <>
         <main className="h-screen my-8 flex gap-8">
            <SideBar
               projects={projectsState.projects}
               onStartNewProject={handleStartNewProject}
               onSelectProject={handleSelectProject}
               selectedProjectId={projectsState.selectedProjectId}
            />
            <Modal
               ref={modal}
               buttonCaption="Close"
            >
               <h2 className="text-xl font-bold text-stone-700 my-4">
                  İnvalid input
               </h2>
               <p className="text-stone-600 mb-4">
                  oops ... looks like you forgot to enter a value.
               </p>
               <p className="text-stone-600 mb-4">
                  Please make sure you provide a valid value for every input
                  field.
               </p>
            </Modal>
            {content}
         </main>
      </>
   );
}

export default App;
