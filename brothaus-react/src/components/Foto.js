import React, {useContext, useEffect, useState} from "react";
import { AccountContext } from '../contexts/account-context';


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
                    [Public-facing fot fotos go here]
                </div>
                ): (
                <div>
                    [Members-only fot fotos go here]
                </div>
            )}
        </div>
    );
};
