import React from 'react'
import { Box } from '@ds-pack/components'

export default function Container(props) {
  return (
    <Box
      maxWidth={{ _: '95vw', '20em': '80vw', '60em': '$layout' }}
      minWidth={{ _: '95vw', '20em': '80vw', '60em': '$layout' }}
      margin="0 auto"
      {...props}
    />
  )
}
