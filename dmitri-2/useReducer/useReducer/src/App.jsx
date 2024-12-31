import {initialTasks} from "./data/initialTasks";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useReducer } from "react";

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

// const initialTasks = [
//   { id: 1, text: 'Minou the cat', done: true },
//   { id: 2, text: 'FelipeRod', done: false },
//   { id: 3, text: 'Carolina', done: false }
// ];

function App() {

  const [tasks, dispatch] = useReducer(tasksReducer,initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: (initialTasks.length + 1),
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
      <>
        <h1>Hello :)</h1>
        <AddTask onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
      </>

    // <div>
    //   <header>
    //     <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    //     <h1>React Essentials</h1>
    //     <p>
    //       Fundamental React concepts you will need for almost any app you are
    //       going to build!
    //     </p>
    //   </header>
    //   <main>
    //     <h2>Time to get started!</h2>
    //   </main>
    // </div>
  );
}

export default App;
