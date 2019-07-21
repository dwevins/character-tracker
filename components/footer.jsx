import styled from 'styled-components';

const Wrapper = styled.footer`
    padding: 2rem 3rem;
    background-color: aliceblue;
`;

const Content = styled.div`
    margin: 0 auto;
    max-width: ${p => p.theme.sizes.siteMaxWidth};
    width: 100%;
`;

export const Footer = () => (
    <Wrapper>
        <Content>
            <span>Thanks for using the character tracker!</span>
        </Content>
    </Wrapper>
)
