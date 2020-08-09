import Login from "./loginStatus/Login";
import '../style/LoginAndSignup.css';
import Signup from "./loginStatus/Signup";
import React from "react";

export default () => (
    <div data-test="login-and-signup">
        <div className="input-section">
            <span className="input-item">
                <Login />
            </span>
            <span className="input-item">
                <Signup />
            </span>
        </div>
    </div>
);
