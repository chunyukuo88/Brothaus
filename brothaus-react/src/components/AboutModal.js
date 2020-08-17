import React from "react";
import '../style/AboutModal.css';

const AboutModal = ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}>
      &times;
    </a>
    <div className="header"> A Bilingual Photo Album </div>
    <div className="content">
      {" "}
      The first iteration of this hobby project was originally made with Web Components and vanilla JavaScript.
      <br />
      This time around, I have used the React Context API, Amazon Cognito, Istanbul, and a gingerly amount of Material Design. Modals are provided by the handy reactjs-popup library.
    </div>
  </div>
);

export default AboutModal;
