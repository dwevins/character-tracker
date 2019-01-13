// https://recodes.co/next-js-dotenv/

require('dotenv').config()

const path = require('path')
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  publicRuntimeConfig: {
    COGNITO_IDENTITY_POOL_ID: process.env.COGNITO_IDENTITY_POOL_ID,
    COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID,
    COGNITO_CLIENT_ID: process.env.COGNITO_CLIENT_ID,
    COGNITO_REGION: process.env.COGNITO_REGION
  }
})
