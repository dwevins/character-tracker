/**
 * Login Page
 *
 * This component defines the login page.
 */

import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { Auth } from 'aws-amplify'
import Page from '../layouts/Page';

export default class LoginPage extends Component {
    /**
     * TODO
     * Redirect to /character if user is logged in.
     */

    constructor(props) {
        super(props);
    }

    login(values, actions) {
        console.log('login attempt', typeof values.email);
        Auth.signIn({
            username: values.email,
            password: values.password
        })
        .then(user => console.log(user))
        .catch(err => console.log(err, Auth.configure()))
        
    }

    /**
     * TODO:
     * Add signup form to template.
     */
    render() {
        return (
            <Page>
                <h1>login page</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={ (values, actions) => this.login(values, actions) }
                    render={ ({
                        handleSubmit
                    }) => (
                        <Form onSubmit={ handleSubmit }>
                            <div className="field">
                                <Field type="email" name="email" placeholder="Email" />
                            </div>
                            <div className="field">
                                <Field type="password" name="password" placeholder="Passsword" />
                            </div>
                             
                            <button type="submit">Submit</button>
                        </Form>
                    ) }
                >

                </Formik>
            </Page>
        )
    }

}
