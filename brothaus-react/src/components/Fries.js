import React, { useState } from "react";
import LoginAndSignup from "./LoginAndSignup";

const Fries = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const _toggleMenuState = () => setMenuIsActive(!menuIsActive);

  return  <div data-test='fries'>
              <button  className="mdc-icon-button material-icons"
                       aria-label="Options"
                       id='fries-button'
                       data-test='fries-button'
                       onClick={_toggleMenuState}
              >
                more_vert
              </button>
              <aside id="fries-drawer" data-test='fries-drawer'>
                {menuIsActive ? <LoginAndSignup /> : null}
              </aside>
          </div>;
}

export default Fries;
