import Settings from "./loginStatus/Settings";
import React from "react";

export default () => (
    <div id='menu-items'>
        <Settings />
        <p>About</p>
        <a id="repo" href="https://github.com/chunyukuo88/Brothaus" target="_blank" rel="noopener noreferrer">Code</a>
        <p id="columbus-weather"></p>
        <p id="chinese">華語版本</p>
    </div>
);
