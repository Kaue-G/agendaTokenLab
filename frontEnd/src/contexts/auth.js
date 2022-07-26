import { createContext, useEffect, useState } from "react";
import { api } from '../services/api'

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const usersStorage = localStorage.getItem("user_db");

        if(usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                // (user) => user.email ;
            );
        }
    }, []);

    async function signIn({nickName, password}){
        try {
            const response = await api.post('/login', { 
                nickName, 
                password
            });

            setUser(response.data.user);
        } catch (error) {
            return error.response.data.message;
        }
    }

    return <AuthContext.Provider>{children}</AuthContext.Provider>
};
