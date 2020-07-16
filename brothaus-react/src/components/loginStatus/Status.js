import React, { useState, useContext, useEffect } from 'react';
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
        <div>
            { status === false && <LoginAndSignup/>}
            { status === true && displayLogOutButton(logout)}
        </div>
    );
};

const displayLogOutButton = (logout) => {
    return (
        <div>
            You are logged in.
            <button onClick={ logout }>Logout</button>
        </div>
    );
}

export default Status;
