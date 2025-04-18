import { useState } from "react";
import { ThemeContext } from "./store/ThemeContext";
import { CurrentUserContext } from "./store/CurrentUserContext";
import WelcomePanel from "./components/WelcomePanel";

function App() 
{
  const [theme,setTheme] = useState('light');
  const [currentUser,setCurrentUser] = useState(null);

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
        <ThemeContext.Provider value={theme}>
          <CurrentUserContext.Provider value={{currentUser,setCurrentUser}}>
            <WelcomePanel />
            <label>
              <input type="checkbox" checked={theme === 'dark'}
                     onChange={(e)=>{setTheme(e.target.checked ? 'dark' : 'light')}} />
                     Use dark mode
            </label>
          </CurrentUserContext.Provider>
        </ThemeContext.Provider>
      </main>
    </div>
  );
}

export default App;
