import { useContext } from 'react';
import { DarkModeContext } from '../store/dark-mode-context';
import './Button.css';

export default function ToggleButton() {
    const { switchMode } = useContext(DarkModeContext);

    return (
        <button onClick={switchMode}>
            Toggle Mode
        </button>
   )
}