import React, { useState } from 'react';
import UserPool from './UserPool';
import toggleVisibility from '../../utils/togglePasswordVisibility';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        UserPool.signUp(email, password,[],null,(err, data) => {
            if (err) console.error(err);
        });
    };

    return (<div>
                <form onSubmit={onSubmit}>
                    <div className="input-container">
                        <input value={email}
                               placeholder="Username goes here"
                               onChange={event => setEmail(event.target.value)}
                               required/>
                        <input value={password}
                               id="signup-password"
                               placeholder="Password goes here"
                               type="password"
                               onChange={event => setPassword(event.target.value)}
                               required/>
                        <span><i className="fa fa-eye"
                                 id="togglePassword"
                                 aria-hidden="true"
                                 onClick={()=> toggleVisibility('signup-password')}
                        ></i></span>
                        <button type='submit'>Signup</button>
                    </div>
                </form>
            </div>);
};
