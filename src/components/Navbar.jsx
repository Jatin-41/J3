import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="logo">AnimeVerse</div>
      <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        </li>
      </ul>
    </nav>
  )
}
