import React, { useState } from "react";
import LoginAndSignup from "./LoginAndSignup";

export default () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const _toggleMenuState = () => {
    setMenuIsActive(!menuIsActive);
  };

  let menuItems = null;
  menuItems = menuIsActive ? <LoginAndSignup /> : '';

  return (
        <>
          <div className="mdc-top-app-bar__navigation-icon mdc-icon-button material-icons mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
               aria-label="Options"
               data-test='fries'
               onClick={_toggleMenuState}
          >more_vert</div>
            {menuItems}
        </>
      );
}
