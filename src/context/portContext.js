import React, { useState, createContext } from "react"

const defaultState = {
  value: "",
}
const url = `/.netlify/functions/instagram`

export const PortContext = createContext(defaultState)

export const PortProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)

  return (
    <PortContext.Provider value={{ ...defaultState, loading, setLoading }}>
      {children}
    </PortContext.Provider>
  )
}
