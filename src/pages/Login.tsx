import { FormEvent, useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import classes from './Login.module.css'

const Login = () => {
  const { login } = useAuth()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await login(username, password)

      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={classes.loginForm}>
      <form onSubmit={handleSubmit}>
        <svg
          id="Layer_1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          fill="currentColor"
          stroke="currentColor"
          className={classes.navIcon}
        >
          <path d="m24 8v12h-2v-10.71l-7.88 5.082a3.892 3.892 0 0 1 -4.24 0l-9.88-6.372 9.88-6.373a3.9 3.9 0 0 1 4.24 0zm-12 9a5.894 5.894 0 0 1 -3.2-.947l-4.8-3.093v7.454l.293.293c.094.093 2.354 2.293 7.707 2.293s7.613-2.2 7.707-2.293l.293-.293v-7.454l-4.8 3.093a5.894 5.894 0 0 1 -3.2.947z" />
        </svg>
        <h2 className={classes.loginHead}>Login</h2>
        <label className={classes.loginLabel}> Username</label>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <label className={classes.loginLabel}>Password</label>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Login" />
      </form>

      <Toaster />
    </div>
  )
}

export default Login
