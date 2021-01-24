import React, { useEffect, useState } from 'react'
import Container from './Container'
import LocalLink from './LocalLink'
import { Box } from '@ds-pack/components'
// import { useMagic } from '../services/magic'
import { useUser } from '../services/UserContext'

export default function Header() {
  // let magic = useMagic()

  let [user] = useUser()

  // let [isLoggedIn, setLoggedIn] = useState(false)

  // useEffect(() => {
  //   let isActive = true
  //   magic?.user.isLoggedIn().then((loggedIn) => {
  //     if (isActive) {
  //       setLoggedIn(loggedIn)
  //     }
  //   })

  //   return () => (isActive = false)
  // }, [magic])

  console.log(user)

  return (
    <Box is="header" p="$4" background="$gray-0">
      <Container display="flex" justifyContent="space-between" fontSize="$2">
        <Box display="inline-flex" alignItems="center">
          <Box role="presentation" mr="$2">
            🧺
          </Box>
          <LocalLink href="/">FridgeList</LocalLink>
        </Box>
        <Box>
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
        </Box>
      </Container>
    </Box>
  )
}
