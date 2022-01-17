import React, {createContext, useState} from 'react'
import Home from '../../components/Home/Home';
import Nav from "../../components/Nav/Nav";
import AppRoutes from '../../container/AppRoutes';
import ThemeProvider from '../ThemeProvider/ThemeProvider';

export const UserContext = createContext({});

const UserProvider = () => {

    const [user, setUser] = useState("");

    const data = {
        user: user,
        setUser: setUser
    }
    return (
        <UserContext.Provider value={data}>
            <Nav />
            <AppRoutes />
        </UserContext.Provider>
    )
}

export default UserProvider
