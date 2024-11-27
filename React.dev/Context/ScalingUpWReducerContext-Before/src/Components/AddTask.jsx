import { useState } from "react";

const AddTask = function AddTask({placeHolder,onAddTask,children}){
    const [text,setText] = useState('');
    const handleOnChange = e => setText(e.event.target)
    return (<>
                <input placeholder={placeHolder}
                       value={text}
                       onChange={handleOnChange}/>
                <button onClick={()=>{
                    setText('');
                    onAddTask(text);
                }}>{children}</button>    
            </>)
}

export default AddTask;