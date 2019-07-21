import Head from '../components/head';
import Header from '../components/header';
import Footer from '../components/footer';

import { Fragment } from 'react';


export default ({ children }) => (
    <Fragment>
        <Head />
        <Header />
        { children }
        <Footer />
    </Fragment>
)
