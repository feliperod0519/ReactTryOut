import Task from "./Task";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }){

    return (
        <ul>
            {tasks.map(t=>{
                return <li key={t.id}>
                            <Task task={t} onChange={onChangeTask} onDelete={onDeleteTask} />
                       </li>
            })}
        </ul>
    );
}