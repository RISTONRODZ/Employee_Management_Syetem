import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    employees: [],
  })

  useEffect(() => {
    const { employees } = getLocalStorage()
    if (employees?.length > 0) {
      setUserData({ employees }) // ✅ Fix: keep structure consistent
    }
  }, [])

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
