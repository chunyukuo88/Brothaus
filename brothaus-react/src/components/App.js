import React from 'react';
import Heading from './Heading';
import Foto from './Foto';
import '../style/App.css';

export default () =>
    <div id="app"
         data-test="component-app">
        <Heading/>
        <Foto/>
    </div>;
