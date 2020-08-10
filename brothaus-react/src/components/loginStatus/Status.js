import React, { useContext, useEffect } from 'react';
import { AccountContext } from '../../contexts/account-context';
import { AuthContext }    from '../../contexts/authentication-context';
import LoginAndSignup from "../LoginAndSignup";

function Status () {
    const [ status, setStatus ] = useContext(AuthContext);
    const { getSession, logout } = useContext(AccountContext);

    const logOutAndSetStatusToFalse = () => {
        setStatus({isAuthenticated: false});
        logout();
    }

    const displayLogOutButton = () => {
        return (
            <>
                You are logged in.
                <button onClick={ logOutAndSetStatusToFalse }>Logout</button>
            </>
        );
    }

    useEffect(() => {
        getSession()
            .then(() => {
                setStatus(true);
            });
    }, [status, getSession]);

    return (
        <>
            {status === true ? displayLogOutButton(logout): <LoginAndSignup/>}
        </>
    );
};


export default Status;
