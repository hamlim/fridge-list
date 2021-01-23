import React from 'react'
import Link from 'next/link'
import { Box } from '@ds-pack/components'

export default function PlainLink({ href, ...props }) {
  return (
    <Link href={href} passHref>
      <Box style={{ textDecoration: 'none' }} is="a" {...props} />
    </Link>
  )
}
