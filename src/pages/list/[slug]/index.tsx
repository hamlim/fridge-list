import React, { useEffect, useReducer } from 'react'
import {
  Box,
  Heading,
  Text,
  Stack,
  Banner,
  TwitterMention,
} from '@ds-pack/components'
import { useUser } from '../../../services/UserContext'
import supabase from '../../../services/supabase'
import Placeholder from '../../../components/Placeholder'

interface List {
  name: string
  description?: string
  creator: string
  items: Array<{}>
  collaborators: Array<string>
}

interface State {
  status: 'init' | 'fetching' | 'success' | 'error'
  list?: List
}

type Action = ['fetch-list'] | ['fetch-success', List] | ['fetch-error']

function reducer(state: State, [action, payload]: Action): State {
  switch (action) {
    case 'fetch-list': {
      return {
        ...state,
        status: 'fetching',
      }
    }
    case 'fetch-success': {
      return {
        ...state,
        status: 'success',
        list: payload,
      }
    }
    case 'fetch-error': {
      return {
        ...state,
        status: 'error',
      }
    }
    default: {
      throw new Error('Invalid action dispatched on reducer!')
    }
  }
}

export default function List({ slug }) {
  let [state, dispatch] = useReducer(reducer, {
    status: 'init',
    list: undefined,
  })

  useEffect(() => {
    let isActive = true

    let user = supabase.auth.user()

    dispatch(['fetch-list'])
    supabase
      .from('lists')
      .select('*')
      .eq('creator', user.id)
      .eq('id', slug)
      .then(({ data, error }) => {
        if (error || data.length !== 1) {
          throw error
        }
        if (isActive) {
          dispatch(['fetch-success', data[0]])
        }
      })
      // @ts-ignore
      .catch(() => {
        if (isActive) {
          dispatch(['fetch-error'])
        }
      })

    return () => (isActive = false)
  }, [slug])

  switch (state.status) {
    case 'fetching': {
      return (
        <Stack gap="$3">
          <Heading is="h2" variant="h2">
            <Placeholder fontSize="$3" />
          </Heading>
          <Placeholder fontSize="$1" />
          <Stack gap="$2" mt="$4">
            <Placeholder fontSize="$1" />
            <Placeholder fontSize="$1" />
            <Placeholder fontSize="$1" />
          </Stack>
        </Stack>
      )
    }
    case 'error': {
      return (
        <Box>
          <Banner variant="error">
            <Text>
              Failed to load the list. If this error persists, reach out on
              twitter: <TwitterMention>immatthamlin</TwitterMention>.
            </Text>
          </Banner>
        </Box>
      )
    }
    case 'success': {
      return (
        <Stack gap="$3">
          <Heading is="h2" variant="h2">
            {state.list.name}
          </Heading>
          {state.list.description ? (
            <Text>{state.list.description}</Text>
          ) : null}
          <Box></Box>
        </Stack>
      )
    }
    default: {
      return null
    }
  }
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
