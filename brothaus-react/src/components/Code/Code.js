import React from 'react';
import { useSelector } from 'react-redux';
import staticStrings from '../../StaticStrings';
import urls from '../../urls';

const Code = () => {
  const selectedLang = useSelector((state) => state.language);
  return (
    <a href={urls.githubRepo} target='_blank' data-test='code' rel='noopener noreferrer' id='repo'>
      <div className={selectedLang}>
        {staticStrings.code[selectedLang]}
      </div>
    </a>
  );
}

export default Code;