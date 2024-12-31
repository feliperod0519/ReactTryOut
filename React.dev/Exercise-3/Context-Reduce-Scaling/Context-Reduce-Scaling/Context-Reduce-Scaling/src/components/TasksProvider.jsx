import { TaskContext } from "../store/TasksContext";
import { TaskDispatchContext } from "../store/TaskDispatchContext";
import { initialTasks } from "../data/tasks";
import { useReducer } from "react";

export function TaskProvider({children}){

    const [tasks, dispatch] = useReducer(taskReducer,initialTasks);

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

function taskReducer(tasks,action){
    switch (action.type){
        case 'added':{
            return [...tasks, { id: action.id, text: action.text, done: false}]
        }
        case 'changed':{
            return tasks.map(t=>{
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            })
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
          }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}