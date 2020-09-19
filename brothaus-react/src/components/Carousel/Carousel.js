import React from 'react';
import '../../css/FotoPublic.css';
import Foto from '../Foto';
import getFotoCount from './photoCount';

export default function Carousel(){

  let fotoCount;
  getFotoCount()
    .then(populateCarousel);

  function populateCarousel(data) {
      fotoCount = data;
      const fotoCountAsArray = arrayFromFotoCount(fotoCount);
      return fotoCountAsArray.map(fotoNumber => <Foto key={fotoNumber} {...{fotoNumber: fotoNumber}}/>);
  }

  return(
      <div className="carousel"
          data-flickity='{"lazyLoad": true,
                          "freeScroll": true,
                          "dragThreshold": 6,
                          "wrapAround": true}'>
        {populateCarousel()}
     </div>
  );
}

function arrayFromFotoCount (fotoCount) {
  let result = [];
  let i = fotoCount
  while(i > 0){
    result.push(i);
  }
  return result;
}
