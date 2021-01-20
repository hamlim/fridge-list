import React from 'react'
import Link from 'next/link'
import { Box } from '@ds-pack/components'

export default function LocalLink({ href, ...props }) {
  return (
    <Link href={href} passHref>
      <Box {...props} />
    </Link>
  )
}
