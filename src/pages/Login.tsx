import { FormEvent, useState } from 'react'
import { useAuth } from '../providers/AuthProvider'

const Login = () => {
  const { login } = useAuth()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await login(username, password)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label> Username</label>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <label>Password</label>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </form>
    </>
  )
}

export default Login
