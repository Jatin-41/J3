import { motion } from 'framer-motion'
import './HeroSection.css'
const japan = 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784022021/japan_qowriw.jpg'

export default function HeroSection() {
  return (
    <header className="hero" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.75)), url(${japan})` }}>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Discover the World of Anime</h1>
        <p>Explore your favorite shows, characters, and epic moments.</p>
        <a href="#anime-list" className="cta-btn">Explore Now</a>
      </motion.div>
    </header>
  )
}
