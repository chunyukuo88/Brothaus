import React from "react";
import '../css/AboutModal.css';
import urls from "../urls";

export default function AboutModal ({ close }){
  return (
    <div className="modal">
      <a className="close" onClick={close} href="www.wooblers-house.xyz">
        ×
      </a>
      <div className="modal-header">...to my trilingual photo album.</div>
      <div className="content">
        This is a test-driven React project.
        <hr />
        Modals are provided by {reactPopup()}.
        <hr />
        100% coverage with {enzymeLink()} & {reactTesting()}.
      </div>
    </div>
  );
};

const enzymeLink = () => <a href={urls.enzyme}
                            target='_blank'
                            rel='noopener'
                            className='technology-link'>Enzyme</a>;
const reactTesting = () => <a href={urls.reactTestingLibrary}
                              target='_blank'
                              rel='noopener'
                              className='technology-link'>React Testing Library</a>;
const reactPopup = () => <a className='technology-link'
                              href='https://www.npmjs.com/package/reactjs-popup'
                              target='_blank'
                              rel='noopener'>reactjs-popup library</a>;
