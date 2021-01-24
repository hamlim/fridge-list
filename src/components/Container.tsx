import React from 'react'
import { Box } from '@ds-pack/components'

export default function Container(props) {
  return (
    <Box
      maxWidth={{ '20em': '95vw', '40em': '80vw', '60em': '$layout' }}
      margin="0 auto"
      {...props}
    />
  )
}
