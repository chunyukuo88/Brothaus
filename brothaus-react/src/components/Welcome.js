import React from 'react';
import Popup from 'reactjs-popup';
import AboutModal from "./AboutModal";

export default function Welcome(){
  return (
    <Popup modal trigger={<span>Welcome</span>}>
      {close => <AboutModal close={close} />}
    </Popup>
  );
}
