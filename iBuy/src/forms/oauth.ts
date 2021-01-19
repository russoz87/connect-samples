import {OAuthConfigDefinition} from '@shipengine/connect';

const oauthConfig: OAuthConfigDefinition = {
  tokenProperties: {
    tokenExpirationLengthTimeUnit: 's',
  },
  authorizationProcess: {
    loginRequest: {
      method: 'GET',
      url: 'https://connect-mock-server.herokuapp.com/auth/consents',
      queryParameters: [
        { name: 'client_id', value: '{CLIENT_ID}' },
        {
          name: 'redirect_uri',
          value: '{CUSTOM.RuName}',
        },
        {
          name: 'scope',
          value: 'https://connect-mock-server.herokuapp.com/auth/api_scope/sell.fulfillment',
        },
        { name: 'response_type', value: 'code' },
        { name: 'consentGiven', value: 'false' },
      ],
    },
    redirectRequest: {
      queryParameters: [{ name: 'code', value: '{AUTHORIZATION_CODE}' }],
    },
    authorizeRequest: {
      method: 'POST',
      url: 'https://connect-mock-server.herokuapp.com/auth/token',
      contentType: 'application/x-www-form-urlencoded',
      headerParameters: [
        { name: 'Content-Type', value: 'application/x-www-form-urlencoded' },
        {
          name: 'Authorization',
          value: '{CLIENT_ID}:{CLIENT_SECRET}',
          encoding: 'basic-auth',
        },
      ],
      queryParameters: [],
      bodyParameters: [
        { name: 'grant_type', value: 'authorization_code' },
        { name: 'code', value: '{AUTHORIZATION_CODE}' },
        {
          name: 'redirect_uri',
          value: '{CUSTOM.RuName}',
        },
      ],
    },
    authorizeResponse: {
      queryParameters: [],
      bodyParameters: [
        { name: '$.access_token', value: '{ACCESS_TOKEN}' },
        {
          name: '$.expires_in',
          value: '{ACCESS_TOKEN_EXPIRATION_LENGTH}',
        },
        { name: '$.refresh_token', value: '{REFRESH_TOKEN}' },
        {
          name: '$.refresh_token_expires_in',
          value: '{REFRESH_TOKEN_EXPIRATION_LENGTH}',
        },
      ],
    },
  },
  refreshTokenProcess: {
    refreshTokenRequest: {
      method: 'POST',
      url: 'https://connect-mock-server.herokuapp.com/auth/token',
      contentType: 'application/x-www-form-urlencoded',
      headerParameters: [
        { name: 'Content-Type', value: 'application/x-www-form-urlencoded' },
        {
          name: 'Authorization',
          value: '{CLIENT_ID}:{CLIENT_SECRET}',
          encoding: 'basic-auth',
        },
      ],
      queryParameters: [],
      bodyParameters: [
        { name: 'grant_type', value: 'refresh_token' },
        { name: 'refresh_token', value: '{REFRESH_TOKEN}' },
      ],
    },
    refreshTokenResponse: {
      queryParameters: [],
      bodyParameters: [
        { name: '$.access_token', value: '{ACCESS_TOKEN}' },
        {
          name: '$.expires_in',
          value: '{ACCESS_TOKEN_EXPIRATION_LENGTH}',
        },
      ],
    },
  },
};

export default oauthConfig;