import React from 'react'
import Container from './Container'
import LocalLink from './LocalLink'
import { Box } from '@ds-pack/components'
import { useUser } from '../services/UserContext'

export default function Footer() {
  let [user] = useUser()

  return (
    <Box is="footer" p="$4" background="$gray-0">
      <Container
        display={{ _: 'flex', '40em': 'none' }}
        justifyContent="space-around"
        fontSize="$2"
      >
        {!!user ? (
          <>
            <LocalLink href="/lists" mr="$2">
              Lists
            </LocalLink>
            <LocalLink href="/account">Account</LocalLink>
          </>
        ) : (
          <>
            <LocalLink mr="$2" href="/sign-up">
              Sign Up
            </LocalLink>
            <LocalLink href="/login">Login</LocalLink>
          </>
        )}
      </Container>
    </Box>
  )
}
