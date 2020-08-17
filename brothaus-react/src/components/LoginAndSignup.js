import Login from "./loginStatus/Login";
import '../style/LoginAndSignup.css';
import Signup from "./loginStatus/Signup";
import React from "react";

export default () => (
  <aside id='menu-items'
         className='mdc-drawer mdc-drawer--modal mdc-drawer--open app-layout__drawer--align-end'
         dir="rtl"
         data-test='menu-items'>
    <div className='mdc-list-item'>
      <span className="woob-input-item" role="menuitem" dir="ltr"><Login /></span>
    </div>

    <div className='mdc-list-item'>
      <span className="woob-input-item" role="menuitem" dir="ltr"><Signup /></span>
    </div>


  </aside>
);

