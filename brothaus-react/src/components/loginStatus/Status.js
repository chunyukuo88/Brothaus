import React, { useState, useContext, useEffect } from 'react';
import '../../style/Status.css';
import { AccountContext } from '../../contexts/account-context';
import { AuthContext }    from '../../contexts/authentication-context';
import LoginAndSignup from "../LoginAndSignup";

const Status = () => {
    const [status, setStatus] = useState(false);
    const [ authStatus ] = useContext(AuthContext);
    const { getSession, logout } = useContext(AccountContext);

    useEffect(() => {
        getSession()
            .then(() => {
                setStatus(true);
            });
    }, [authStatus, getSession]);

    return (
        <>
            {status === true ? displayLogOutButton(logout): <LoginAndSignup/>}
        </>
    );
};

const displayLogOutButton = (logout) => {
    return (
        <>
            You are logged in.
            <button onClick={ logout }>Logout</button>
        </>
    );
}

export default Status;
