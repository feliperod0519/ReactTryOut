import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectsState, setProjectsState] = useState({
                                                      selectedProjectId:undefined,
                                                      projects:[],
                                                      tasks:[]
                                                    });

  function handleAddTask(text){
    console.log('handleAddTask',text);
    const id = Math.random();
    setProjectsState(previousState => {
                                      const newTaskData = {
                                        text: text,
                                        projectId: previousState.selectedProjectId,
                                        id: id
                                      }
                                      return {
                                                ...previousState,
                                                selectedProjectId:undefined,
                                                task: [newTaskData, ...previousState.tasks]
                                              }
                                  });
  }

  function handleDeleteTask(){
  }

  function handleStartAddProject(){
    setProjectsState(previousState => { 
                                          return {
                                                    ...previousState,
                                                    selectedProjectId:null,
                                                  }
                                      });
  }

  function handleAddProject(projectData){
        const id = Math.random();
        setProjectsState(previousState => {
                                          const newProjectData = {
                                            ...projectData,
                                            id: id
                                          }
                                          return {
                                                    ...previousState,
                                                    selectedProjectId:projectData?id:undefined,
                                                    projects:[...previousState.projects, newProjectData]
                                                  }
                                      });
  }

  function handleDeleteProject(){
    setProjectsState(previousState => { 
      return {
                ...previousState,
                selectedProjectId:undefined,
                projects:previousState.projects.filter(project => project.id !== previousState.selectedProjectId)
              }
      });
  }

  function handleSelectProject(id){
    setProjectsState(previousState => { 
      return {
                ...previousState,
                selectedProjectId:id,
              }
      });
  }

  console.log(projectsState);
  let content;
  if (projectsState.selectedProjectId === null){
     content = <NewProject onAdd={handleAddProject}/>;
  }
  else if (projectsState.selectedProjectId === undefined){
     content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
  }
  else{
    console.log('projectsState.selectedProjectId',projectsState.selectedProjectId);
    const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
    console.log('selectedProject',selectedProject);
    content = <SelectedProject project={selectedProject}
                               onDelete={handleDeleteProject}
                               onAddTask={handleAddTask}
                               onDeleteTask={handleDeleteTask}
                               tasks={projectsState.tasks} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAddProject={handleStartAddProject} 
                       projects={projectsState.projects}
                       onSelectProject={handleSelectProject}/>
      {content}
    </main>
  );
}

export default App;
