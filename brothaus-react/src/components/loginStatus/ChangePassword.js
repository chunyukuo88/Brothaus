import React, { useState, useContext } from "react";
import { AccountContext } from "../../contexts/account-context";
import toggleVisibility from "../../utils/togglePasswordVisibility";

export default () => {
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const { getSession, authenticate } = useContext(AccountContext);

    const onSubmit = event => {
        event.preventDefault();

        getSession().then(({ user, email }) => {
            authenticate(email, password).then(() => {
                user.changePassword(password, newPassword, (err, result) => {
                    if (err) console.error(err);
                    console.log(result);
                });
            });
        });
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={password}
                    placeholder="Old password"
                    onChange={event => setPassword(event.target.value)}
                />

                <input
                    value={newPassword}
                    id="updated-password"
                    type="password"
                    placeholder="New password"
                    onChange={event => setNewPassword(event.target.value)}
                />
                <span><i className="fa fa-eye"
                         id="togglePassword"
                         aria-hidden="true"
                         onClick={()=> toggleVisibility('updated-password')}
                ></i></span>
                <button type="submit">Change password</button>
            </form>
        </div>
    );
};
