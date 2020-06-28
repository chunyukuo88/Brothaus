import React from "react";
import Hamburger from "./Hamburger";

const Heading = () => (
    <div data-test="heading">
        <div className='page-title'>Woobler's House</div>
        <Hamburger />
    </div>
);

export default Heading;
