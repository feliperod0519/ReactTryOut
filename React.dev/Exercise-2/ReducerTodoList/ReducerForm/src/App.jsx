import { initialTasks } from "./data/initialState";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { taskReducer } from "./functions/TaskReducer";
import { useReducer } from "react";

function App() {

  let nextId = initialTasks.length;

  const [tasks, dispatchTask ] = useReducer(taskReducer,initialTasks);

  function handleAddTask(text) {
    dispatchTask({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatchTask({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatchTask({
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
        <h1>Prague itinerary</h1>
        <AddTask onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
      </main>
    </div>
  );
}

export default App;
