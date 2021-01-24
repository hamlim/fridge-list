import React from 'react'
import { Box, Heading, Input, Button } from '@ds-pack/components'
import { useUser } from '../services/UserContext'
import supabase from '../services/supabase'
import { useRouter } from 'next/router'

export default function Account() {
  let [user, setUser] = useUser()
  let router = useRouter()

  function logOut() {
    supabase.auth.signOut()
    setUser(null)
    router.push('/')
  }

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="baseline"
        borderBottomStyle="solid"
        borderBottomWidth="2px"
        borderBottomColor="$gray-3"
        pt="$10"
      >
        <Heading is="h1" variant="h1">
          Account
        </Heading>
        <Box>
          <Button variant="text" onClick={logOut}>
            Log Out
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        pt="$10"
      >
        <Input flexGrow={1} minWidth="100%" value={user?.email || ''} disabled>
          Your Email:
        </Input>
      </Box>
    </Box>
  )
}
