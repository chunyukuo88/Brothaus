import React from "react";
import '../css/AboutModal.css';

export default function AboutModal ({ close }){
  return (
    <div className="modal">
      <a className="close" onClick={close}>
        👌
      </a>
      <div className="modal-header">...to my trilingual photo album.</div>
      <div className="content">
        This site was made with the React Context API, Istanbul, and Sass.
        <br />
        Modals are provided by the handy reactjs-popup library.
        <br />
        Testing with Enzyme and React Testing Library.
      </div>
    </div>
  );
};
