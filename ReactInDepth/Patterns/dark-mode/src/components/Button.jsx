import { useContext } from 'react';
import { DarkModeContext } from '../store/dark-mode-context';
import './Button.css';

export default function Button({ children, ...allTheRest }) {
    const { darkMode } = useContext(DarkModeContext);
    console.log('darkMode',darkMode);
    return (
        <button className={darkMode ? 'dark' : 'light'} {...allTheRest}>
            {children}
        </button>
   )
}

