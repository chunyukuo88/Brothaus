import React from "react";

export default function Foto(props){
  const fotoPath = `https://woobler-photos.s3.amazonaws.com/${props.fotoNumber}-min.jpg`;
  return (
    <div className="carousel__cell" key={props.fotoNumber}>
      <img className="carousel__cell__image"
           data-flickity-lazyload={fotoPath} alt=""/>
    </div>
  );
}
