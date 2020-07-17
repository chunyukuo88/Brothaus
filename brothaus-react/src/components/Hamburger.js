import React, { useState } from "react";
import DropdownMenuItems from "./DropdownMenuItems";

const Hamburger = () => {
    const [state, setState] = useState({menuIsActive : false});

    const _toggleMenuState = () => {
        setState({ menuIsActive : !state.menuIsActive });
    };

    let menuItems = null;

    if (state.menuIsActive) {
        menuItems = (
            <DropdownMenuItems />
        );
    };

    return (
            <>
                <h1 data-test='hamburger' onClick={_toggleMenuState}>MENU</h1>
                {menuItems}
            </>
    );
};

export default Hamburger;
