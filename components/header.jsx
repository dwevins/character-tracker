import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.header`
    padding: 2rem 3rem;
    background-color: aliceblue;
`

const Menu = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: $site-max-width;
    display: flex;
`

const Anchor = styled.a`
    &:not(:last-child) {
        margin-right: 1rem;
    }
`

export const Header = () => (
    <Wrapper>
        <Menu>
            <Link prefetch href='/'>
                <Anchor>Character</Anchor>
            </Link>
            <Link prefetch href='/combat'>
                <Anchor>Combat</Anchor>
            </Link>
        </Menu>
    </Wrapper>
)
