/**
 * Login Page
 *
 * This component defines the login page.
 */

import { Component } from 'react';
import Page from '../layouts/Page';

export default class LoginPage extends Component {
    /**
     * TODO
     * Redirect to /character if user is logged in.
     */

    constructor(props) {
        super(props);
    }

    login(e) {
        e.preventDefault();
        console.log('login attempt', e);

    }

    /**
     * TODO:
     * Add signup form to template.
     */
    render() {
        return (
            <Page>
                <h1>login page</h1>
                <form onSubmit={ (e) => this.login(e) }>
                    <div className="field-group field-group--alt form__child">
                        <div className="field field--long">
                            <input className="field__input" type="text" id="username" name="username"/>
                            <label className="field__label" htmlFor="username">Username</label>
                        </div>
                        <div className="field field--short">
                            <input className="field__input" type="password" id="password" name="password"/>
                            <label className="field__label" htmlFor="password">Password</label>
                        </div>
                    </div>

                    <button type="submit">submit</button>
                </form>
            </Page>
        )
    }

}
