import NewForm from './components/Form';
import { useRef } from 'react';

export function App() {
  const formHadle = useRef();

  function handleRestart() {
    formHadle.current.clear();
  }

  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <NewForm ref={formHadle}/>
    </div>
  );
}

export default App;
