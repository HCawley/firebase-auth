import React, { useContext } from 'react'
import NavMenu from "../NavMenu/NavMenu";
import { Link } from "react-router-dom";
import { app } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { UserContext } from '../../context/UserProvider/UserProvider';
import "./Nav.module.css";

const Nav = () => {

    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    const handleSignOut = async() => {

        await signOut(getAuth(app)).then(response => {
            userContext.setUser(null)
        })
    }
    return (
        <div>
            <Link to="/"><button>Home</button></Link>
            <Link to="/"><button onClick={handleSignOut}>Log out</button></Link>
            <NavMenu />
        </div>
    )
}

export default Nav
