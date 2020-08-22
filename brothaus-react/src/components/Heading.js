import React from 'react';
import '../css/Heading.css';
import Hamburger from './Hamburger';
import Title from './Title';

export default function Heading(){
  return (
    <div id='heading'>
      <Title/>
      <div id='hamburger'><Hamburger /></div>
    </div>
  );
};
