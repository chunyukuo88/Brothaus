import React from "react";
import Hamburger from "./Hamburger";
import Status from "./loginStatus/Status";

export default () => {

    return (
        <div data-test="heading">
            <div className='page-title'>Woobler's House</div>
            <Status />
            <Hamburger />
        </div>
    );

};
