import React, { useState, useContext } from "react";
import { AccountContext } from  '../../contexts/account-context';
import { AuthContext }    from  '../../contexts/authentication-context';
import toggleVisibility   from  '../../utils/togglePasswordVisibility';

export default () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { authenticate } = useContext(AccountContext);
    const [ authStatus, setAuthStatus ] = useContext(AuthContext);

    const onSubmit = (event) => {
        event.preventDefault();
        authenticate(email, password)
            .then(data => {
                console.log('Logged in! ', data);
                setAuthStatus({'isAuthenticated': true});
            })
            .catch(err => {console.error('Failed to log in', err);});
    };

    return (<div>
                <form onSubmit={onSubmit}>
                    <div className="input-container">
                        <input value={email}
                               placeholder="Username goes here"
                               onChange={event => setEmail(event.target.value)}
                               required/>
                        <input value={password}
                               id="login-password"
                               type="password"
                               placeholder="Password goes here"
                               onChange={event => setPassword(event.target.value)}
                               required/>
                        <span><i className="fa fa-eye"
                                 id="togglePassword"
                                 aria-hidden="true"
                                 onClick={()=> toggleVisibility('login-password')}
                        ></i></span>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>);
};

