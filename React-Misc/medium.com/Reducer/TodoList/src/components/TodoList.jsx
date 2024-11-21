import { useReducer } from 'react';

export function TodoList(){

    const initial_todos = [ {id:1,text:'React-Complete Guide',completed:true},
                      {id:2,text:'NgRx complete guide',completed:false},
                      {id:3,text:'Angular material',completed:false} ];

    const listReducer = (state,action)=>{
        switch(action.type){
            case 'DELETE':
                return state.filter((x,i)=>i!==action.payload.index);
            case 'TOGGLE':
                return state.map((x,i)=> i === action.payload.index?{...x,completed:!x.completed}:x);
            case 'FILTER':
                return state.filter((x,i)=>x.text.toLowerCase().includes(action.payload.text.toLowerCase()));
            case 'RESET':
                return initial_todos;
            default:
                throw new Error('upsss');
        }
    }

    const [todos,dispatcherList] = useReducer(listReducer,initial_todos);

    function handleToggleTodo(i){
        dispatcherList({type:'TOGGLE',payload:{index:i}})
    }

    function handleRemoveTodo(i){
        dispatcherList({type:'DELETE',payload:{index:i}})
    }

    function handleChange(event){
        const searchFor = event.target.value;
        dispatcherList({type:'FILTER',payload:{text:searchFor}})
    }

    function handleReset(){
        dispatcherList({type:'RESET',payload:{}})
    }

    return (
        <div>
            <input type="text" placeholder='Search...' onChange={handleChange}/>
            <ul>
                {todos.map((todo,i)=>(
                    <li key={i} 
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        onClick = {()=>handleToggleTodo(i)}>
                        {todo.text}
                        <button onClick={()=>handleRemoveTodo(i)}>X</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}