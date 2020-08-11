import React, {useState} from "react";
import '../style/Heading.css';
import DropdownMenuItems from "./DropdownMenuItems";
import {MDCDrawer} from '@material/drawer';
import urls from "../urls";

export default () => {
    const [English, setEnglish] = useState(true);
    const repo = urls.repo;
    console.log(repo);
    const _toggleLanguage = () => {
        setEnglish(!English);
    };

    return (
        <header className="mdc-top-app-bar">
            <div className="mdc-top-app-bar__row">
                <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                    <button className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button"
                            aria-label="Open navigation menu">menu
                    </button>

                    <h1 className='page-title'>Woobler's House</h1>
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
