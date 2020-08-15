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
          <div className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
               aria-label="Options"
               data-test='fries'
               onClick={_toggleMenuState}
          >more_vert</div>
            {menuItems}
        </>
      );
}
