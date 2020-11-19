import React from 'react';
import { useSelector } from 'react-redux';
import staticStrings from '../../StaticStrings';

const Code = () => {
  const selectedLang = useSelector((state) => state.language);
  const prop = { language: selectedLang };
  return <CodeString {...prop} />;
}

const CodeString = ({language}) => {
  return (
    <a href={process.env.REACT_APP_GITHUB_REPO}
       target='_blank'
       data-test='code'
       rel='noopener noreferrer'
       id='repo'
    >
      <div className={language}>
        {staticStrings.code[language]}
      </div>
    </a>
  );
}


export default Code;