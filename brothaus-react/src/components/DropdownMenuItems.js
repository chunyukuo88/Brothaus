import Settings from "./loginStatus/Settings";
import React, { useState } from "react";

export default () => {
        const [English, setState] = useState(true);

        const _toggleLanguage = () => {
                console.log('Clicked! Language is English: ', English);
                setState(!English);
        };

        return (
            <section id='menu-items'
                     data-test='menu-items'
                     data-testid='menu-items'>
                <Settings />
                <p>About</p>
                <a id="repo" href="https://github.com/chunyukuo88/Brothaus" target="_blank" rel="noopener noreferrer">Code</a>
                <p id="columbus-weather"></p>
                <p id="chinese-or-english"
                   data-test='language-display'
                   onClick={_toggleLanguage}>
                        {!English && '華語版本'}
                        {English && 'English'}
                </p>
            </section>
        );
};

