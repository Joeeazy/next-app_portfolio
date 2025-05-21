import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark"

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState<Theme>("light")
    const [mounted, setMounted] = useState(false)

    // update theme
    const setThemeState = (newTheme: Theme) => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme)
        document.documentElement.classList.toggle("dark", newTheme === "dark")
    }

    //toggle theme
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    //initialize Theme
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const initialTheme = savedTheme || systemTheme;

        setTheme(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
        setMounted(true)
    }, [])

    //prevent flash !theme
    if(!mounted){
        return null;
    }
    return (
        <ThemeContext.Provider value={{theme, setThemeState, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

//custom hook to use themeContext
export function useTheme(){
    const context = useContext(ThemeContext);

    if(context === undefined){
        throw new Error("UseTheme must be used with a themeProvider")
    }

    return context;
}
