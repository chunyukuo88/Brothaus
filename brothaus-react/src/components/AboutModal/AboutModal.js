import React, { Component } from "react";
import '../../css/AboutModal.css';
import { connect } from 'react-redux';
import { EnzymeLink, ReactPopup, ReactTesting } from './ClickableTechnologyLinks';

class AboutModal extends Component {
  render(){
    return (
      <div className='modal'>
        <div className='modal-header'>{this._getModalHeader(this.props)}</div>
        <div className='content'>
          <p className='summary-text'>{this._getSummaryText(this.props)}</p>
          <hr/>
          <p className='modal-text'>{this._getModalDescription(this.props)}</p>
          <hr/>
          <p className='statement'>{this._getCoverageStatement(this.props)}</p>
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
  _getModalDescription = ({language}) => {
    switch (language){
      case 'chinese': return <div>我用了<ReactPopup/>來拼湊出這個模態框</div>;
      case 'russian': return <div>Модальные блоки предоставлены библиотекой <ReactPopup/></div>;
      default:        return <div>Modals are provided by <ReactPopup/></div>;
    }
  };

  _getCoverageStatement = ({language}) => {
    switch (language){
      case 'chinese': return <div>為了達成百分百測試覆蓋率，我用了<EnzymeLink/>及<ReactTesting/>。</div>;
      case 'russian': return <div> 100% тестового покрытия с библиотекой <EnzymeLink/> и <ReactTesting/>.</div>;
      default:        return <div>100% test coverage with <EnzymeLink/> & <ReactTesting/>.</div>;
    }
  };
}

function mapStateToProps(state){
  return { language: state.language };
}

export default connect(mapStateToProps)(AboutModal);
