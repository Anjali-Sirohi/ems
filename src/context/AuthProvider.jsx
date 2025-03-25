import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(() => {
        const storedData = getLocalStorage();
        return storedData?.employees || [];  // Default to an empty array if `null`
    });

    // Save `userData` to localStorage whenever it changes
    useEffect(() => {
        if (userData) {
            setLocalStorage("employees", userData);
        }
    }, [userData]);

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
