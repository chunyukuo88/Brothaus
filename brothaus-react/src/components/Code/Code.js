import React from 'react';
import { useSelector } from 'react-redux';
import staticStrings from '../../StaticStrings';

const Code = () => {
  const selectedLang = useSelector((state) => state.language);
  return codeString(selectedLang);
}

const codeString = props => <a href={process.env.REACT_APP_GITHUB_REPO}
                               target='_blank'
                               data-test='code'
                               rel='noopener noreferrer'
                               id='repo'>{getCodeDisplay(props)}</a>;

const getCodeDisplay = language => {
  switch (language){
    case 'chinese': return <div className='chinese'>{staticStrings.code.ZH}</div>;
    case 'russian': return <div className='russian'>{staticStrings.code.RU}</div>;
    default:        return <div className='english'>{staticStrings.code.EN}</div>;
  }
}

export default Code;