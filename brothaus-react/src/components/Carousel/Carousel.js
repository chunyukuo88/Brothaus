import React from 'react';
import '../../css/FotoPublic.css';
import Foto from '../Foto/Foto';
import '../../css/Carousel.css';

export default function Carousel(){

  function CarouselContent(){
      const fotoCountAsArray = arrayFromFotoCount(8);
      return fotoCountAsArray.map(fotoNumber => <Foto key={fotoNumber} {...{fotoNumber: fotoNumber}}/>);
  }

  return(
      <div className="carousel"
           data-flickity='{"lazyLoad": true,
                           "freeScroll": true,
                           "dragThreshold": 6,
                           "wrapAround": true}'>
        <CarouselContent/>
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
}
