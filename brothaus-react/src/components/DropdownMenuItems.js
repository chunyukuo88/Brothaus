import Settings from "./loginStatus/Settings";
import React, { useState } from "react";
import '../style/DropdownMenuItems.css';
import urls from '../urls';

export default () => {
        const [English, setEnglish] = useState(true);
        const repo = urls.repo;
console.log(repo);
        const _toggleLanguage = () => {
                setEnglish(!English);
        };

        return (
            <div id='menu-items'
                 className='mdc-drawer mdc-drawer--dismissible demo-drawer mdc-drawer--modal mdc-drawer--open'
                 data-test='menu-items'
                 data-testid='menu-items'>
                <Settings />
                <p className='mdc-list-item mdc-list-item--selected demo-drawer-list-item'>
                        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">help</i>
                        About
                </p>
                <a className='mdc-list-item mdc-list-item--selected demo-drawer-list-item'
                   id="repo" href={{repo}} target="_blank" rel="noopener noreferrer">
                        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">code</i>
                        Code
                </a>
                <p className='mdc-list-item mdc-list-item--selected demo-drawer-list-item' id="columbus-weather">
                        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">cloud</i>
                        Weather
                </p>
                <p className='mdc-list-item mdc-list-item--selected demo-drawer-list-item'
                   id="chinese-or-english"
                   data-test='language-display'
                   onClick={_toggleLanguage}>
                        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">language</i>
                        {English ? 'English' : '華語版本'}
                </p>
            </div>
        );
};

