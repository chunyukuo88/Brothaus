import React from 'react';
import { useSelector } from 'react-redux';
import { EnzymeLink, ReactPopup, ReactTesting } from './ClickableTechnologyLinks';
import '../../css/AboutModal.css';
import StaticString from '../StaticString/StaticString';
import Code from '../Code/Code';
import buildProps from './utils';

const AboutModal = () => {
  const language = useSelector((state) => state.language);
  
    return (
      <div className='modal'>
        <div className='modal-header'>
          <StaticString {...buildProps(language, 'modalHeading')}/>
        </div>
        <div className='content'>
          <StaticString {...buildProps(language, 'modalSummary')}/>
          <StaticString {...buildProps(language, 'modalDescription')}/><div className={language}><ReactPopup/>.</div>
          <StaticString {...buildProps(language, 'modalCoverage')}/><div className={language}><EnzymeLink/>+<ReactTesting/>.</div>
          <Code/>
        </div>
      </div>
    );
};

export default AboutModal;
