import React, { Fragment } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Login } from '../pages/Login'
import { Events } from '../pages/Events/index'
import { Home } from '../pages/Home'
import { Registration } from '../pages/Registration'
import { Users } from '../pages/Users'

// eslint-disable-next-line import/no-anonymous-default-export
export function RoutesApp () {
    const Private = ({ Item }) => {
        const signed = true;

        return signed > 0 ? <Item /> : <Login/>
    };
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Login />} />

                    <Route exact path="/events" element={<Events />} />
                    <Route exact path="/user" element={<Users />} />
                    <Route exact path="/home" element={<Private Item={Home}/>} />
                
                    <Route path="*" element={<Login />} />

                </Routes>
            </Fragment>    
        </BrowserRouter>
    );
}