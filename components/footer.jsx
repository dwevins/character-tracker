import styled from 'styled-components';

const Wrapper = styled.footer`
    padding: 2rem 3rem;
    background-color: aliceblue;
`;

const Content = styled.div`
    margin: 0 auto;
    width: 100%;
`;

export default () => (
    <Wrapper>
        <Content>
            <span>Thanks for using the character tracker!</span>
        </Content>
    </Wrapper>
)
