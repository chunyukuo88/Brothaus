import React, { useState } from "react";
import LoginAndSignup from "./LoginAndSignup";

const Fries = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const _toggleMenuState = () => {
    setMenuIsActive(!menuIsActive);
  };

  let menuItems = menuIsActive ? <LoginAndSignup /> : null;

  return (
        <div data-test='fries'>
          <div className="mdc-top-app-bar__navigation-icon mdc-icon-button material-icons mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
               aria-label="Options"
               onClick={_toggleMenuState}
          >
            more_vert
          </div>
          <div data-test='fries-menu-items'>
            {menuItems}
          </div>
        </div>
      );
}

export default Fries;
