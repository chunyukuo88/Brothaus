import React, { PureComponent } from "react";

export class LocalizedTitle extends PureComponent {
  language = this.props.language;
  className = `title ${this.language} ${this.language}-title`;
  dataTestValue = `${this.language}-title`;
  localizedString = this.props.localizedString;

  render() {
    return (
      <div className='title-container'>
        <div data-test={this.dataTestValue} className={this.className}>
          {this.localizedString}
        </div>
      </div>
    );
  };
}

export const titleStrings = {
  english: 'Woobler\'s House',
  chinese: '小巫之屋',
  russian: 'Берлога Пуха',
};