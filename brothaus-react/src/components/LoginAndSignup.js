import '../style/LoginAndSignup.css';
import Login from './loginStatus/Login';
import Signup from './loginStatus/Signup';
import React from 'react';

export default function LoginAndSignup () {
  return (
    <aside id='menu-items'
           className='mdc-drawer mdc-drawer--modal mdc-drawer--open app-layout__drawer--align-end'
           dir='rtl'
           data-test='login-and-signup'>
      <div className='mdc-list-item'>
        <span className='woob-input-item' role='menuitem' dir='ltr'><Login /></span>
      </div>
      <div className='mdc-list-item'>
        <span className='woob-input-item' role='menuitem' dir='ltr'><Signup /></span>
      </div>
    </aside>
  );
};



