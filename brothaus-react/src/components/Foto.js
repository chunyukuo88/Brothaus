import React from "react";
import '../css/FotoPublic.css';

export default function Foto(){

  return(
    <div className="carousel"
         data-flickity='{ "lazyLoad": true,
                          "freeScroll": true,
                          "dragThreshold": 6,
                          "wrapAround": true }'>
      <div className="carousel__cell">
          <img className="carousel__cell__image"
               data-flickity-lazyload="https://woobler-photos.s3.amazonaws.com/1-min.jpg" alt=""/>
      </div>
      <div className="carousel__cell">
        <img className="carousel__cell__image"
             data-flickity-lazyload="https://woobler-photos.s3.amazonaws.com/2-min.jpg" alt=""/>
      </div>
      <div className="carousel__cell">
        <img className="carousel__cell__image"
             data-flickity-lazyload="https://woobler-photos.s3.amazonaws.com/3-min.jpg" alt=""/>
      </div>
      <div className="carousel__cell">
        <img className="carousel__cell__image"
             data-flickity-lazyload="https://woobler-photos.s3.amazonaws.com/4-min.jpg" alt=""/>
      </div>
      <div className="carousel__cell">
        <img className="carousel__cell__image"
             data-flickity-lazyload="https://woobler-photos.s3.amazonaws.com/5-min.jpg" alt=""/>
      </div>
      <div className="carousel__cell">
        <img className="carousel__cell__image"
             data-flickity-lazyload="https://woobler-photos.s3.amazonaws.com/6-min.jpg" alt=""/>
      </div>
      <div className="carousel__cell">
        <img className="carousel__cell__image"
             data-flickity-lazyload="https://woobler-photos.s3.amazonaws.com/7-min.jpg" alt=""/>
      </div>
      <div className="carousel__cell">
        <img className="carousel__cell__image"
             data-flickity-lazyload="https://woobler-photos.s3.amazonaws.com/8-min.jpg" alt=""/>
      </div>
      <div className="carousel__cell">
        <img className="carousel__cell__image"
             data-flickity-lazyload="https://woobler-photos.s3.amazonaws.com/9-min.jpg" alt=""/>
      </div>
      <div className="carousel__cell">
        <img className="carousel__cell__image"
             data-flickity-lazyload="https://woobler-photos.s3.amazonaws.com/10-min.jpg" alt=""/>
      </div>
    </div>
  );
}
