import React from "react";
import '../style/Heading.css';
import Hamburger from "./Hamburger";
import Title from "./Title";
import LoginAndSignup from "./LoginAndSignup";

export default function Heading(){
    return (
        <header id='heading' data-test='heading'>
                <div>
                    <Hamburger />
                </div>

                <div className="title-container">
                    <Title/>
                </div>

                <div id='login'>
                    <LoginAndSignup/>
                </div>
        </header>
    );
};
