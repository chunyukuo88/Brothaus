import React, { Component } from "react";
import urls from "../urls";
import { connect } from 'react-redux';

class Code extends Component {
  render(){
    return <a href={urls.githubRepo}
              target='_blank'
              data-test='code'
              rel='noopener noreferrer'
              id='repo'>{this.props.language}</a>;
  };
}

function mapStateToProps(state){
  return { language: state.language };
}

export default connect(mapStateToProps)(Code);
