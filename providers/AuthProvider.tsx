import { User } from 'interfaces'
import { createContext, ReactChild, useState } from 'react'
import { LocalStorageService } from 'services/LocalStorageService'

interface AuthContextState {
  mobile: string
  user: User | null
  setMobile: (mobile: string) => void
  setUser: (user: User) => void
}

const initialValues: AuthContextState = {
  mobile: '',
  user: null,
  setMobile: () => {},
  setUser: () => {},
}

export const AuthContext = createContext(initialValues)

interface Props {
  children: ReactChild
}

export default function AuthProvider({ children }: Props) {
  const [mobile, setMobile] = useState<string>('')
  const [user, setUser] = useState<User | null>(null)

  const onSetMobile = (mobile: string) => {
    setMobile(mobile)
  }

  const onSetUser = (user: User) => {
    setUser(user)
    LocalStorageService.user = user
  }

  return (
    <AuthContext.Provider
      value={{ mobile, user, setMobile: onSetMobile, setUser: onSetUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}
