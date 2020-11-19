import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { titleStrings, LocalizedTitle } from './LocalizedTitles';
import * as actions from '../../actions/actions';
import { mouseOverTitle } from '../../googleAnalytics/heading';
import '../../css/Title.css';

class Title extends PureComponent {
  render() {
    return (
      <div onMouseEnter={mouseOverTitle}
           data-test='title-container'
           id='display-container' >
        <TitleBasedOnLanguage id='title' {...this.props} />
      </div>
    );
  }
}

const TitleBasedOnLanguage = ({language}) => {
    switch (language){
      case 'chinese': return <LocalizedTitle {...chineseProps}/>;
      case 'russian': return <LocalizedTitle {...russianProps}/>;
      default:        return <LocalizedTitle {...englishProps}/>;
    }
};

const chineseProps = {
  language: 'chinese',
  localizedString: titleStrings.chinese,
};

const englishProps = {
  language: 'english',
  localizedString: titleStrings.english,
};

const russianProps = {
  language: 'russian',
  localizedString: titleStrings.russian,
};

function mapStateToProps(state){
  return {
    language: state.language,
    temp: state.temp
  };
}

export default connect(mapStateToProps, actions)(Title);
