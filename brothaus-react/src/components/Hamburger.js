import React, { useState } from "react";
import Settings from "./loginStatus/Settings";
import {AccountContextWrapper} from "../contexts/account-context";
import DropdownMenuItems from "./DropdownMenuItems";

const Hamburger = () => {
    const [state, setState] = useState({menuIsActive : false});

    const toggleMenuState = () => {
        setState({menuIsActive : !state.menuIsActive});
    };
    let menuItems = null;
    if (state.menuIsActive) {
        menuItems = (
            <DropdownMenuItems />
        );
    };

    return (
            <div>
                <div data-test='hamburger' onClick={toggleMenuState}>🍔</div>
                <div>{menuItems}</div>
            </div>
    );
};

export default Hamburger;
