import Login from "./loginStatus/Login";
import Signup from "./loginStatus/Signup";
import React from "react";

export default () => (
    <div data-test="login-and-signup">
        <div>Please login below.</div>
        <Login />
        <Signup />
    </div>
);
