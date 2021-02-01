import React from 'react'
import { Box } from '@ds-pack/components'
import { keyframes } from 'styled-components'

let placeholder = keyframes`
  0%, 100% {
    opacity: 0.4;
  }
  50% {
    opacity: 1
  }
`

export default function Placeholder(props) {
  return (
    <Box
      borderRadius="$1"
      fontSize="$2"
      minHeight="1.2em"
      backgroundColor="$gray-3"
      css={`
        animation: ${placeholder} 1s ease infinite;
      `}
      {...props}
    />
  )
}
