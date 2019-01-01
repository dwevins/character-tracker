/**
 * Page component
 *
 * This component renders default page layout for any page that implements it.
 * Inlcudes a document head, header, page content scaffolding, footer, and stylesheet link.
 *
 * Components using this one can pass a "pageName" prop to add a modifier class for per-page styling.
 */

import { Fragment } from 'react';
import Head from '../components/head';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/styles.scss';

export default (props) => (
    <Fragment>
        <Head />
        <Header />
        <div className={props.pageName ? `page page--${props.pageName}` : 'page'}>
            <section className="info">
                { props.children }
            </section>
        </div>
        <Footer />
    </Fragment>
)
