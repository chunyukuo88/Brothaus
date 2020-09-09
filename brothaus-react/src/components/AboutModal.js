import React, { Component } from "react";
import '../css/AboutModal.css';
import urls from '../urls';
import { connect } from 'react-redux';

class AboutModal extends Component {
  render(){
    return (
      <div className='modal'>
        <div className='modal-header'>{this._getModalHeader(this.props)}</div>
        <div className='content'>
          This is a test-driven React project.
          <hr/>
          Modals are provided by {reactPopup}.
          <hr/>
          100% coverage with {enzymeLink} & {reactTesting}.
        </div>
      </div>
    );
  };

  _getModalHeader = ({language}) => {
    switch (language){
      case 'chinese': return '歡迎使用小巫之屋～';
      case 'english': return '...to my trilingual photo album.';
      case 'russian': return '... в мой трехъязычный фотоальбом.';
      default: return 'Source Code';
    }
  };
}

function mapStateToProps(state){
  return { language: state.language };
}
export default connect(mapStateToProps)(AboutModal);



const enzymeLink = <a href={urls.enzyme}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='technology-link'>Enzyme</a>;
const reactTesting = <a href={urls.reactTestingLibrary}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='technology-link'>React Testing Library</a>;
const reactPopup = <a className='technology-link'
                      href='https://www.npmjs.com/package/reactjs-popup'
                      target='_blank'
                      rel='noopener noreferrer'>reactjs-popup library</a>;
