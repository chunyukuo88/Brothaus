import React, { useState } from "react";
import DropdownMenuItems from "./DropdownMenuItems";
import '../style/Hamburger.css';

export default () => {
    const [menuIsActive, setMenuIsActive] = useState(false);

    const _toggleMenuState = () => {
        setMenuIsActive(!menuIsActive);
    };

    let menuItems = null;
    if (menuIsActive) menuItems = <DropdownMenuItems />;

    return <>
             <h1 id='hamburger'
                 class='mdc-top-app-bar__navigation-icon mdc-icon-button material-icons mdc-ripple-upgraded--unbounded mdc-ripple-upgraded'
                 data-test='hamburger'
                 onClick={_toggleMenuState}
             >
                 menu
             </h1>
             {menuItems}
           </>;
};
