import React from 'react';
import Heading from './Heading';
import FotoPublic from './FotoPublic';
import '../css/common.css';
import Copyright from './Copyright';

export default function App () {
  return (
    <div id='app' data-test="component-app">
      <Heading/>
      <FotoPublic />
      <Copyright/>
    </div>
  );
}

