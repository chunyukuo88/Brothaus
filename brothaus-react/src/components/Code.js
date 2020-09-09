import React, { Component } from "react";
import urls from "../urls";
import { connect } from 'react-redux';

class Code extends Component {
  render(){
    return <a href={urls.githubRepo}
              target='_blank'
              data-test='code'
              rel='noopener noreferrer'
              id='repo'>{this._getCodeDisplay(this.props)}</a>;
  };
  _getCodeDisplay = ({language}) => {
    switch (language){
      case 'chinese': return <div className='chinese'>代碼</div>;
      case 'russian': return <div className='russian'>Код</div>;
      default:        return <div className='english'>Code</div>;
    }
  }

}

function mapStateToProps(state){
  return { language: state.language };
}

export default connect(mapStateToProps)(Code);
