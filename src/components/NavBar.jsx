import logo from "../../public/logo.png"

const NavBar = () => {
  return (
    <nav>
      <img src={logo} className="logo" alt="logo" />
      <h1 className="site-title">my travel journal</h1>
    </nav>
  )
}

export default NavBar