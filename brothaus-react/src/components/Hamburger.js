import React, { useState } from "react";
import DropdownMenuItems from "./DropdownMenuItems";

export default () => {
    const [menuIsActive, setMenuIsActive] = useState(false);

    const _toggleMenuState = () => {
        setMenuIsActive(!menuIsActive);
    };

    let menuItems = null;
    if (menuIsActive) menuItems = <DropdownMenuItems />;

    return <>
             <h1 id='hamburger'
                 data-test='hamburger'
                 onClick={_toggleMenuState}>
                 MENU
             </h1>
             {menuItems}
           </>;
};
