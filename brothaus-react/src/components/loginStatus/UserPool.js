import { CognitoUserPool } from 'amazon-cognito-identity-js';
import config from '../../utils/config.json';

const poolData = {
    UserPoolId: config.cognito.USER_POOL_ID,
    ClientId: config.cognito.APP_CLIENT_ID,
};

export default new CognitoUserPool(poolData);
