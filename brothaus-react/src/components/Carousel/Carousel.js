import React from 'react';
import '../../css/FotoPublic.css';
import Foto from '../Foto/Foto';
import getFotoCount from './photoCount';

export default function Carousel(){

  let fotoCount;

  // getFotoCount()
  //   .then(result => populateCarousel(result));

  function populateCarousel(data) {
      // fotoCount = data;
      // console.log('fotoCount: ', fotoCount);
      // const fotoCountAsArray = arrayFromFotoCount(fotoCount);
      const fotoCountAsArray = arrayFromFotoCount(8); //TODO: Have this use getFotoCount() or Redux.
      return fotoCountAsArray.map(fotoNumber => <Foto key={fotoNumber} {...{fotoNumber: fotoNumber}}/>);
  }

  return(
      <div className="carousel"
           data-flickity='{"lazyLoad": true, "freeScroll": true, "dragThreshold": 6, "wrapAround": true}'>
        {populateCarousel()}
     </div>
  );
}

function arrayFromFotoCount (int) {
  const arr = [];
  for (let i = 1; i < (int+1); i++){
    arr.push(i);
  }
  console.log('array: ', arr);
  return arr;
  // let result = [];
  // let i = 1
  // while(i < int+1){
  //   result.push(i);
  // }
  // return result;
}
