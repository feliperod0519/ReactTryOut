import {useRef} from "react";
import ResultInput from './components/Input.jsx';

export const userData = {
  name: '',
  email: '',
};

export function App() {

  const inputRefName = useRef();
  const inputRefEmail = useRef();

  function handleSaveData() {
    userData.name = inputRefName.current.value;
    userData.email = inputRefEmail.current.value;

    console.log(userData);
  }

  return (
    <div id="app">
      <ResultInput ref={inputRefName} type="text" label="Your Name" />
      <ResultInput ref={inputRefEmail} type="text" label="Your E-Mail" />
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
}
export default App;


