import React from 'react'
import { Box, Heading, Text, Button } from '@ds-pack/components'
import LocalLink from '../src/LocalLink'

export default function App() {
  return (
    <Box maxWidth={['95vw', , 'content']} margin="0 auto">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={10}
        textAlign="center"
      >
        <Box role="presentation" fontSize="4">
          👀
        </Box>
        <Heading is="h1" variant="h1">
          Login
        </Heading>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={10}
        textAlign="center"
      >
        <Button
          is={LocalLink}
          href="/sign-up"
          width="100%"
          mb={4}
          onClick={() => {}}
        >
          Sign Up
        </Button>
        <Button is={LocalLink} href="/login" width="100%" onClick={() => {}}>
          Login
        </Button>
      </Box>
    </Box>
  )
}
