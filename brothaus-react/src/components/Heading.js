import React from "react";
import '../style/Heading.css';
import Hamburger from "./Hamburger";
import Status from "./loginStatus/Status";

export default () => {

    return (
        <div class="heading-component" data-test="heading">
            <h1 className='page-title'>Woobler's House</h1>
            <nav class="navigation">
                <span class="nav-item"><Hamburger /></span>
                <span class="nav-item"><Status /></span>
            </nav>
        </div>
    );

};
