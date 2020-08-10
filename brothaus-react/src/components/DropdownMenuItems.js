import Settings from "./loginStatus/Settings";
import React, { useState } from "react";

export default () => {
        const [English, setEnglish] = useState(true);

        const _toggleLanguage = () => {
                setEnglish(!English);
        };

        return (
            <div id='menu-items'
                 class='mdc-drawer mdc-drawer--dismissible demo-drawer mdc-drawer--modal mdc-drawer--open'
                 data-test='menu-items'
                 data-testid='menu-items'>
                <Settings />
                <p>About</p>
                <a id="repo" href="https://github.com/chunyukuo88/Brothaus" target="_blank" rel="noopener noreferrer">Code</a>
                <p id="columbus-weather"></p>
                <p id="chinese-or-english"
                   data-test='language-display'
                   onClick={_toggleLanguage}>
                        {English ? 'English' : '華語版本'}
                </p>
            </div>
        );
};

