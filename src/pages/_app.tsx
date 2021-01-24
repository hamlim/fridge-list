import React from 'react'
import { ThemeProvider, Reset, Box, theme } from '@ds-pack/components'
import Head from 'next/head'
// import { Provider as AuthProvider } from '../services/magic'
import { Provider as UserProvider } from '../services/UserContext'
import Header from '../components/Header'
import Container from '../components/Container'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      theme={{
        ...theme,
        sizes: {
          ...theme.sizes,
          layout: '70ch',
        },
      }}
    >
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Fridge List</title>
      </Head>
      <Reset />
      <UserProvider>
        {/* <AuthProvider> */}
        <Box is="main" minHeight="100vh">
          <Header />
          <Container is="section">
            <Component {...pageProps} />
          </Container>
          <Box is="footer"></Box>
        </Box>
        {/* </AuthProvider> */}
      </UserProvider>
    </ThemeProvider>
  )
}
