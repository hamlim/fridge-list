import React, { useState } from 'react'
import {
  Box,
  Heading,
  Input,
  Button,
  Banner,
  TwitterMention,
  Text,
} from '@ds-pack/components'
import { useMagic } from '../services/magic'

export default function App() {
  let [email, setEmail] = useState('')
  let [error, setError] = useState(false)

  let magic = useMagic()

  async function handleSignup(e) {
    if (e) {
      e.preventDefault()
    }
    try {
      await magic.auth.loginWithMagicLink({ email })
    } catch (err) {
      setError(true)
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
        {error ? (
          <Banner variant="error" mb="$4">
            <Text>
              An error occurred while signing up! If this issue persists please
              reach out on Twitter:{' '}
              <TwitterMention>immatthamlin</TwitterMention>
            </Text>
          </Banner>
        ) : null}
        <Input
          mb="$2"
          flexGrow={1}
          minWidth="100%"
          value={email}
          onChange={setEmail}
          placeholder="hey@ya.com"
          inputProps={{
            type: 'email',
            required: true,
          }}
        >
          Email:
        </Input>
        <Button disabled={error} onClick={handleSignup} width="100%">
          Sign Up
        </Button>
      </Box>
    </Box>
  )
}
