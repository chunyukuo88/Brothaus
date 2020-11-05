import React from 'react';
import { carouselGA } from '../../googleAnalytics/foto';
import {Carousel as CarouselDisplay} from "react-responsive-carousel";

export default function Foto(props){
  const fotoPath = `https://woobler-photos.s3.amazonaws.com/${props.fotoNumber}-min.jpg`;
  return (
    <div className='' key={props.fotoNumber}>
      <img src={fotoPath} className='' onClick={carouselGA}/>
      <p className='legend'>Legend {props.fotoNumber}</p>
    </div>
  );
}
