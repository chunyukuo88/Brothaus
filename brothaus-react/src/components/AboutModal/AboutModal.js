import React from 'react';
import { useSelector } from 'react-redux';
import { EnzymeLink, ReactPopup, ReactTesting } from './ClickableTechnologyLinks';
import '../../css/AboutModal.css';
import { StaticString } from './utils';
import Code from '../Code/Code';

const AboutModal = () => {
  const language = useSelector((state) => state.language);
  const props = { language: language };
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
          <div className='summary-text'>
            <StaticString {...summaryTextProps}/>
          </div>
          <br/>
          <div className='modal-text'>
            <StaticString {...modalDescProps}/><span className={language}><ReactPopup/></span>
          </div>
          <div className='statement'>
            <StaticString {...coverageProps}/><span className={language}><EnzymeLink/>+<ReactTesting/></span>
          </div>
          <div className='code'>
            <Code/>
          </div>
        </div>
      </div>
    );
};

export default AboutModal;
