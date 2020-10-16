import React, { Component } from 'react';

export class EnzymeLink extends Component {
  render(){
    return (
      <a href={process.env.REACT_APP_ENZYME_URL}
         target='_blank'
         rel='noopener noreferrer'
         className='technology-link'>Enzyme</a>
    );
  }
}

export class ReactTesting extends Component {
  render(){
    return (
      <a href={process.env.REACT_APP_RTL}
         target='_blank'
         rel='noopener noreferrer'
         className='technology-link'>React Testing Library</a>
    );
  }
}

export class ReactPopup extends Component {
  render(){
    return (
      <a className='technology-link'
         href={process.env.REACT_APP_POPUP}
         target='_blank'
         rel='noopener noreferrer'>reactjs-popup library</a>
    );
  }
}
