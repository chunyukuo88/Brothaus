import React, { Component } from 'react';
import { connect } from 'react-redux';
import { titleStrings, LocalizedTitle } from './LocalizedTitle';
import * as actions from '../../actions/actions';
import { mouseOverTitle } from '../../googleAnalytics/heading';
import _ from 'lodash';
import '../../css/Title.css';

const _buildProps = (language) => {
  const clonedStrings = _.cloneDeep(titleStrings);
  return {
    language: language,
    localizedString: clonedStrings[language]
  }
};

const englishProps = _buildProps('english');
const russianProps = _buildProps('russian');
const chineseProps = _buildProps('chinese');


class Title extends Component {
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
  console.log('TitleBasedOnLanguage');
    switch (language){
      case 'chinese': return <LocalizedTitle {...chineseProps}/>;
      case 'russian': return <LocalizedTitle {...russianProps}/>;
      default:        return <LocalizedTitle {...englishProps}/>;
    }
};

function mapStateToProps(state){
  return {
    language: state.language,
    temp: state.temp
  };
}

export default connect(mapStateToProps, actions)(Title);
