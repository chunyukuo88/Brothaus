import React from 'react';
import { useSelector } from 'react-redux';
import '../../css/AboutModal.css';
import { ModalHeader, SummaryText, ModalDescription, CoverageStatement, CodeDisplay } from './utils';

const AboutModal = () => {
  const language = useSelector((state) => state.language);
  const props = { language: language };

    return (
      <div className='modal'>
        <div className='modal-header'>
          <ModalHeader {...props}/>
        </div>
        <div className='content'>
          <div className='summary-text'>
            <SummaryText {...props}/>
          </div>
          <br/>
          <div className='modal-text'>
            <ModalDescription {...props}/>
          </div>
          <div className='statement'>
            <CoverageStatement {...props}/>
          </div>
          <br/>
          <div className='code'>
            <CodeDisplay {...props}/>
          </div>
        </div>
      </div>
    );
};

export default AboutModal;
