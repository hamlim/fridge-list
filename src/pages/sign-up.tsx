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
import supabase from '../services/supabase'
import { useUser } from '../services/UserContext'
import { useRouter } from 'next/router'

export default function SignUp() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [error, setError] = useState(false)

  let router = useRouter()

  let [, setUser] = useUser()

  async function handleSignup(e) {
    if (e) {
      e.preventDefault()
    }
    let { user, error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) {
      // console.log(error)
      setError(true)
      return
    }
    // console.log(user)
    setUser(user)
    router.push('/lists')
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
          onChange={(value: string) => {
            if (error) {
              setError(false)
            }
            setEmail(value)
          }}
          placeholder="hey@ya.com"
          inputProps={{
            type: 'email',
            required: true,
          }}
        >
          Email:
        </Input>
        <Input
          mb="$2"
          flexGrow={1}
          minWidth="100%"
          value={password}
          onChange={(value: string) => {
            if (error) {
              setError(false)
            }
            setPassword(value)
          }}
          placeholder="your-cool-password"
          inputProps={{
            type: 'password',
            required: true,
            autoComplete: 'current-password',
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
