import React, {useContext, useEffect } from 'react';
import { AuthContext }    from '../contexts/authentication-context';
import { AccountContext } from '../contexts/account-context';
import '../style/Foto.css';
import FotoPublic from './FotoPublic';
import FotoPrivate from './FotoPrivate';

export default () => {
    const [ status, setStatus ] = useContext(AuthContext);
    const { getSession } = useContext(AccountContext);

    return <>{ status === true ? <FotoPrivate/> : <FotoPublic /> }</>;
};
