import classes from './Navbar.module.css'
const Navbar = () => {
  return (
    <div>
      <svg
        id="Layer_1"
        height="512"
        viewBox="0 0 24 24"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        className={classes.navIcon}
      >
        <path d="m24 20v-14a3 3 0 0 0 -3-3h-1a3 3 0 0 0 -3.824-2.884l-3 .858a2.979 2.979 0 0 0 -1.176.652 2.979 2.979 0 0 0 -1.176-.652l-3-.858a3 3 0 0 0 -3.824 2.884h-1a3 3 0 0 0 -3 3v14h11v2h-4v2h10v-2h-4v-2zm-11-16.142a1 1 0 0 1 .725-.961l3-.857a1.015 1.015 0 0 1 .275-.04 1 1 0 0 1 1 1v6.246l-5 1.428zm-7-.858a1 1 0 0 1 1.275-.96l3 .857a1 1 0 0 1 .725.961v6.816l-5-1.428zm-4 3a1 1 0 0 1 1-1h1v5.754l8 2.286 8-2.286v-5.754h1a1 1 0 0 1 1 1v12h-20z" />
      </svg>
    </div>
  )
}

export default Navbar
