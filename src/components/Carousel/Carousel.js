import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as CarouselDisplay } from 'react-responsive-carousel';

const Carousel = () => (
    <CarouselDisplay>
      <div>
        <img src="https://woobler-photos.s3.amazonaws.com/1-min.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://woobler-photos.s3.amazonaws.com/2-min.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://woobler-photos.s3.amazonaws.com/3-min.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </CarouselDisplay>
);

export default Carousel;
