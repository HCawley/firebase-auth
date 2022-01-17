import React, { useContext } from 'react'
import { UserContext } from '../../context/UserProvider/UserProvider';
import { app } from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.module.css";

const Login = () => {

    const userContext = useContext(UserContext);
    const navigate = useNavigate();

   const handleSignIn = (e) => {
        e.preventDefault()

        const email = e.target[0].value;
        const password = e.target[1].value;

        signInWithEmailAndPassword(getAuth(app), email, password).then(response => {
            userContext.setUser(response.user.email);
            alert("Welcome back")
            navigate("/")
        }).catch(e => {
            console.error(e)
            alert("Sorry something went wrong")
        })
    }

    return (
        <form onSubmit={handleSignIn}>
            <input type="text" placeholder="email.."/>
            <input type="password" placeholder="password.."/>
            <button type="submit">Submit</button>
        </form>
    )  
}

export default Login
