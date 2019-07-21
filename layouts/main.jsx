import { Footer, Head, Header } from '../components';
import { Fragment } from 'react';


export default ({ children }) => (
    <Fragment>
        <Head />
        <Header />
        { children }
        <Footer />
    </Fragment>
)
