import React from "react";
import '../css/AboutModal.css';

export default function AboutModal ({ close }){
  return (
    <div className="modal">
      <a className="close" onClick={close} href="www.wooblers-house.xyz">
        ×
      </a>
      <div className="modal-header">...to my trilingual photo album.</div>
      <div className="content">
        This is a test-driven React project.
        <br />
        Modals are provided by <a class='technology-link'
                                  href='https://www.npmjs.com/package/reactjs-popup'
                                  target='_blank'
                                  rel="noopener">reactjs-popup library</a>.
        <br />
        100% coverage with <a class='technology-link'>Enzyme</a> & React Testing Library.
      </div>
    </div>
  );
};
