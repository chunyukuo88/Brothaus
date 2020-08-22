import React from 'react';
import Heading from './Heading';
import FotoPublic from "./FotoPublic";
import Copyright from './Copyright';

export default function App () {
  return (
    <div data-test="component-app">
      <Heading/>
      <FotoPublic />
      <Copyright/>
    </div>
  );
}

