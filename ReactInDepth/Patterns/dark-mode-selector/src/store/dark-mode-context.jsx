import { useState, useCallback } from 'react';
import { createContext} from 'use-context-selector';

export const DarkModeContext = createContext({
    darkMode: false,
    switchMode : () => {}
});

const DarkModeProvider = function DarkModeProvider({ children }) {
    
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = useCallback(() => setIsDarkMode((prev) => { 
                                                          return !prev
                                                       })); 

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