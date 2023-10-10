import { ReactNode, createContext, useContext, useState } from 'react'
import { CredentialDTO, LoginDTO } from '../types/dto'
import axios from 'axios'

interface AuthProviderProps {
  children: ReactNode
}
interface AuthContextType {
  isLoggedIn: boolean
  username: string | null
  login: (username: string, password: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth should be used within AuthProvider')
  return context
}

const token = localStorage.getItem('token')
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedin] = useState<boolean>(!!token)
  const [username, setUsername] = useState<string | null>(null)
  const login = async (username: string, password: string) => {
    const loginBody: LoginDTO = { username, password }
    try {
      const response = await axios.post<CredentialDTO>('https://api.learnhub.thanayut.in.th/auth/login', loginBody, {
        headers: { 'Content-Type': 'application/json' },
      })
      console.log(response.data.accessToken)
      setIsLoggedin(true)
      setUsername(username)
    } catch (err) {
      throw new Error('Invalid username or password')
    }
  }

  return <AuthContext.Provider value={{ login, isLoggedIn, username }}>{children}</AuthContext.Provider>
}

export default AuthProvider
