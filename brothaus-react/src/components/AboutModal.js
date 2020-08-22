import React from "react";
import '../css/AboutModal.css';

const AboutModal = ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}>
      👌
    </a>
    <div className="header"> My Bilingual Photo Album </div>
    <div className="content">
      {" "}
      This hobby project was made with the React Context API, Amazon Cognito, Istanbul, and a gingerly amount of Material Design.
      <br />
      Modals are provided by the handy reactjs-popup library.
      <br />
      Testing with Enzyme.
    </div>
  </div>
);

export default AboutModal;
