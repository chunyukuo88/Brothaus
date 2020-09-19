import React from 'react';
import '../../css/FotoPublic.css';
import Foto from '../Foto';
import getFotoCount from './photoCount';

export default function Carousel(){

  let carousel = <div className="carousel"
                      data-flickity='{ "lazyLoad": true,
                                       "freeScroll": true,
                                       "dragThreshold": 6,
                                       "wrapAround": true }'>
                 </div>;

  getFotoCount()
    .then(populateCarousel);

  function populateCarousel(data) {
    while (data > 0) {
      const props = {fotoNumber: data};
      carousel.appendChild(<Foto {...props}/>);
      data--;
    }
  }

  return({carousel});
}
