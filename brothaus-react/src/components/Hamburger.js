import React, { useState } from "react";
import DropdownMenuItems from "./DropdownMenuItems";

export default () => {
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
                <h1 data-test='hamburger' onClick={toggleMenuState}>
                    <span role='image' aria-label="burger menu">
                        🍔
                    </span>
                </h1>
                <div>{menuItems}</div>
            </div>
    );
};
