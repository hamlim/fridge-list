import React from 'react'
import { Box } from '@ds-pack/components'

export default function ManageList(props) {
  console.log('manage list')
  console.log(props.slug)
  // console.log(props)
  return <Box>List here!</Box>
}

export async function getServerSideProps(context) {
  let {
    params: { slug },
  } = context
  return {
    props: {
      slug,
    }, // will be passed to the page component as props
  }
}
