import React, { useState } from "react";
import LoginAndSignup from "./LoginAndSignup";

const Fries = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const _toggleMenuState = () => setMenuIsActive(!menuIsActive);

  const login = <LoginAndSignup/> || '';
  let displayResult = (menuIsActive === true) ? login : null;

  return  <div data-testid='fries'>
              <button  className="mdc-icon-button material-icons"
                       aria-label="Options"
                       data-testid='fries-button'
                       onClick={_toggleMenuState}
              >
                more_vert
              </button>
              <div data-testid='fries-drawer'>
                {displayResult}
              </div>
          </div>;
}

export default Fries;
