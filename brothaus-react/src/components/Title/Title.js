import React, { Component } from "react";
import '../../css/Title.css';
import { connect } from 'react-redux';
import { EnglishTitle } from './English';

class Title extends Component {
  render() {
    return (
      <div>{this._getTitleBasedOnLanguage(this.props)}</div>
    );
  }
  _getTitleBasedOnLanguage = ({language}) => {
    switch (language){
      case 'chinese': return '代碼';
      case 'russian': return 'Код';
      default: return <EnglishTitle/>;
    }
  }
}

function mapStateToProps(state){
  return { language: state.language };
}

export default connect(mapStateToProps)(Title);
