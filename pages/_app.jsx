
import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme, Resets } from '../global'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Resets />
        <ThemeProvider theme={Theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}
