import React from "react";
import '../css/FotoPublic.css';
import Foto from './Foto';
import AWS from 'aws-sdk';

export default function Carousel(){
  const fotoAlbum = 'woobler-photos';
  const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: fotoAlbum}
  })
  console.log(s3.listObjects());
  const foto1 = {fotoNumber: 1};
  const foto2 = {fotoNumber: 2};
  const foto3 = {fotoNumber: 3};
  const foto4 = {fotoNumber: 4};
  const foto5 = {fotoNumber: 5};
  const foto6 = {fotoNumber: 6};
  const foto7 = {fotoNumber: 7};
  const foto8 = {fotoNumber: 8};
  return(
    <div className="carousel"
         data-flickity='{ "lazyLoad": true,
                          "freeScroll": true,
                          "dragThreshold": 6,
                          "wrapAround": true }'>
      <Foto {...foto1}/>
      <Foto {...foto2}/>
      <Foto {...foto3}/>
      <Foto {...foto4}/>
      <Foto {...foto5}/>
      <Foto {...foto6}/>
      <Foto {...foto7}/>
      <Foto {...foto8}/>
    </div>
  );
}
