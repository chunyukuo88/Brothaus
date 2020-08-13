import React from 'react';
import Heading from './Heading';
import Foto from './Foto';
import '../style/App.css';

export default function App() {
  return (
    <div id="app"
         data-test="component-app">
      <Heading className="mdc-top-app-bar"/>
      <Foto/>
    </div>
    );
};
