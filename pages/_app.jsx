// modified from auth-friendly app override by bgold0
// https://github.com/bgold0/nextjs-auth-skeleton/blob/master/pages/_app.js

import App, {Container} from 'next/app'
import React from 'react'
import Amplify, { Auth } from 'aws-amplify'
import getConfig from 'next/config'
import Router from 'next/router'


export default class extends App {

  static async getInitialProps ({ Component, res, ctx }) {
    const runtimeConfig = process.browser ? getConfig().publicRuntimeConfig : getConfig().serverRuntimeConfig

    Amplify.configure({
        Auth: {
            identityPoolId: runtimeConfig.COGNITO_IDENTITY_POOL_ID,
            region: runtimeConfig.COGNITO_REGION,
            userPoolId: runtimeConfig.COGNITO_USER_POOL_ID,
            userPoolWebClientId: runtimeConfig.COGNITO_CLIENT_ID
        }
    })

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    let user = await this.getUser();

    // handle client-side
    if (typeof document !== 'undefined') {
      console.log('routing the browser', {user, path: ctx.pathname})
      if (user && (ctx.pathname === '/' || ctx.pathname === '/register')) {
        console.log('user is logged in, redirect to /character');
        
        // if already logged in, don't show login/register pages
        // redirectTo('/character', { res: ctx.res, status: 200 });
        Router.replace('/character');
      } else if (!user && ctx.pathname !== '/' && ctx.pathname !== '/register') {
        console.log('user is NOT logged in, redirect to /');
        // if not logged in, don't show the user-only pages
        // redirectTo('/', { res: ctx.res, status: 401 });
        Router.replace('/');
      }
    }


    return { pageProps, user }
  }

  static async getUser () {
    try {
        let user = await Auth.currentAuthenticatedUser();
        return user;
    } catch (err) {
        return null
    }
  }

  render () {
    const {Component, pageProps, user} = this.props
    
    return <Container>
      <Component {...this.props.response} user={ user } />
    </Container>
  }
}