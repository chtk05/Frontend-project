import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
import { useAuth } from '../providers/AuthProvider'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()
  return (
    <div className={classes.navcard}>
      <div className={classes.menu}>
        <svg
          height="512"
          viewBox="0 0 24 24"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          fill="currentColor"
          className={classes.navIcon}
        >
          <path d="m24 20v-14a3 3 0 0 0 -3-3h-1a3 3 0 0 0 -3.824-2.884l-3 .858a2.979 2.979 0 0 0 -1.176.652 2.979 2.979 0 0 0 -1.176-.652l-3-.858a3 3 0 0 0 -3.824 2.884h-1a3 3 0 0 0 -3 3v14h11v2h-4v2h10v-2h-4v-2zm-11-16.142a1 1 0 0 1 .725-.961l3-.857a1.015 1.015 0 0 1 .275-.04 1 1 0 0 1 1 1v6.246l-5 1.428zm-7-.858a1 1 0 0 1 1.275-.96l3 .857a1 1 0 0 1 .725.961v6.816l-5-1.428zm-4 3a1 1 0 0 1 1-1h1v5.754l8 2.286 8-2.286v-5.754h1a1 1 0 0 1 1 1v12h-20z" />
        </svg>
        <NavLink to="/" className={classes.title}>
          LearnHub{' '}
        </NavLink>
      </div>
      <div className={classes.navright}>
        {isLoggedIn ? (
          <>
            <NavLink className={classes.navlink} to="/create">
              Create
            </NavLink>
            <p className={classes.navlink} onClick={logout}>
              Logout
            </p>
          </>
        ) : (
          <Link to="/login" className={classes.loginBtn}>
            Login
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
