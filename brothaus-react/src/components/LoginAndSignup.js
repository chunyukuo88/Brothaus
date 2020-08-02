import Login from "./loginStatus/Login";
import '../style/LoginAndSignup.css';
import Signup from "./loginStatus/Signup";
import React from "react";

export default () => (
    <div data-test="login-and-signup">
        <div class="input-section">
            <span class="input-item">
                <Login />
            </span>
            <span class="input-item">
                <Signup />
            </span>
        </div>
    </div>
);
