import React, { useState, useEffect } from 'react';
import urls, { getFotoSource } from '../../urls';
import './FotoDisplay.css';

/**
 * Dynamically populating the contents of <CarouselDisplay> is not possible with the react-responsive-carousel
 * library. Doing so results in browser console errors and the images show up but the captions bunch up.
 * */

export default function FotoDisplay(){
  const [ captions, setCaptions ] = useState([]);

  useEffect(() => {
    _fetchCaptions(setCaptions);
  }, []);

    return(
    <>
      <div>
        <img className="image" alt="" src={getFotoSource(1)} />
        <p>{captions[0]}</p>
      </div>
    </>
  );
}

const _fetchCaptions = async (captionsSetter) => {
  const result = await fetch(urls.captions).then(res => res.text());
  const arr = result.split('\n');
  captionsSetter(arr);
};
