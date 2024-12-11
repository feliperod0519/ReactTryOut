import TasksContext from "./TasksContext";
import TasksDispatchContext from "./TasksDispatchContext";
import { useReducer } from "react";

export function TaskProvider({children}){
    <TasksContext.Provider>
        <TasksDispatchContext>
            {children}
        </TasksDispatchContext>
    </TasksContext.Provider>
}

function taskReducer(tasks,action){
    switch (action.type){

    }
}