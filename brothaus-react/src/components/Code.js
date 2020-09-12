import React, { Component } from "react";
import urls from "../urls";
import { connect } from 'react-redux';

class Code extends Component {
  render(){
    return codeString(this.props);
  };
}

const codeString = props => <a href={urls.githubRepo}
                                 target='_blank'
                                 data-test='code'
                                 rel='noopener noreferrer'
                                 id='repo'>{getCodeDisplay(props)}</a>;

const getCodeDisplay = props => {
  switch (props.language){
    case 'chinese': return <div className='code chinese'>代碼</div>;
    case 'russian': return <div className='code russian'>Код</div>;
    default:        return <div className='code english'>Github</div>;
  }
}

function mapStateToProps(state){
  return { language: state.language };
}

export default connect(mapStateToProps)(Code);
