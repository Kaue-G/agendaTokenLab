import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login'
import { Events } from '../pages/Events'
// import Users from '../pages/Users'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <Routes> console.log("cgueguemo");
            <Route exact path="/" element={<Login />} />

            <Route exact path="/events" element={<Events />} />
        </Routes>
    );
}