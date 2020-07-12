import React, {useContext, useEffect, useState} from "react";
import { AccountContext } from '../contexts/account-context';

export default () => {
    const [status, setStatus] = useState(false);
    const { getSession } = useContext(AccountContext);

    useEffect(() => {
        getSession()
            .then(session => {
                console.log('Session:', session);
                setStatus(true);
            })
    }, [status]);

    return (
        <div>
            { status && displayPrivateFotFoto() }
            { !status && displayPublicFotFoto() }
        </div>
    );
};

const displayPublicFotFoto = () => (
    <div>[Public-facing fot fotos go here]</div>
);

const displayPrivateFotFoto = () => (
    <div>[Members-only fot fotos go here]</div>
);
