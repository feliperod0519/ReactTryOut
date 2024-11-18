import { createContext, useState } from 'react';

export const DarkModeContext = createContext({
    darkMode: false,
    switchMode : () => {}
});

const DarkModeProvider = function DarkModeProvider({ children }) {
    
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
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeProvider;