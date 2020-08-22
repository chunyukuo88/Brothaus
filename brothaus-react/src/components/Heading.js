import React, {useContext, useEffect, useState} from "react";
import '../style/Heading.css';
import Hamburger from "./Hamburger";
import Title from "./Title";
import LoginAndSignup from "./LoginAndSignup";
import Logout from "./loginStatus/Logout";
import {AuthContext} from "../contexts/authentication-context";
import {AccountContext} from "../contexts/account-context";
import FotoPrivate from "./FotoPrivate";
import FotoPublic from "./FotoPublic";

export default function Heading(){
  const [ status, setStatus ] = useState(false);
  const [ authStatus ] = useContext(AuthContext);
  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession()
      .then(session => {
        console.log('Session:', session);
        setStatus(true);
      }, [authStatus, getSession]);
  });

    return (
        <header id='heading' data-test='heading'>
                <div id='hamburger'>
                    <Hamburger />
                </div>

                <div id='title'>
                    <Title/>
                </div>

                <div id='login'>
                  {status === false && <LoginAndSignup/> }
                  {status === true && <Logout/> }
                </div>
        </header>
    );
};
