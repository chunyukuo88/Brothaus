import React, { useState, useContext, useEffect } from 'react';
import {AccountContext, AccountContextWrapper} from '../../contexts/account-context';
import Login from "./Login";

export default () => {
    const [status, setStatus] = useState(false);
    const { getSession, logout } = useContext(AccountContext);

    useEffect(() => {
        getSession()
            .then(session => {
                console.log('Session:', session);
                setStatus(true);
            })
    }, []);

    return (
        <div>
            {status ? (
                <div>
                    You are logged in.
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    Please login below.
                    <Login />
                </div>)}
        </div>
    );
};
