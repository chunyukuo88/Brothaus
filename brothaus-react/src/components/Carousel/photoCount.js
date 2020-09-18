import AWS from 'aws-sdk';

export default async function getNumberOfPhotos(){
  AWS.config.region = 'us-east-1'; // Region
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:1f7f72b9-a2e9-4c6e-a304-08eae3599fb5',
  });

  const s3 = new AWS.S3({apiVersion: '2006-03-01'});
  const albumBucketName = 'woobler-photos';
  const bucketParams = {Bucket: albumBucketName};

  await s3.listObjects(bucketParams, function(err, data) {
    if (err) console.log("Failed to count number of photos in S3 bucket: ", err);
    else return data;
  });
}
