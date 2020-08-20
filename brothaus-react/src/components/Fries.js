import React, { useState } from "react";
import LoginAndSignup from "./LoginAndSignup";

const Fries = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const _toggleMenuState = () => setMenuIsActive(!menuIsActive);

  return  <div data-testid='fries'>
              <button  className="mdc-icon-button material-icons"
                       aria-label="Options"
                       data-testid='fries-button'
                       onClick={_toggleMenuState}
              >
                more_vert
              </button>
              <aside data-testid='fries-drawer'>
                {menuIsActive ? <LoginAndSignup /> : null}
              </aside>
          </div>;
}

export default Fries;
