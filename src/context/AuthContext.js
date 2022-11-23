import { createContext, useState } from 'react'

// eslint-disable-next-line
export default ({ children }) => {
  const [state, setState] = useState({
    auth: false,
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    profile: {},
  })

  return <AuthContext.Provider value={[state, setState]}>{children}</AuthContext.Provider>
}
export const AuthContext = createContext()
