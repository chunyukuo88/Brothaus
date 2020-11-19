import React from "react";

export const LocalizedTitle = (props) => {
  const { language, localizedString } = props;
  const className = _getClassName(language);
  const dataTestValue = _getDataTestValue(language);

    return (
      <div className='title-container'>
        <div data-test={dataTestValue} className={className}>
          {localizedString}
        </div>
      </div>
    );
}

const _getClassName = (language) => `title ${language} ${language}-title`;

const _getDataTestValue = (language) => `${language}-title`;

export const titleStrings = {
  english: 'Woobler\'s House',
  chinese: '小巫之屋',
  russian: 'Берлога Пуха',
};

