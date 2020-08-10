import React from "react";
import '../style/Heading.css';
import Hamburger from "./Hamburger";
import Status from "./loginStatus/Status";

export default () => {

    return (
        <div className="heading-component" data-test="heading">
            <nav className="navigation">
                <span className="nav-item"><Hamburger /></span>
                <h1 className='page-title'>Woobler's House</h1>
                <span className="nav-item"><Status /></span>
            </nav>
        </div>
    );

};
