/**
 * next-auth.providers.js Example
 *
 * This file returns a simple array of oAuth Provider objects for NextAuth.
 *
 * If you wish, you can put these in a `.env` to seperate your environment
 * specific configuration from your code.
 **/

// Load environment variables from a .env file if one exists
require('dotenv').load()

module.exports = () => {
  let providers = []

  if (process.env.COGNITO_DOMAIN) {
    providers.push({
      providerName: 'Cognito',
      providerOptions: {
        scope: ['email']
      },
    })
  }

  return providers
}
