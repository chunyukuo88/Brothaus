import React, { useState } from "react";
import LoginAndSignup from "./LoginAndSignup";

const Fries = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const _toggleMenuState = () => {
    setMenuIsActive(!menuIsActive);
  };

  let menuDrawer = menuIsActive ? <LoginAndSignup /> : null;

  return (
        <div data-test='fries'>
          <div className="mdc-top-app-bar__navigation-icon mdc-icon-button material-icons mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
               aria-label="Options"
               id='fries-button'
               data-test='fries-button'
               onClick={_toggleMenuState}
          >
            more_vert
          </div>
          <div data-test='fries-drawer'>
            ====test!==== {menuDrawer}
          </div>
        </div>
      );
}

export default Fries;
