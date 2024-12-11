import { initialTask, nextId } from './data/initialTasks';
import { TasksContext } from "./store/TasksContext";
import { TasksDispatchContext } from "./store/TasksDispatchContext";
import { useReducer } from "react";
import { taskReducer } from "./store/TaskReducer";
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {

  const [ tasks, dispatchFunction ] = useReducer(taskReducer,initialTask);
  let newId = nextId

  function handleAddTask(text) {
    dispatchFunction({
      type: 'added',
      id: newId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatchFunction({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatchFunction({
      type: 'deleted',
      id: taskId
    });
  }


  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
        <TasksContext.Provider value={tasks}>
          <TasksDispatchContext.Provider value={dispatchFunction}>
            <h1>Day off in Kyoto</h1>
            <AddTask onAddTask={handleAddTask}/>
            <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
          </TasksDispatchContext.Provider>
        </TasksContext.Provider>
      </main>
    </div>
  );tasks
}

export default App;
