import Task from "./Task";

const TaskList = ({ tasks,onChangeTask, onDeleteTask }) => {
    return (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
            </li>
          ))}
        </ul>
      );
}

export default TaskList;