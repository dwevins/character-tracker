/**
 * Registration Page
 *
 * This component defines the registration page.
 */

import { Component } from 'react';
import Page from '../layouts/Page';
import { Formik, Form, Field } from 'formik';
import { Auth } from 'aws-amplify';

export default class RegistrationPage extends Component {
    constructor(props) {
        super(props);
    }

    register(values, actions) {
        console.log({values, actions});
        Auth.signUp({
            username: values.email,
            password: values.password
        })
        .then(data => console.log(data))
        .catch(e => console.log(e))
    }

    render() {
        return (
            <Page>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={ (values, actions) => this.register(values, actions) }
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

