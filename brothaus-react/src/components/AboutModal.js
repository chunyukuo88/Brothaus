import React, { Component } from "react";
import '../css/AboutModal.css';
import urls from '../urls';
import { connect } from 'react-redux';

class AboutModal extends Component {

  enzymeLink = <a href={urls.enzyme}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='technology-link'>Enzyme</a>;
  reactTesting = <a href={urls.reactTestingLibrary}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='technology-link'>React Testing Library</a>;
  reactPopup = () => <a className='technology-link'
                        href='https://www.npmjs.com/package/reactjs-popup'
                        target='_blank'
                        rel='noopener noreferrer'>reactjs-popup library</a>;
  render(){
    return (
      <div className='modal'>
        <div className='modal-header'>{this._getModalHeader(this.props)}</div>
        <div className='content'>
          <p className='summary-text'>{this._getSummaryText(this.props, )}</p>
          <hr/>
          <p className='modal-text'>{this._getModalDescription(this.props, this.reactPopup)}</p>
          <hr/>
          <p className='statement'>{this._getCoverageStatement(this.props, this.enzymeLink, this.reactTesting)}</p>
        </div>
      </div>
    );
  };
  _getModalHeader = ({language}) => {
    switch (language){
      case 'chinese': return '歡迎訪問小巫之屋～';
      case 'russian': return '... в мой трехъязычный фотоальбом.';
      default: return '...to my trilingual photo album.';
    }
  };
  _getSummaryText = ({language}) => {
    switch (language){
      case 'chinese': return '製作本站，我用了REACT與REDUX';
      case 'russian': return 'Это проект React.';
      default: return 'This is a test-driven React project.';
    }
  }
  _getModalDescription = ({language}, reactPopup) => {
    switch (language){
      case 'chinese': return `我用了${reactPopup}來拼湊出這個模態框`;
      case 'russian': return `Модальные блоки предоставлены библиотекой ${reactPopup()}`;
      default: return `Modals are provided by ${reactPopup}`;
    }
  };

  _getCoverageStatement = ({language}, enzymeLink, reactTesting) => {
    switch (language){
      case 'chinese': return `為了達成百分百測試覆蓋率，我用了${enzymeLink}及${reactTesting}。`;
      case 'russian': return `100% тестового покрытия с библиотекой ${enzymeLink} и ${reactTesting}.`;
      default: return `100% test coverage with ${enzymeLink} & ${reactTesting}.`;
    }
  };

}

function mapStateToProps(state){
  return { language: state.language };
}
export default connect(mapStateToProps)(AboutModal);




