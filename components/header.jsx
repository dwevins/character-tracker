import Link from 'next/link';

export default () => (
    <header className="header">
        <div className="header__content main-menu">
            <Link prefetch href='/'>
                <a className="main-menu__item">Log In</a>
            </Link>
            <Link prefetch href='/character'>
                <a className="main-menu__item">Character</a>
            </Link>
            <Link prefetch href='/combat'>
                <a className="main-menu__item">Combat</a>
            </Link>
            <Link prefetch href='/register'>
                <a className="main-menu__item">Register</a>
            </Link>
        </div>
    </header>
)
