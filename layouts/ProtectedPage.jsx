/**
 * Protected Page component
 *
 * Provides extendable system for protecting pages behind authorization.
 * If a user is logged in, the page content will be rendered.
 * Otherwise, a login prompt will be rendered by default.
 *
 * Pages requiring a login should extend this component,
 * and should define a renderPageContent() method to work in place of a normal render method.
 *
 * Unauthorized access can be customized on a per-page basis by defining a renderBlockedPage() method.
 * By default, this method renders a login prompt, which can be customized for all pages below.
 *
 * By default, both the page content and the blocked page are rendered as children of the
 * Page component.
 */

import { Component } from 'react';
import Page from './Page';
import Amplify, { Auth } from 'aws-amplify';
import getConfig from 'next/config'

export default class ProtectedPage extends Component {
    // Get session from NextAuth to determine whether user is logged in

    constructor(props) {
        super(props);

        const env = getConfig().publicRuntimeConfig;
        const cognitoConfig = {
            Auth: {
                identityPoolId: env.COGNITO_IDENTITY_POOL_ID,
                region: env.COGNITO_REGION,
                userPoolId: env.COGNITO_USER_POOL_ID,
                userPoolWebClientId: env.COGNITO_CLIENT_ID
            }
        }

        Amplify.configure(cognitoConfig);
    }

    // Provide overridable function to allow pages to specify their content
    renderPageContent() {
        return null;
    }

    // Render contents of protected page
    renderProtectedPage() {
        return (
            <Page>
                { this.renderPageContent() }
            </Page>
        )
    }

    // Render a message prompting user to login.
    // Page's content will not be rendered.
    renderBlockedPage() {
        return (
            <Page>
                <h1>Please log in to continue</h1>
            </Page>
        )
    }

    render() {
        // If user is logged in, render page content.
        // Else, render login prompt
        if (this.props.session) {
            return this.renderProtectedPage()
        } else {
            return this.renderBlockedPage()
        }
    }
}
