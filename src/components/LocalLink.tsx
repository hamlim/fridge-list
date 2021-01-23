import React from 'react'
import Link from 'next/link'
import { Link as StyledLink } from '@ds-pack/components'

export default function LocalLink({ href, ...props }) {
  return (
    <Link href={href} passHref>
      <StyledLink is="a" {...props} />
    </Link>
  )
}
