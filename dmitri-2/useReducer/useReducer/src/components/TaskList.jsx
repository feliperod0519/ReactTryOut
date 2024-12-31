import Task from "./Task";
import { useState } from "react";

export default function TaskList({
    tasks,
    onChangeTask,
    onDeleteTask
}){
    return (
        <ul>
            {tasks.map(t=>(
                <li key={t.id}>
                    <Task task={t} onChange={onChangeTask} onDelete={onDeleteTask} />
                </li>
            ))}
        </ul>
    );
}