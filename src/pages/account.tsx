import React, { useState, useEffect } from 'react'
import { Box, Heading, Input, Button } from '@ds-pack/components'
import { useMagic } from '../services/magic'

export default function Account() {
  let magic = useMagic()
  let [meta, setMeta] = useState(null)

  useEffect(() => {
    let isActive = true

    magic?.user.getMetadata().then((meta) => {
      if (isActive) {
        setMeta(meta)
      }
    })

    return () => (isActive = false)
  }, [magic])

  function logOut() {
    magic.user.logout()
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
        <Input flexGrow={1} minWidth="100%" value={meta?.email} disabled>
          Your Email:
        </Input>
      </Box>
    </Box>
  )
}
