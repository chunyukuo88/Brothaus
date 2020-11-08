import React, { Component } from 'react';
import '../../css/AboutModal.css';
import { connect } from 'react-redux';
import { EnzymeLink, ReactPopup, ReactTesting } from './ClickableTechnologyLinks';
import staticStrings from '../../StaticStrings.js';
import Code from '../Code/Code';

class AboutModal extends Component {
  render(){
    return (
      <div className='modal'>
        <div className='modal-header'>{this._getModalHeader(this.props)}</div>
        <div className='content'>
          <div className='summary-text'>{this._getSummaryText(this.props)}</div>
          <br/>
          <div className='modal-text'>{this._getModalDescription(this.props)}</div>
          <div className='statement'>{this._getCoverageStatement(this.props)}</div>
          <br/>
          <div className='code'>{this._getCodeDisplay(this.props)}</div>
        </div>
      </div>
    );
  };

  _getCodeDisplay = ({language}) => {
    switch (language){
      case 'chinese': return <div className='chinese'><Code {...language}/></div>;
      case 'russian': return <div className='russian'><Code {...language}/></div>;
      default:        return <div className='english'><Code {...language}/></div>;
    }
  }

  _getModalHeader = ({language}) => {
    switch (language){
      case 'chinese': return <div className='chinese'>{staticStrings.modalHeading.ZH}</div>;
      case 'russian': return <div className='russian'>{staticStrings.modalHeading.RU}</div>;
      default:        return <div className='english'>{staticStrings.modalHeading.EN}</div>;
    }
  };
  _getSummaryText = ({language}) => {
    switch (language){
      case 'chinese': return <div className='chinese'>{staticStrings.modalSummary.ZH}</div>;
      case 'russian': return <div className='russian'>{staticStrings.modalSummary.RU}</div>;
      default:        return <div className='english'>{staticStrings.modalSummary.EN}</div>;
    }
  }
  _getModalDescription = ({language}) => {
    switch (language){
      case 'chinese': return <div className='chinese'>我用了<ReactPopup/>來拼湊出這個模態框</div>;
      case 'russian': return <div className='russian'>Модальные блоки предоставлены библиотекой <ReactPopup/></div>;
      default:        return <div className='english'>Modals are provided by <ReactPopup/></div>;
    }
  };

  _getCoverageStatement = ({language}) => {
    switch (language){
      case 'chinese': return <div className='chinese'>為了達成百分百測試覆蓋率，我用了<EnzymeLink/>及<ReactTesting/>。</div>;
      case 'russian': return <div className='russian'> 100% тестового покрытия с библиотекой <EnzymeLink/> и <ReactTesting/>.</div>;
      default:        return <div className='english'>100% test coverage with <EnzymeLink/> & <ReactTesting/>.</div>;
    }
  };
}

function mapStateToProps(state){
  return { language: state.language };
}

export default connect(mapStateToProps)(AboutModal);