import React from 'react';
import { useSelector } from 'react-redux';
import '../../css/AboutModal.css';
import * as utils from './utils';

const AboutModal = () => {
  const language = useSelector((state) => state.language);
  const props = { language: language };

    return (
      <div className='modal'>
        <div className='modal-header'>{utils.getModalHeader(props)}</div>
        <div className='content'>
          <div className='summary-text'>{utils.getSummaryText(props)}</div>
          <br/>
          <div className='modal-text'>{utils.getModalDescription(props)}</div>
          <div className='statement'>{utils.getCoverageStatement(props)}</div>
          <br/>
          <div className='code'>{utils.getCodeDisplay(props)}</div>
        </div>
      </div>
    );
};

export default AboutModal;
