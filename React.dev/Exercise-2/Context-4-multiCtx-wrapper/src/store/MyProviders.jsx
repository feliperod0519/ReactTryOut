import { CurrentUserContext } from "./CurrentUserContext";
import { ThemeContext } from './ThemeContext'
import { useState } from 'react';

export function MyProviders({ children,theme, setTheme })
{
    const [currentUser, setCurrentUser] = useState(null);
    return (
        <ThemeContext.Provider value={theme}>
          <CurrentUserContext.Provider value={{currentUser,setCurrentUser}}>
            <label>
              <input type="checkbox" checked={theme === 'dark'}
                     onChange={(e)=>{setTheme(e.target.checked ? 'dark' : 'light')}} />
                     Use dark mode
            </label>
          </CurrentUserContext.Provider>
        </ThemeContext.Provider>
    );
}