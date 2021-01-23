import React from 'react'
import { Box, Heading, Text, Button } from '@ds-pack/components'
import LocalLink from '../components/LocalLink'
import PlainLink from '../components/PlainLink'

export default function App() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        p="$10"
      >
        <Box role="presentation" fontSize="$4">
          🧺
        </Box>
        <Heading is="h1" variant="h1">
          Fridge List
        </Heading>
        <Text mt="$4">Shared lists with your friends and family!</Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p="$10"
        textAlign="center"
      >
        <Button is={PlainLink} href="/sign-up" width="100%" mb={4}>
          Sign Up
        </Button>
      </Box>
    </>
  )
}
