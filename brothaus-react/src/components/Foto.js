import React from "react";
import '../css/FotoPublic.css';

// Start here: https://css-tricks.com/css-only-carousel/
//Ref: https://codepen.io/desandro/pen/vOeGzL
//Ref: https://flickity.metafizzy.co/
export default function Foto(){
  return(
    <div className="carousel"
         data-flickity='{ "lazyLoad": true }'>
      <div className="carousel-cell">
        <img className="carousel-cell-image"
             data-flickity-lazyload="https://woobler-photos.s3.amazonaws.com/1-min.jpg" alt=""/>
      </div>
      <div className="carousel-cell">
        <img className="carousel-cell-image"
             data-flickity-lazyload="https://woobler-photos.s3.amazonaws.com/2-min.jpg" alt=""/>
      </div>
      <div className="carousel-cell">
        <img className="carousel-cell-image"
             data-flickity-lazyload="https://woobler-photos.s3.amazonaws.com/3-min.jpg" alt=""/>
      </div>
      <div className="carousel-cell">
        <img className="carousel-cell-image"
             data-flickity-lazyload="https://woobler-photos.s3.amazonaws.com/4-min.jpg" alt=""/>
      </div>
      <div className="carousel-cell">
        <img className="carousel-cell-image"
             data-flickity-lazyload="https://woobler-photos.s3.amazonaws.com/5-min.jpg.jpg" alt=""/>
      </div>
    </div>
  );













      // return (
      //   <div className="container">
      //       <figure>
      //         <img src="https://woobler-photos.s3.amazonaws.com/0.png" alt=""/>
      //         <figcaption className='figcaption'>
      //           Now I try to run at least 12 miles every Saturday or Sunday.
      //         </figcaption>
      //       </figure>
      //       <figure>
      //         <img src="https://woobler-photos.s3.amazonaws.com/1-min.jpg" alt=""/>
      //         <figcaption className='figcaption'>
      //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae eius labore molestias nulla quaerat, quam ullam voluptas! Dolor, qui.
      //         </figcaption>
      //       </figure>
      //       <figure>
      //         <img src="https://woobler-photos.s3.amazonaws.com/2-min.jpg" alt=""/>
      //         <figcaption className='figcaption'>
      //           Lorem ipsum dolor sit amet.
      //         </figcaption>
      //       </figure>
      //       <figure>
      //         <img src="https://woobler-photos.s3.amazonaws.com/3-min.jpg" alt=""/>
      //         <figcaption className='figcaption'>
      //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, omnis!
      //         </figcaption>
      //       </figure>
      //       <figure>
      //         <img src="https://woobler-photos.s3.amazonaws.com/4-min.jpg" alt=""/>
      //         <figcaption className='figcaption'>
      //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquid atque deleniti perferendis. Cum perferendis porro quae quam sapiente.
      //         </figcaption>
      //       </figure>
      //       <figure>
      //         <img src="https://woobler-photos.s3.amazonaws.com/5-min.jpg" alt=""/>
      //         <figcaption className='figcaption'>
      //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error modi nesciunt repellendus voluptatum? Amet assumenda culpa maxime non ut?
      //         </figcaption>
      //       </figure>
      //       <figure>
      //         <img src="https://woobler-photos.s3.amazonaws.com/6-min.jpg" alt=""/>
      //         <figcaption className='figcaption'>
      //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet corporis deleniti dolore laboriosam molestias qui quisquam repudiandae sed sint.
      //         </figcaption>
      //       </figure>
      //       <figure>
      //         <img src="https://woobler-photos.s3.amazonaws.com/7-min.jpg" alt=""/>
      //         <figcaption className='figcaption'>
      //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, asperiores cum deleniti dolorum eaque exercitationem expedita fugit laboriosam nam nesciunt!
      //         </figcaption>
      //       </figure>
      //       <figure>
      //         <img src="https://woobler-photos.s3.amazonaws.com/8-min.jpg" alt=""/>
      //         <figcaption className='figcaption'>
      //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eos fugit id libero non nulla, quis velit voluptas? Amet, optio.
      //         </figcaption>
      //       </figure>
      //       <figure>
      //         <img src="https://woobler-photos.s3.amazonaws.com/9-min.jpg" alt=""/>
      //         <figcaption className='figcaption'>
      //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, exercitationem, quis. A asperiores delectus eius placeat! Commodi explicabo modi recusandae.
      //         </figcaption>
      //       </figure>
      //       <figure>
      //         <img src="https://woobler-photos.s3.amazonaws.com/10-min.jpg" alt=""/>
      //         <figcaption className='figcaption'></figcaption>
      //       </figure>
      //   </div>
      // );
}
