import { createContext, useState } from "react";

export const ThemeContext = createContext({
    currentTheme: 'light',
    toggleTheme: () => {}
});

export default function ThemeContextProvider({ children }) {
    const [currentTheme, setCurrentTheme] = useState('light');

    function toggleTheme() {
        console.log('toggleTheme', currentTheme);
        setCurrentTheme((prevTheme) => {return prevTheme === 'light' ? 'dark' : 'light';});
        console.log('toggleTheme', currentTheme);
    }

    const ctxValue = {
        currentTheme: currentTheme,
        toggleTheme: toggleTheme
    };

    return (
        <ThemeContext.Provider value={ctxValue}>
            {children}
        </ThemeContext.Provider>
    );
}