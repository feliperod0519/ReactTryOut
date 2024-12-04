import { useContext } from "react";
import { ThemeContext } from '../store/ThemeContext';

const Button = ({diabled,onClick,children}) => {

    const theme = useContext(ThemeContext);
    const className = "button-" + theme;
    return <button className={className} diabled={diabled} onClick={onClick}>
            {children}
           </button>
}

export default Button;

