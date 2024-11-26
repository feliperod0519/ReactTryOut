let nextId = 3;
export let initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];
export function currentId(){
    return initialTasks.length - 1;
}
export function addNewTask(task){
    nextId++;
    return [...initialTasks, task];
}
export function currentTasks(){
    console.log(initialTasks)
    return [...initialTasks];
}
export function newId(){
    return newId;
}