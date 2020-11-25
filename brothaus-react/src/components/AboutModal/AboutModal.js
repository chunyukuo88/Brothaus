import React from 'react';
import { useSelector } from 'react-redux';
import { EnzymeLink, ReactPopup, ReactTesting } from './ClickableTechnologyLinks';
import '../../css/AboutModal.css';
import { StaticString } from './utils';
import Code from '../Code/Code';

const AboutModal = () => {
  const language = useSelector((state) => state.language);
  const modalHeaderProps = { language: language, stringLabel: 'modalHeading' };
  const summaryTextProps = { language: language, stringLabel: 'modalSummary' };
  const modalDescProps = { language: language, stringLabel: 'modalDescription' };
  const coverageProps = { language: language, stringLabel: 'modalCoverage' };
  
    return (
      <div className='modal'>
        <div className='modal-header'>
          <StaticString {...modalHeaderProps}/>
        </div>
        <div className='content'>
          <StaticString {...summaryTextProps}/>
          <StaticString {...modalDescProps}/><div className={language}><ReactPopup/></div>
          <StaticString {...coverageProps}/><div className={language}><EnzymeLink/>+<ReactTesting/></div>
          <Code/>
        </div>
      </div>
    );
};

export default AboutModal;
