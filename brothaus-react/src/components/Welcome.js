import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import AboutModal from "./AboutModal/AboutModal";
import { connect } from 'react-redux';

class Welcome extends Component {
  render(){
    return (
      <Popup modal trigger={welcomeString(this.props)}>
        {close => <AboutModal close={close} />}
      </Popup>
    );
  };
}

const welcomeString = (props) => <span>{getWelcomeString(props)}</span>;

const getWelcomeString = (props) => {
  switch (props.language){
    case 'chinese': return <div className='welcome chinese'>簡介</div>;
    case 'russian': return <div className='welcome russian'>пожаловать</div>;
    default:        return <div className='welcome english'>Welcome!</div>;
  }
}

function mapStateToProps(state){
  return { language: state.language };
}

export default connect(mapStateToProps)(Welcome);
