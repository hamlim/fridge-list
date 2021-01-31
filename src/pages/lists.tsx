import React, { useState, useEffect } from 'react'
import {
  Box,
  Banner,
  Text,
  TwitterMention,
  Heading,
  useTheme,
  Stack,
  Input,
  Button,
  Textarea,
} from '@ds-pack/components'
import supabase from '../services/supabase'
import LocalLink from '../components/LocalLink'
import { useRouter } from 'next/router'

import { toUrl } from '../utils/url'

function CreateListCard({ refetch }) {
  let [newListName, setNewListName] = useState('')

  let [newListDescription, setNewListDescription] = useState('')

  let [error, setError] = useState(null)

  let theme = useTheme()

  async function createList() {
    if (newListName.length === 0) {
      setError('name')
      return
    }
    let user = supabase.auth.user()
    let { data, error } = await supabase.from('lists').insert([
      {
        name: newListName,
        description: newListDescription,
        creator: user.id,
        items: { items: [] },
      },
    ])
    if (error) {
      setError('create')
      return
    }
    setNewListDescription('')
    setNewListName('')
    refetch()
  }
  return (
    <Box
      borderRadius="$1"
      boxShadow={`0px 0px 4px 4px ${theme.colors.gray[2]}`}
      p="$4"
    >
      <Text fontSize="$2" mb="$4" fontWeight="$bold">
        Create a new list:
      </Text>

      {error ? (
        <Banner variant="error" mb="$2">
          {(() => {
            switch (error) {
              case 'name': {
                return (
                  <Text>
                    Uh Oh! You forgot to add a name to your new list, make sure
                    to enter one!
                  </Text>
                )
              }
              case 'created': {
                return (
                  <Text>Uh Oh! We were unable to create your new list!</Text>
                )
              }
              default: {
                return (
                  <Text>
                    Uh Oh! It looks like we couldn't create that list for you.
                    Try again and if the issue persists reach out on Twitter:{' '}
                    <TwitterMention>immatthamlin</TwitterMention>.
                  </Text>
                )
              }
            }
          })()}
        </Banner>
      ) : null}

      <Stack gap="$2">
        <Input
          value={newListName}
          onChange={(value: string) => {
            setNewListName(value)
            if (error === 'name') {
              setError(null)
            }
          }}
        >
          List Name:
        </Input>
        <Textarea value={newListDescription} onChange={setNewListDescription}>
          List Description:
        </Textarea>
        <Box display="flex">
          <Button flexGrow={1} onClick={createList}>
            Create List 🌟
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default function Lists(props) {
  let [lists, setLists] = useState(null)
  let [error, setError] = useState(false)
  let router = useRouter()

  let [shouldFetch, setShouldFetch] = useState(false)

  function refetch() {
    setShouldFetch((f) => !f)
  }

  useEffect(() => {
    let isActive = true

    let user = supabase.auth.user()

    if (!user) {
      router.push('/')
    }

    supabase
      .from('lists')
      .select('*')

      // Filters
      .eq('creator', user.id)
      .then(({ data: lists, error }) => {
        if (error) {
          throw error
        }
        if (isActive) {
          setLists(lists)
        }
      })
      // @ts-ignore
      .catch((err) => {
        setError(true)
      })
    return () => (isActive = false)
  }, [shouldFetch])

  let theme = useTheme()

  return (
    <Box mb="$2">
      <Heading variant="h1" is="h1" mb="$4">
        Your Lists:
      </Heading>
      {error ? (
        <Banner variant="error">
          <Text>
            Unable to find your lists! If this issue persists please reach out
            on Twitter: <TwitterMention>immatthamlin</TwitterMention>.
          </Text>
        </Banner>
      ) : null}
      <Stack gap="$4">
        {lists
          ? lists.map((list) => (
              <Box
                borderRadius="$1"
                boxShadow={`0px 0px 4px 4px ${theme.colors.gray[2]}`}
                key={list.id}
                p="$4"
              >
                <Text fontSize="$2" fontWeight="$bold">
                  {list.name}
                </Text>
                {list.description ? (
                  <Text color="$gray-5">{list.description}</Text>
                ) : null}
                <LocalLink href={`/list/${toUrl(list.id)}`}>
                  View List ➡️
                </LocalLink>
              </Box>
            ))
          : null}
        <CreateListCard refetch={refetch} />
      </Stack>
    </Box>
  )
}
