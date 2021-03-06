import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';

const AppRoutes = () => {
    return (
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
    )
}

export default AppRoutes
