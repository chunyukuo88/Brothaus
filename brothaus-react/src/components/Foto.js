import React, {useContext, useEffect, useState} from "react";
import { AuthContext }    from '../contexts/authentication-context';
import { AccountContext } from '../contexts/account-context';
import FotoPublic from "./FotoPublic";
import FotoPrivate from "./FotoPrivate";


export default () => {
    const [ status, setStatus ] = useState(false);
    const [ authStatus ] = useContext(AuthContext);
    const { getSession } = useContext(AccountContext);

    useEffect(() => {
        getSession()
            .then(session => {
                setStatus(true);
        }, [authStatus, getSession]);
    });

    return <>
            {!status && <FotoPublic /> }
            { status && <FotoPrivate /> }
           </>;
};
