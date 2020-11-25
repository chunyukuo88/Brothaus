import React from 'react';
import { EnzymeLink, ReactPopup, ReactTesting } from './ClickableTechnologyLinks';
import staticStrings from '../../StaticStrings.js';
import Code from '../Code/Code';

export const CodeDisplay = ({language}) => {
    switch (language){
        case 'chinese': return <div className='chinese'><Code {...language}/></div>;
        case 'russian': return <div className='russian'><Code {...language}/></div>;
        default:        return <div className='english'><Code {...language}/></div>;
    }
}

export const ModalHeader = ({language}) => (
    <div className={language}>
        {staticStrings.modalHeading[language]}
    </div>
);

export const SummaryText = ({language}) => (
<div className={language}>
    {staticStrings.modalSummary[language]}
</div>
);

export const ModalDescription = ({language}) => {
switch (language){
    case 'chinese': return <div className='chinese'>我用了<ReactPopup/>來拼湊出這個模態框</div>;
    case 'russian': return <div className='russian'>Модальные блоки предоставлены библиотекой <ReactPopup/></div>;
    default:        return <div className='english'>Modals are provided by <ReactPopup/></div>;
}
};

export const CoverageStatement = ({language}) => {
switch (language){
    case 'chinese': return <div className='chinese'>為了達成百分百測試覆蓋率，我用了<EnzymeLink/>及<ReactTesting/>。</div>;
    case 'russian': return <div className='russian'> 100% тестового покрытия с библиотекой <EnzymeLink/> и <ReactTesting/>.</div>;
    default:        return <div className='english'>Tests use <EnzymeLink/> & <ReactTesting/>.</div>;
}
}