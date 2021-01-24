import React, { createContext, useContext, useState } from 'react'

let userContext = createContext([])

export function Provider({ children }) {
  return (
    <userContext.Provider value={useState(null)}>
      {children}
    </userContext.Provider>
  )
}

export function useUser() {
  return useContext(userContext)
}
