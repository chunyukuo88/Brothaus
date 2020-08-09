import React from "react";
import '../style/Heading.css';
import Hamburger from "./Hamburger";
import Status from "./loginStatus/Status";

export default () => {

    return (
        <div className="heading-component" data-test="heading">
            <h1 className='page-title'>Woobler's House</h1>
            <nav className="navigation">
                <span className="nav-item"><Hamburger /></span>
                <span className="nav-item"><Status /></span>
            </nav>
        </div>
    );

};
