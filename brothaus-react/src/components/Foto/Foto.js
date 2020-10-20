import React from 'react';
import { carouselGA } from '../../googleAnalytics/foto';

export default function Foto(props){
  const fotoPath = `https://woobler-photos.s3.amazonaws.com/${props.fotoNumber}-min.jpg`;
  return (
    <div className='carousel__cell' key={props.fotoNumber}>
      <img className='carousel__cell__image'
           onClick={carouselGA}
           data-flickity-lazyload={fotoPath} alt=''/>
    </div>
  );
}
