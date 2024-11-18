import { useState, useContext } from 'react';
import { DarkModeContext } from '../src/store/dark-mode-context'
import Main from './components/Main';

function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => setIsDarkMode((prev) => { 
                                                          return !prev
                                                       }); 

  const ctx = {
    darkMode: isDarkMode,
    switchMode: toggleDarkMode
  };

  return (
    <DarkModeContext.Provider value={ctx}>
      <Main />
    </DarkModeContext.Provider>
  );
}

export default App;
