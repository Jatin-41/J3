import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Navbar.css'

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <motion.div 
        className="logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          AnimeVerse
        </Link>
      </motion.div>
      <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/anime" className={location.pathname === '/anime' ? 'active' : ''}>Anime</Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        </li>
      </ul>
    </nav>
  )
}
