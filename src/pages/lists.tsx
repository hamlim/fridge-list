import React, { useState, useEffect } from 'react'
import { Box } from '@ds-pack/components'
import { useMagic } from '../services/magic'

export default function Lists(props) {
  let magic = useMagic()
  useEffect(() => {
    let isActive = true

    magic?.user.getMetadata().then((meta) => {
      console.log('userdata')
      if (isActive) {
        fetch('/api/get-lists-for-user', {
          method: 'POST',
          body: JSON.stringify({
            issuerId: meta.issuer,
          }),
        })
          .then((r) => r.json())
          .then((r) => {
            if (isActive) {
              debugger
              console.log(r)
            }
          })
      }
    })
    return () => (isActive = false)
  }, [magic])

  return <Box>LISTS!!!!1!!</Box>
}
