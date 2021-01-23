import React, { useState } from 'react'
import { Box, Heading, Input, Button } from '@ds-pack/components'
import { useMagic } from '../services/magic'

export default function App() {
  let [email, setEmail] = useState('')

  let magic = useMagic()

  async function handleSignup(e) {
    if (e) {
      e.preventDefault()
    }
    try {
      await magic.auth.loginWithMagicLink({ email })
    } catch {
      // Handle errors if required!
    }
  }

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p="$10"
        textAlign="center"
      >
        <Box role="presentation" fontSize="$4">
          👤
        </Box>
        <Heading is="h1" variant="h1">
          Sign Up
        </Heading>
      </Box>
      <Box
        is="form"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p="$10"
        onSubmit={handleSignup}
      >
        <Input
          mb="$2"
          flexGrow={1}
          minWidth="100%"
          value={email}
          onChange={setEmail}
        >
          Email:
        </Input>
        <Button onClick={handleSignup} width="100%">
          Sign Up
        </Button>
      </Box>
    </Box>
  )
}
