import {useState,createContext, ReactNode} from 'react';

interface ThemeContextType{
    theme:boolean;
    toggleTheme:()=>void;
}
interface ThemeProviderProps{
    children:ReactNode;
}
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType>({
    theme:false,
    toggleTheme:()=>{}
});

export const ThemeProvider:React.FC<ThemeProviderProps>=({children})=>{
    const [theme, setTheme] = useState<boolean>(false);
    const toggleTheme=()=>setTheme((prev)=>!prev);
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}