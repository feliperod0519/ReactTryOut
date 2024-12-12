export function taskReducer(taskList,action){
    switch (action.type){
        case 'added':
            return [...taskList, {
                id: action.id,
                text: action.text,
                done: false
            }];
        case 'changed':
            return taskList.map(task=>{
                if (task.id === action.task.id)
                    return action.task;
                else
                    return task;
            });
        case 'deleted':
            return taskList.filter(task=>task.id!==action.id);
        default:
            throw Error('Unknown action: ' + action.type);    
    }
}