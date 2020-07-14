import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

const initialState = {
    isAuthenticated: false
};

export const AuthContextWrapper = props => {
    const [status, setStatus] = useState(initialState);

    return (
        <AuthContext.Provider value={[status, setStatus]}>
            {props.children}
        </AuthContext.Provider>
    );
};
