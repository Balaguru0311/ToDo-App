import {useContext} from 'react';
import {ThemeContext} from "./ThemeContext";
import "../style.css";

const User=()=>{
    const {theme,toggleTheme} = useContext(ThemeContext);
    return(
        <div className={theme ? "dark" : "light"}>
            <h1>User</h1>
            <button onClick={toggleTheme}>{theme?"Dark":"Light"}</button>
        </div>
    )
}

export default User;