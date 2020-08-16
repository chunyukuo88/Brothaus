import Login from "./loginStatus/Login";
import '../style/LoginAndSignup.css';
import Signup from "./loginStatus/Signup";
import React from "react";

export default () => (
  <aside id='menu-items'
         className='mdc-drawer mdc-drawer--modal mdc-drawer--open app-layout__drawer--align-end'
         dir="rtl"
         data-test='menu-items'>
    <div className='mdc-list-item mdc-list-item--selected demo-drawer-list-item'>
      <i className="material-icons mdc-list-item__graphic" aria-hidden="true">help</i>
      <span className="mdc-list-item__text woob-input-item" role="menuitem"><Login /></span>
    </div>

    <div className='mdc-list-item mdc-list-item--selected demo-drawer-list-item'>
      <i className="material-icons mdc-list-item__graphic" aria-hidden="true">help</i>
      <span className="mdc-list-item__text woob-input-item" role="menuitem"><Signup /></span>
    </div>


  </aside>
);

