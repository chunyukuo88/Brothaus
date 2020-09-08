import React, { Component } from "react";
import urls from "../urls";
import { connect } from 'react-redux';
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

class Code extends Component {
  render(){
    return <a href={urls.githubRepo}
              target='_blank'
              data-test='code'
              rel='noopener noreferrer'
              id='repo'>Code</a>;
  };
}

function mapStateToProps(state){
  return { language: state.language };
}

export default connect(mapStateToProps)(Code);
