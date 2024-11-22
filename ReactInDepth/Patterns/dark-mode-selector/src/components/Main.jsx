import { memo } from 'react';
import { DarkModeContext } from '../store/dark-mode-context';
import HeaderDarkLight from './HeaderDarkLight';
import './Button.css';
import { useContextSelector } from 'use-context-selector';

const Main = memo(function Main() {
    //const { darkMode } = useContext(DarkModeContext);
    const { darkMode } =  useContextSelector(DarkModeContext,((ctx)=> { return {...ctx} }))
    return(
        <main className={darkMode ? 'mainDark' : 'mainlight'}>
            <HeaderDarkLight />
            {darkMode && <h1 id="h1Dark">Hello :)</h1>} 
            {!darkMode && <h1 id="h1Light">Hello :)</h1>}
        </main>
    );
});

export default Main;