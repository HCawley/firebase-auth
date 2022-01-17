import React, { useContext } from 'react'
import NavMenu from "../NavMenu/NavMenu";
import ThemeProvider, { ThemeContext } from '../../context/ThemeProvider/ThemeProvider';
import { Link } from "react-router-dom";
import { app } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { UserContext } from '../../context/UserProvider/UserProvider';
import "./Nav.module.css";

const Nav = () => {

    const themeContext = useContext(ThemeContext);
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    const handleSignOut = async() => {

        await signOut(getAuth(app)).then(response => {
            userContext.setUser(null)
        })
    }
    return (
        <nav className={themeContext.isDarkTheme ? "dark":"light"}>
            
            <Link to="/"><button>Home</button></Link>

            <Link to="/"><button onClick={handleSignOut}>Log out</button></Link>

            {/* <button onClick={themeContext.toggleTheme}>Change Theme</button> */}
            
            <NavMenu />
        </nav>
    )
}

export default Nav
