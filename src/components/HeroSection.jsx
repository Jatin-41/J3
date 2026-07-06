import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <header className="hero">
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
