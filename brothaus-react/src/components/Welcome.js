import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import AboutModal from "./AboutModal";
import { connect } from 'react-redux';

class Welcome extends Component {
  render(){
    return (
      <Popup modal trigger={<span>{this._getWelcomeString(this.props)}</span>}>
        {close => <AboutModal close={close} />}
      </Popup>
    );
  };

  _getWelcomeString = ({language}) => {
    switch (language){
      case 'chinese': return '簡介';
      case 'english': return 'Welcome';
      case 'russian': return 'пожаловать';
      default: return 'Welcome';
    }
  }
}

function mapStateToProps(state){
  return { language: state.language };
}

export default connect(mapStateToProps)(Welcome);
