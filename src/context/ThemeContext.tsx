import { useContext, useState, useEffect, createContext, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    darkMode:Theme,
    toggleTheme:()=>void
}

interface ThemeProviderProps{
    children:ReactNode
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider: React.FC<ThemeProviderProps>=({children})=>{
    const [darkMode, setTheme] = useState<Theme>(
        (localStorage.getItem("theme") as Theme) || "light"
    );
    useEffect(()=>{
        // document.documentElement.classList.toggle("dark", darkMode === "light");
        const root = window.document.documentElement;
        if(darkMode=="dark"){
            root.classList.add("dark")
        }
        else{
            root.classList.remove("dark")
        }
        localStorage.setItem("theme", darkMode);
    },[darkMode]);
    const toggleTheme=()=>setTheme((prev)=>prev=="light" ? "dark" : "light");
    return(
        <ThemeContext.Provider value={{darkMode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme =() =>{
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
