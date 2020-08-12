import React from "react";
import '../style/Heading.css';
import Hamburger from "./Hamburger";
import Title from "./Title";
export default () => {

    return (
        <header className="mdc-top-app-bar">
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
                    <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
                            aria-label="Options">more_vert
                    </button>
                </section>
            </div>
        </header>
    );

};
