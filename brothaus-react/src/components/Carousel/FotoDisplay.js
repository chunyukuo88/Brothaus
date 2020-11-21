import React, { useState, useEffect } from 'react';
import '../../css/carousel.css';
import urls from '../../urls';
import { Carousel as CarouselDisplay } from 'react-responsive-carousel';

/**
 * Dynamically populating the contents of <CarouselDisplay> is not possible with the react-responsive-carousel
 * library. Doing so results in browser console errors and the images show up but the captions bunch up.
 * */

const _getFotoSource = (integer) => `https://woobler-photos.s3.amazonaws.com/${integer} (Custom).jpg`;

export default function FotoDisplay(){

  const [ captions, setCaptions ] = useState({});

  const fetchCaptions = async () => {
    const result = await fetch(urls.captions).then(res => res.text());
    console.log('===', result);
    const parsedResult = JSON.parse(result);
    console.log('===', parsedResult);
    setCaptions(parsedResult);
  };

  useEffect(() => {
    fetchCaptions();
  }, []);

    return(
    <CarouselDisplay>
      <div>
        <img alt="" src={_getFotoSource(1)} />
        <p className="legend">{captions[1]}</p>
      </div>
      <div>
        <img alt="" src={_getFotoSource(2)} />
        <p className="legend">{captions[2]}</p>
      </div>
      <div>
        <img alt="" src={_getFotoSource(3)} />
        <p className="legend">{captions[3]}</p>
      </div>
      <div>
        <img alt="" src={_getFotoSource(4)} />
        <p className="legend">{captions[4]}</p>
      </div>
      <div>
        <img alt="" src={_getFotoSource(5)} />
        <p className="legend">{captions[5]}</p>
      </div>
      <div>
        <img alt="" src={_getFotoSource(6)} />
        <p className="legend">{captions[6]}</p>
      </div>
      <div>
        <img alt="" src={_getFotoSource(7)} />
        <p className="legend">{captions[7]}</p>
      </div>
      <div>
        <img alt="" src={_getFotoSource(8)} />
        <p className="legend">{captions[8]}</p>
      </div>
    </CarouselDisplay>
  );
}
