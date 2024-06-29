import { useState, useRef } from "react";

function useProjectsState() {
   const modal = useRef();

   const title = useRef();
   const description = useRef();
   const date = useRef();

   const [projectsState, setProjectsState] = useState({
      selectedProjectId: undefined,
      projects: [],
      tasks: [],
   });

   function handleSaveNewProject() {
      const enteredTitle = title.current.value;
      const enteredDescription = description.current.value;
      const enteredDate = date.current.value;

      //  validation front-end

      if (
         (enteredTitle.trim() === "") |
         (enteredDescription.trim() === "") |
         (enteredDate.trim() === "")
      ) {
         modal.current.open();
      }
      setProjectsState((prevStates) => {
         const projectId = Math.random();
         return {
            ...prevStates,
            selectedProjectId: projectId,
            projects: [
               {
                  id: projectId,
                  title: title.current.value,
                  description: description.current.value,
                  date: date.current.value,
               },
               ...prevStates.projects,
            ],
         };
      });
   }

   function handleStartNewProject() {
      setProjectsState((prevStates) => {
         return {
            ...prevStates,
            selectedProjectId: null,
         };
      });
   }

   function handleCancelNewProject() {
      setProjectsState((prevStates) => {
         return {
            ...prevStates,
            selectedProjectId: undefined,
         };
      });
   }

   function handleSelectProject(id) {
      setProjectsState((prevStates) => {
         return {
            ...prevStates,
            selectedProjectId: id,
         };
      });
   }

   function handleDeleteProject() {
      setProjectsState((prevState) => {
         return {
            ...prevState,
            selectedProjectId: undefined,
            projects: prevState.projects.filter(
               (project) => project.id !== prevState.selectedProjectId
            ),
         };
      });
   }

   function handleAddTask(text) {
      setProjectsState((prevState) => {
         return {
            ...prevState,
            tasks: [
               {
                  id: Math.random(),
                  projectId: prevState.selectedProjectId,
                  detail: text,
               },
               ...prevState.tasks,
            ],
         };
      });
   }
   function handleDeleteTask(id) {
      setProjectsState((prevState) => {
         return {
            ...prevState,
            tasks: prevState.tasks.filter((task) => task.id !== id),
         };
      });
   }

   return {
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
   };
}

export default useProjectsState;
