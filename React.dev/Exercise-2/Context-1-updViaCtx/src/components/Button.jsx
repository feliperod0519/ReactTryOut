import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";

export default function Button({ children })
{
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
        <button className={className}>
            {children}
        </button>
    );
    return (
        <></>
    );
};
