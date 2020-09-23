import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/Title.css';
import { EnglishTitle } from './English';
import { RussianTitle } from './русский';
import { ChineseTitle } from './Chinese';
import * as actions from '../../actions/actions';

class Title extends Component {
  render() {
    return (
      <div onClick={this.props.getGlobalTemp} data-test='title-container' id='display-container' >
        {getTitleBasedOnLanguage(this.props)}
      </div>
    );
  }
}

const getTitleBasedOnLanguage = ({language}) => {
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
