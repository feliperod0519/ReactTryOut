import { useState } from "react";
import Page from "./components/other/Page";
import { ThemeContext } from "./components/other/store/ThemeContext.context";

function App() {
  
  const [theme,setTheme] = useState({theme:'light',toggleTheme:null})

  function handleToggleTheme(){
    setTheme(()=>theme=='light'?'dark':'light')
  }
  
  return (
          <ThemeContext.Provider value={{theme,toggleTheme:handleToggleTheme}}>
            <Page />
          </ThemeContext.Provider>       
  );
}

export default App;
