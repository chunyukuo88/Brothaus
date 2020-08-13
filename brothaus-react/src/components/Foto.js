import React, {useContext  } from 'react';
import { AuthContext }    from '../contexts/authentication-context';
import FotoPublic from './FotoPublic';
import FotoPrivate from './FotoPrivate';

export default () => {
    const [ status ] = useContext(AuthContext);
    return <>{ status === true ? <FotoPrivate/> : <FotoPublic /> }</>;
};
