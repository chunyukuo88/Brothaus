import Login from './loginStatus/Login';
import Signup from './loginStatus/Signup';
import React from 'react';

export default function LoginAndSignup () {
  return (
    <aside dir='rtl' data-test='login-and-signup'>
      <div>
        <span dir='ltr'><Login /></span>
      </div>
      <div>
        <span dir='ltr'><Signup /></span>
      </div>
    </aside>
  );
};



