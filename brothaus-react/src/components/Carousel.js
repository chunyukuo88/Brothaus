import React from 'react';
import '../css/FotoPublic.css';
import Foto from './Foto';
import AWS from 'aws-sdk';

//TODO: Finish the tutorial:
//https://medium.com/javascript-in-plain-english/using-node-js-to-display-images-in-a-private-aws-s3-bucket-4c043ed5c5d0

AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-1:1f7f72b9-a2e9-4c6e-a304-08eae3599fb5',
});

const s3 = new AWS.S3({apiVersion: '2006-03-01'});
const albumBucketName = 'woobler-photos';
const bucketParams = {
  Bucket: albumBucketName,
};

/**
* data.Contents.length
* */

export default function Carousel(){
  async function getCount () {
    const result = await s3.listObjectsV2(bucketParams).promise();
    console.log('getCount()', result.Contents.length);
    return result;
  }

  const result = getCount().then(data => data.Contents.length);
  console.log('After the .then() block: ', result);

  // async function getCount () {
  //   s3.listObjectsV2(bucketParams, function(err, data) {
  //     let result;
  //     if (err) {
  //       console.error("Error: ", err);
  //     } else {
  //       return data.Contents.length;
  //     }
  //   });
  // }

  // let count = 0;
  // console.log('Count', getCount().then(data => count = data));

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
