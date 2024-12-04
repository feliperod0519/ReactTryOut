import { ThemeContext } from "./store/ThemeContext";
import Form from "./components/Foms";
import { useState } from "react";

function App() {

  const [useTheme,setTheme] = useState('light')

  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
        <ThemeContext.Provider value={useTheme}>
          <Form />
          <label>
            <input type="checkbox"
                   checked={useTheme==='dark'}
                   onChange={(e)=>{
                    setTheme(e.target.checked?'dark':'light');                   
                   }}
            />
          </label>
        </ThemeContext.Provider>
      </main>
    </div>
  );
}

export default App;
