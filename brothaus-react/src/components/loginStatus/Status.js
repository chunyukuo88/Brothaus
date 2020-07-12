import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from '../../contexts/account-context';
import Login from "./Login";
import Signup from "./Signup";

export default () => {
    const [status, setStatus] = useState(false);
    const { getSession, logout } = useContext(AccountContext);

    useEffect(() => {
        getSession()
            .then(session => {
                console.log('Session:', session);
                setStatus(true);
            })
    }, [status]);

    return (
        <div>
            { status && displayLogOutButton(logout)}
            { !status && displayLoginAndSignup()}
        </div>

    );
};

const displayLogOutButton = (logout) => (
    <div>
        You are logged in.
        <button onClick={ logout }>Logout</button>
    </div>
);

const displayLoginAndSignup = () => (
        <div>
            <div>Please login below.</div>
            <Login />
            <Signup />
        </div>
);
