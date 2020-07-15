import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from '../../contexts/account-context';
import { AuthContext }    from '../../contexts/authentication-context';
import Login from "./Login";
import Signup from "./Signup";

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
            { status === false && displayLoginAndSignup()}
            { status === true && displayLogOutButton(logout)}
        </div>
    );
};

const displayLogOutButton = (logout) => {
    return (
        <div>
            You are logged in.
            //TODO: Figure out how to make this re-render the page.
            <button onClick={ logout }>Logout</button>
        </div>
    );
}

const displayLoginAndSignup = () => (
        <div>
            <div>Please login below.</div>
            <Login />
            <Signup />
        </div>
);

export default Status;
