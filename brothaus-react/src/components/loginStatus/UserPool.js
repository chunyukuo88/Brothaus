import { CognitoUserPool } from 'amazon-cognito-identity-js';
// import config from '../utils/config.json';

const poolData = {
    UserPoolId: "us-east-1_oSnNKzfru",
    ClientId: "6np9jr8dh96162va9430ut2vdo",
};

export default new CognitoUserPool(poolData);
