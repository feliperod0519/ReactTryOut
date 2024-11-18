import { DarkModeContext } from '../store/dark-mode-context';
import './Button.css';
import { useContextSelector } from 'use-context-selector';

export default function ToggleButton() {
    //const { switchMode } = useContext(DarkModeContext);
    const { switchMode } =  useContextSelector(DarkModeContext,((ctx)=> { return {...ctx} }))

    return (
        <button onClick={switchMode}>
            Toggle Mode
        </button>
   )
}