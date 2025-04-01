import { ThemeContext } from "./ThemeContext.context";
import { useState } from "react";

export default function ThemeContextProvider({children}){

    const [theme,setTheme] = useState('light')

    function handleToggleTheme(){
        setTheme(()=>theme=='light'?'dark':'light')
    }

    
}