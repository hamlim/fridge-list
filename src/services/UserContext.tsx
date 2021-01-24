import React, { createContext, useContext, useEffect, useState } from 'react'
import supabase from './supabase'

let userContext = createContext([])

export function Provider({ children }) {
  let val = useState(null)
  useEffect(() => {
    let user = supabase.auth.user()
    val[1](user)
  }, [])
  return <userContext.Provider value={val}>{children}</userContext.Provider>
}

export function useUser() {
  return useContext(userContext)
}
