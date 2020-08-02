import React, { useState, useEffect, useContext } from "react";
import { AccountContext } from "../../contexts/account-context";
import ChangePassword from "./ChangePassword";

export default () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const { getSession } = useContext(AccountContext);

    useEffect(() => {
        getSession().then(() => {
            setLoggedIn(true);
        });
    }, [loggedIn, getSession]);

    return <>{loggedIn && displaySettings()}</>;
};

const displaySettings = () => (
    <>
        <div id='settings-title'>Settings</div>
        <ChangePassword />
    </>
);
