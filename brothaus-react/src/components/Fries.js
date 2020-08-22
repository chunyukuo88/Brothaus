import React, { useState } from "react";
import LoginAndSignup from "./LoginAndSignup";

const Fries = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  function _toggleMenuState(){
    setMenuIsActive(!menuIsActive);
  }

  let menuItems = null;
  menuItems = menuIsActive ? <LoginAndSignup/> : '';

  return  <div data-testid='fries'>
              <button  className="mdc-icon-button material-icons"
                       aria-label="Options"
                       data-testid='fries-button'
                       onClick={_toggleMenuState}
              >
                more_vert
              </button>
              <div data-testid='fries-drawer'>
                {menuItems}
              </div>
          </div>;
}

export default Fries;
