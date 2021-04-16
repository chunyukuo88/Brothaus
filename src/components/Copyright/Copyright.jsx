import React from 'react';
import { useSelector } from 'react-redux';
import staticStrings from '../../StaticStrings';

const Copyright = () => {
  const language = useSelector((state) => state.language);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return <Content {...{language, currentYear}}/>;
};

const Content = ({ language, currentYear }) => {
  return (language === 'chinese')
    ? <div id='copyright' className={language}>
      ©{currentYear} {staticStrings.copyright[language]}
    </div>
    : <div id='copyright' className={language}>
      {staticStrings.copyright[language]} {currentYear}
    </div>;
};

export default Copyright;
