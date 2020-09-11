import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import AboutModal from "./AboutModal/AboutModal";
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
      case 'chinese': return <div className='welcome chinese'>簡介</div>;
      case 'russian': return <div className='welcome russian'>пожаловать</div>;
      default:        return <div className='welcome english'>Welcome!</div>;
    }
  }
}

function mapStateToProps(state){
  return { language: state.language };
}

export default connect(mapStateToProps)(Welcome);
