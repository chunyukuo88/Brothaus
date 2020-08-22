import React, { useState } from "react";
import DropdownMenuItems from "./DropdownMenuItems";
import '../style/Hamburger.css'

export default function Hamburger(){
    const [menuIsActive, setMenuIsActive] = useState(false);

    function _toggleMenuState(){
        setMenuIsActive(!menuIsActive);
    };

    let menuItems = null;
    menuItems = menuIsActive ? <DropdownMenuItems /> : '';

    return (
      <>
         <h3 data-testid='hamburger'
             onClick={_toggleMenuState}
         >
           🍔
         </h3>
        <div data-testid='drawer'>
          {menuItems}
        </div>
     </>
    );
};
