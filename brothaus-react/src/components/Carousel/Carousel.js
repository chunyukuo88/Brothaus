import React from 'react';
import '../../css/FotoPublic.css';
import Foto from '../Foto';
import getFotoCount from './photoCount';

export default function Carousel(){

  // return <div>
  //   {
  //     [1,2,3].map ( (n) => {
  //       return this.renderSquare(n)
  //     })
  //   }
  // </div>;

  getFotoCount()
    .then(populateCarousel);

  function populateCarousel() {
      return [1,2,3,4,5,6,7,8].map(number => <Foto key={number} {...{fotoNumber: number}}/>);
  }

  return(
      <div className="carousel"
          data-flickity='{ "lazyLoad": true,
                           "freeScroll": true,
                           "dragThreshold": 6,
                           "wrapAround": true }'>
        {populateCarousel()}
     </div>
  );
}
