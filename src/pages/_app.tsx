import React from 'react'
import { ThemeProvider, Reset, Box, theme } from '@ds-pack/components'
import Head from 'next/head'
import LocalLink from '../components/LocalLink'
import { Provider as AuthProvider } from '../services/magic'

function Contain({ children, ...props }) {
  return (
    <Box
      maxWidth={{ '20em': '95vw', '40em': '80vw', '60em': '$layout' }}
      margin="0 auto"
      {...props}
    >
      {children}
    </Box>
  )
}

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
      <AuthProvider>
        <Box is="main">
          <Box is="header" p="$4" background="$gray-0">
            <Contain
              display="flex"
              flexDirection={{ _: 'column', '40em': 'row' }}
              justifyContent="space-between"
            >
              <Box display="inline-flex" alignItems="center">
                <Box role="presentation" mr="$2">
                  🧺
                </Box>
                <LocalLink href="/">FridgeList</LocalLink>
              </Box>
              <Box>
                <LocalLink mr="$2" href="/sign-up">
                  Sign Up
                </LocalLink>
                <LocalLink href="/login">Login</LocalLink>
              </Box>
            </Contain>
          </Box>
          <Contain is="section">
            <Component {...pageProps} />
          </Contain>
          <Box is="footer"></Box>
        </Box>
      </AuthProvider>
    </ThemeProvider>
  )
}
