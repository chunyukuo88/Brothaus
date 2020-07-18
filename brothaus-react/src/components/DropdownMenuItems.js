import Settings from "./loginStatus/Settings";
import React, { useState } from "react";

export default () => {
        const [language, setLanguage] = useState('English');

        function _toggleLanguage (){
                if (language === '華語版本') setLanguage('English');
                else setLanguage('華語版本');
        };

        return (
            <section id='menu-items' data-test='menu-items'>
                <Settings />
                <p>About</p>
                <a id="repo" href="https://github.com/chunyukuo88/Brothaus" target="_blank" rel="noopener noreferrer">Code</a>
                <p id="columbus-weather"></p>
                <p id="chinese-or-english"
                   data-test='language-display'
                   onClick={_toggleLanguage}>
                        {language}
                </p>
            </section>
        );
};

