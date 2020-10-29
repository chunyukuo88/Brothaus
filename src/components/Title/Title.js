import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/Title.css';
import { EnglishTitle } from './English';
import { RussianTitle } from './русский';
import { ChineseTitle } from './Chinese';
import * as actions from '../../actions/actions';
import { mouseOverTitle } from '../../googleAnalytics/heading';

class Title extends Component {
  render() {
    return (
      <div onMouseEnter={mouseOverTitle}
           data-test='title-container'
           id='display-container' >
        <TitleBasedOnLanguage {...this.props} />
      </div>
    );
  }
}

const TitleBasedOnLanguage = ({language}) => {
    switch (language){
      case 'chinese': return <ChineseTitle/>;
      case 'russian': return <RussianTitle/>;
      default:        return <EnglishTitle/>;
    }
};

function mapStateToProps(state){
  return {
    language: state.language,
    temp: state.temp
  };
}

export default connect(mapStateToProps, actions)(Title);
