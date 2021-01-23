import React, { createContext, useContext, useState, useEffect } from 'react'
import { Magic } from 'magic-sdk'

let magic

export function createMagic() {
  if (magic) {
    return magic
  }
  magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_KEY)

  return magic
}

let magicContext = createContext(magic)

export function Provider({ children }) {
  let [m, setM] = useState(magic)

  useEffect(() => {
    setM(createMagic())
  }, [])

  return <magicContext.Provider value={m}>{children}</magicContext.Provider>
}

export function useMagic() {
  return useContext(magicContext)
}
