import React, { useContext } from 'react'
import { UserContext } from '../../context/UserProvider/UserProvider';
import { ThemeContext } from '../../context/ThemeProvider/ThemeProvider';
import { Link } from "react-router-dom";
import "./Home.module.css";

const Home = () => {

    const data = useContext(UserContext);
    const themeContext = useContext(ThemeContext);

    return (
        <main className={themeContext.isDarkTheme ? "dark":"light"}>
            <h1>Welcome {data.user}</h1>
            <Link to="login"><button>Login</button></Link>
        </main>
       
    )
}

export default Home
