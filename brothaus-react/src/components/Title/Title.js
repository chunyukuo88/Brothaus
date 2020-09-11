import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/Title.css';
import { EnglishTitle } from './English';
import { RussianTitle } from './русский';
import { ChineseTitle } from './Chinese';


class Title extends Component {
  render() {
    return (
      <>{getTitleBasedOnLanguage(this.props)}</>
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
  return { language: state.language };
}

export default connect(mapStateToProps)(Title);
