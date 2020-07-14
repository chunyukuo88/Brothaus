import React from "react";
import Hamburger from "./Hamburger";
import Status from "./loginStatus/Status";

export default () => {

    return (
        <div data-test="heading">
            <div className='page-title'>Welcome to my photo album</div>
            <Status />
            <Hamburger />
        </div>
    );

};
