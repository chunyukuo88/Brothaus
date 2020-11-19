import React from "react";

export const LocalizedTitle = (props) => {
  const { language, localizedString} = props;
  const className = `title ${language} ${language}-title`;
  const dataTestValue = `${language}-title`;

    return (
      <div className='title-container'>
        <div data-test={dataTestValue} className={className}>
          {localizedString}
        </div>
      </div>
    );
}

export const titleStrings = {
  english: 'Woobler\'s House',
  chinese: '小巫之屋',
  russian: 'Берлога Пуха',
};

