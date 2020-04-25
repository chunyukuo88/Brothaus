// const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const AWS = require('aws-sdk');
import AmazonCognitoIdentity from 'amazon-cognito-identity-js';


const poolData = {
    UserPoolId: 'us-east-1_D5sEDXR4h',  // get in Cognito console
    ClientId: '2b4h674dc12duhd3umnbafn73s'  // cognito console -> App clients
}

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
const form = document.querySelector('#sign-up-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent unnecessary navigate on submit
    // get the form data as a plain object
    const formData = Object.fromEntries(new FormData(form).entries());
    signUp(formData);
});
function signUp(formData) {
    // attributes that should be placed onto user object, only name in your case
    const attributes = [
        { Name: 'name', Value: formData.name }
    ]
    userPool.signUp(formData.email, formData.password, attributes, null, onSignUp);
}
function onSignUp(err, userData) {
    if (err) {
        alert (JSON.stringify(err)); // for example if user already exists
    } else {
        console.log(userData); // good, user was successfully created
    }
}