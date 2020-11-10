import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as CarouselDisplay } from 'react-responsive-carousel';

export default function FotoDisplay(){
  return(
    <CarouselDisplay>
      <div>
        <img src="https://woobler-photos.s3.amazonaws.com/1-min.jpg" />
        <p className="legend">"We just did."</p>
      </div>
      <div>
        <img src="https://woobler-photos.s3.amazonaws.com/2-min.jpg" />
        <p className="legend">Cut mirchi at my favorite restaurant: Neehee's!</p>
      </div>
      <div>
        <img src="https://woobler-photos.s3.amazonaws.com/3-min.jpg" />
        <p className="legend">I downloaded this beautiful game to celebrate Halloween with The Fourth.</p>
      </div>
      <div>
        <img src="https://woobler-photos.s3.amazonaws.com/4-min.jpg" />
        <p className="legend">Mugi's seasonal handiwork.</p>
      </div>
      <div>
        <img src="https://woobler-photos.s3.amazonaws.com/5-min.jpg" />
        <p className="legend">I tried khaman, a savory Gujarati cake.</p>
      </div>
      <div>
        <img src="https://woobler-photos.s3.amazonaws.com/6-min.jpg" />
        <p className="legend">We are getting better at making fires. More specifically, Mugi is. Sunday's roast was very nice indeed, and we used very few briquets.</p>
      </div>
      <div>
        <img src="https://woobler-photos.s3.amazonaws.com/7-min.jpg" />
        <p className="legend">After procrastinating for more than a year, I got this along with an updated driver's license.</p>
      </div>
      <div>
        <img src="https://woobler-photos.s3.amazonaws.com/8-min.jpg" />
        <p className="legend">Mile-high wochebrot was achieved by using a cast iron griddle as a baking stone. I think iron is much more conductive than stone, so the rise on this loaf was incredible.</p>
      </div>
    </CarouselDisplay>
  );
}
