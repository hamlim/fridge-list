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
import LinkButton from '../components/LinkButton'

export default function Confirmation() {
  let router = useRouter()

  let [user, setUser] = useUser()

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
          🎉
        </Box>
        <Heading is="h1" variant="h1">
          Welcome to Fridge List!
        </Heading>
      </Box>
      <LinkButton href="/lists" width="100%">
        Lists
      </LinkButton>
    </Box>
  )
}
