import { Fragment } from 'react'
import styled from 'styled-components'
import { Footer, Head, Header } from '../components'

const Content = styled.div`
  flex-grow: 1;
  padding: 2rem 3rem;
`

export default ({ children }) => (
  <Fragment>
    <Head />
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
  </Fragment>
)
