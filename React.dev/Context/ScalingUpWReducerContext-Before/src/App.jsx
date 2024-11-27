import { currentTasks, currentId, addNewTask, newId, initialTasks } from './data/data'

import TaskList from './Components/TaskList';
import Task from './Components/Task';
import AddTask from './Components/AddTask';

import { useReducer } from 'react';

function taskReducer(tasks,action){
  switch (action.type){
    case 'ADDED':{
      return [...tasks,{ id:action.id, text:action.text, done:false }]
    }
    case 'CHANGED':{
      return tasks.map(t=>{
        if (t.id === action.task.id)
          return action.task;
        else
          return t;
      })
    }
    case 'DELETED':{
      return task.filter(t=>t.id!=action.id)
    }
    default:
      return [...tasks]
  }
}

function App() {
  const [tasks,dispatcher] = useReducer(taskReducer,initialTasks);

  function handleAddTask(text){
    dispatcher({
      type: 'ADDED',
      id: newId(),
      text
    })
  }

  function handleChangeTask(task){
    dispatcher({
      type: 'CHANGED',
      task
    })
  }

  function handleDeleteTask(taskId){
    dispatcher({
      type: 'DELETED',
      id: taskId
    })
  }
  console.log('tasks:', tasks);
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
        <h1>Day off in Kyoto</h1>
        <AddTask placeHolder={'Add Task'} onAddTask={handleAddTask}/>
        <TaskList taskList={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} /> 
      </main>
    </div>
  );
}

// AddTask({placeHolder,onAddTask,children})

export default App;
