import React from 'react'
import Link from 'next/link'
import { Button } from '@ds-pack/components'

export default function LinkButton({ href, ...props }) {
  return (
    <Link href={href} passHref>
      <Button is="a" style={{ textDecoration: 'none' }} {...props} />
    </Link>
  )
}
