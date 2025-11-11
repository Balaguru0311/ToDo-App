
import { useTheme } from "./ThemeContext";

export const ToggleTheme = () =>{
    const {darkMode, toggleTheme} = useTheme();
    return(
        <button onClick={toggleTheme}
      className={`p-2 px-4 rounded-md border transition-colors duration-300 ${
        darkMode === "light"
          ? "bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
          : "bg-gray-100 text-black border-gray-300 hover:bg-gray-200"
      }`}>
            {darkMode ==="dark" ? "light" : "Dark"}
        </button>
    )
}