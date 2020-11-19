import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { titleStrings, LocalizedTitle } from './LocalizedTitle';
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

const _buildProps = (language) => {
  return {
    language: language,
    localizedString: titleStrings[language]
  }
};

const englishProps = _buildProps('english');
const russianProps = _buildProps('russian');
const chineseProps = _buildProps('chinese');

function mapStateToProps(state){
  return {
    language: state.language,
    temp: state.temp
  };
}

export default connect(mapStateToProps, actions)(Title);
