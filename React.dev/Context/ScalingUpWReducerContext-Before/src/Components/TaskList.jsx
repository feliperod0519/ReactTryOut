import Task from './Task';

const TaskList = function TaskList({taskList, onChangeTask, onDeleteTask})
{
    console.log('tasklist 2:',taskList);
    return (
    <ul>
      {taskList.map(task => (
        <li key={task.id}>
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

/*
return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
*/