import React, { useState, useContext, useEffect } from 'react';
import '../../style/Status.css';
import { AccountContext } from '../../contexts/account-context';
import { AuthContext }    from '../../contexts/authentication-context';
import LoginAndSignup from "../LoginAndSignup";

const Status = () => {
    const [status, setStatus] = useState(false);
    const [ authStatus, setAuthStatus ] = useContext(AuthContext);
    const { getSession, logout } = useContext(AccountContext);

    useEffect(() => {
        getSession()
            .then(() => {
                setStatus(true);
            });
    }, [authStatus, getSession]);

    return <>{showLoginLogoutFields(status, logout)}</>;
};

const showLoginLogoutFields = (status, logout) => {
    return status === true
        ? displayLogOutButton(logout)
        : <LoginAndSignup/>;
}

const displayLogOutButton = logout => (
        <>
            You are logged in.
            <button onClick={ logoutAndUpdateAuthStatus }>Logout</button>
        </>
);

const logoutAndUpdateAuthStatus = (logout, setAuthStatus) => {
    logout();
    setAuthStatus(false);
}

export default Status;
