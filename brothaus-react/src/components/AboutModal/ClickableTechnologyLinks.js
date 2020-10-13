import React, { Component } from 'react';
import urls from '../../urls';

export class EnzymeLink extends Component {
  render(){
    return (
      <a href={urls.enzyme}
         target='_blank'
         rel='noopener noreferrer'
         className='technology-link'>Enzyme</a>
    );
  }
}

export class ReactTesting extends Component {
  render(){
    return (
      <a href={urls.reactTestingLibrary}
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
         href='https://www.npmjs.com/package/reactjs-popup'
         target='_blank'
         rel='noopener noreferrer'>reactjs-popup library</a>
    );
  }
}
