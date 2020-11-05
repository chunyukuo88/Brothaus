import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as CarouselDisplay } from 'react-responsive-carousel';
import Foto from '../Foto/Foto';

export default function Carousel() {
  return (
    <CarouselDisplay>
      <CarouselContent/>
    </CarouselDisplay>
  );
};

const CarouselContent = () => {
  let arr = [1,2,3,4,5,6,7,8];
  return arr.map(fotoNumber => <Foto key={fotoNumber} {...{fotoNumber: fotoNumber}}></Foto>)
};
