import React from 'react'
import { ThemeProvider, Reset, Box, theme } from '@ds-pack/components'
import Head from 'next/head'
import { Provider as UserProvider } from '../services/UserContext'
import Header from '../components/Header'
import Footer from '../components/Footer'
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
        <Box is="main" display="flex" flexDirection="column" minHeight="100vh">
          <Header />
          <Container flexGrow={1} is="section">
            <Component {...pageProps} />
          </Container>
          <Footer />
        </Box>
        {/* </AuthProvider> */}
      </UserProvider>
    </ThemeProvider>
  )
}
