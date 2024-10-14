import { useState } from "react";

export default function NewTask({onAdd}){
    
    const [task, setTask] = useState('');

    function handleChange(event){
        setTask(event.target.value);
    }

    function handleClick(){
        onAdd(task);
        setTask('');
    }

    return (
        <div className="flex flex-col gap-4">
            <input type="text" 
                   className="w-64 px-2 py-1 rounded-sm bg-stone-200" 
                   onChange={handleChange}
                   value={task}/>
            <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
        </div>
    );
}