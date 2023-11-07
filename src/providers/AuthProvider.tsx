import { ReactNode, createContext, useContext, useState } from 'react'
import { CredentialDTO, LoginDTO } from '../types/dto'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface AuthProviderProps {
  children: ReactNode
}
interface AuthContextType {
  isLoggedIn: boolean
  username: string | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth should be used within AuthProvider')
  return context
}

const token = localStorage.getItem('token')
const user = localStorage.getItem('username')
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedin] = useState<boolean>(!!token)
  const [username, setUsername] = useState<string | null>(user)
  const navigate = useNavigate()

  const login = async (username: string, password: string) => {
    const loginBody: LoginDTO = { username, password }
    try {
      const response = await axios.post<CredentialDTO>('http://localhost:8080/auth/login', loginBody, {
        headers: { 'Content-Type': 'application/json' },
      })
      localStorage.setItem('token', response.data.accessToken)
      localStorage.setItem('username', username)
      setIsLoggedin(true)
      setUsername(username)
    } catch (err) {
      throw new Error('Invalid username or password')
    }
  }

  const logout = () => {
    localStorage.clear()
    setIsLoggedin(false)
    setUsername(null)
    navigate('/')
  }

  return <AuthContext.Provider value={{ login, isLoggedIn, username, logout }}>{children}</AuthContext.Provider>
}

export default AuthProvider
