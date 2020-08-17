import React from "react";
import '../style/Heading.css';
import Hamburger from "./Hamburger";
import Fries from "./Fries";
import Title from "./Title";
export default () => {

    return (
        <header data-test='heading'>
            <div className="mdc-top-app-bar__row">
                <div className="title-container">
                    <Title/>
                </div>

                <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                    <div className="nav-item">
                        <Hamburger />
                    </div>
                </section>


                <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                    <div className="nav-item">
                        <Fries />
                    </div>
                </section>
            </div>
        </header>
    );

};
