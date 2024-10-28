import React from 'react';


export function counterReducer(state, action) {
  
  switch (action.type) {
    case "INCREMENT":
      console.log('state-i',state);
      return state + 1;
    case "DECREMENT":
      console.log('state-d',state);
      return state - 1;
    case "RESET":
      console.log('state-r',state);
      return 0;
    default:
      return state;
  }
}

function App() {

  const [counter, dispatch] = React.useReducer(counterReducer, 0);

  function handleClick(action) {
    console.log(action);
    switch (action) {
      case 'i':
        dispatch({type: 'INCREMENT'});
        break;
      case 'd':
        dispatch({type: 'DECREMENT'});
        break;
      case 'r':
        dispatch({type: 'RESET'});
        break;
      default:
        break;
    }
  }

  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={()=>handleClick('i')}>Increment</button>
        <button onClick={()=>handleClick('d')}>Decrement</button>
        <button onClick={()=>handleClick('r')}>Reset</button>
      </p>
      <p id="counter">{counter}</p>
    </div>
  );
}

export default App;
