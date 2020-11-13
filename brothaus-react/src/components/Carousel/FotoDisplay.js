import React from 'react';
import '../../css/carousel.css';
import { Carousel as CarouselDisplay } from 'react-responsive-carousel';

const captions = {
    caption1: 'We just did.',
    caption2: 'Cut mirchi at my favorite restaurant: Neehee\'s in Dublin!',
    caption3: 'I downloaded this beautiful game to celebrate Halloween with The Fourth.',
    caption4: 'Mugi\'s seasonal handiwork.',
    caption5: 'I tried khaman, a savory Gujarati cake.',
    caption6: 'We are getting better at making fires. More specifically, Mugi is. Sunday\'s roast was very nice indeed, and we used very few briquets.',
    caption7: 'After procrastinating for more than a year, I got this along with an updated driver\'s license.',
    caption8: 'Mile-high wochebrot was achieved by using a cast iron griddle as a baking stone. I think iron is much more conductive than stone, so the rise on this loaf was incredible.',
}

const produceFotoSource = (integer) => `https://woobler-photos.s3.amazonaws.com/${integer}-min.jpg`;

const FirstFot = ({image, caption}) => {
    return <div>
        <img alt='' src={image}/>
        <p className="legend">{caption}</p>
    </div>
};

export default function FotoDisplay(){
  const props = {
    image: produceFotoSource(1),
    caption: captions.caption1,
  }
    return(
    <CarouselDisplay>
      <FirstFot {...props} />
      <div>
        <img alt="" src={produceFotoSource(2)} />
        <p className="legend">{captions.caption2}</p>
      </div>
      <div>
        <img alt="" src={produceFotoSource(3)} />
        <p className="legend">{captions.caption3}</p>
      </div>
      <div>
        <img alt="" src={produceFotoSource(4)} />
        <p className="legend">{captions.caption4}</p>
      </div>
      <div>
        <img alt="" src={produceFotoSource(5)} />
        <p className="legend">{captions.caption5}</p>
      </div>
      <div>
        <img alt="" src={produceFotoSource(6)} />
        <p className="legend">{captions.caption6}</p>
      </div>
      <div>
        <img alt="" src={produceFotoSource(7)} />
        <p className="legend">{captions.caption7}</p>
      </div>
      <div>
        <img alt="" src={produceFotoSource(8)} />
        <p className="legend">{captions.caption8}</p>
      </div>
    </CarouselDisplay>
  );
}
