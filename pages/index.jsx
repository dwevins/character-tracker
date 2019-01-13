/**
 * Login Page
 *
 * This component defines the login page.
 */

import { NextAuth } from 'next-auth/client'
import { Component } from 'react';
import Page from '../layouts/Page';
import { CognitoUserPool, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';

export default class LoginPage extends Component {
    /**
     * TODO
     * Redirect to /character if user is logged in.
     */

    // static async getInitialProps({req}) {
    //     return {
    //         session: await NextAuth.init({req})
    //     }
    // }

    constructor(props) {
        super(props);
    }

    /**
     * TODO:
     * Add signup form to template.
     */
    render() {
        return (
            <Page>
                <h1>login page</h1>
            </Page>
        )
    }

}
