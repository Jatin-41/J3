import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'
import HeroSection from '../components/HeroSection.jsx'

const featuredAnime = [
  {
    title: 'One Piece',
    image: 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784018897/pirate-monkey_vbeprr.jpg',
    path: '/one-piece'
  },
  {
    title: 'Solo Leveling',
    image: 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784019211/sung-jinwoo-purple_ppescj.jpg',
    path: '/solo-leveling'
  },
  {
    title: 'Attack on Titan',
    image: 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784018712/attack-on-titan_dvmcgh.jpg',
    path: '/attack-on-titan'
  },
  {
    title: 'Jujutsu Kaisen',
    image: 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784018898/jujutsu-kaisen_fujthd.jpg',
    path: '/jujutsu-kaisen'
  }
]

const stats = [
  { number: '14+', label: 'Anime Series' },
  { number: '50+', label: 'Characters' },
  { number: '∞', label: 'Epic Moments' },
  { number: '24/7', label: 'Anime Vibes' }
]

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* What is AnimeVerse Section */}
      <section className="home-about-section">
        <div className="home-container">
          <motion.div
            className="home-about-grid"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="home-about-text">
              <span className="home-eyebrow">Welcome to AnimeVerse</span>
              <h2 className="home-heading">Your Ultimate Anime Destination</h2>
              <p className="home-description">
                AnimeVerse is a community-driven platform where you can explore, discover,
                and dive deep into the world of anime. From legendary shonen epics to
                mind-bending psychological thrillers — we've got it all covered with
                stunning visuals and interactive experiences.
              </p>
              <p className="home-description">
                Each anime page features a unique <strong>canvas mouse-reveal animation</strong> that
                lets you uncover hidden characters and scenes as you move your cursor.
                It's anime exploration like you've never experienced before.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                <Link to="/anime" className="home-cta-btn">
                  Browse All Anime →
                </Link>
              </motion.div>
            </div>
            <div className="home-about-visual">
              <motion.div
                className="home-glow-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="glow-icon">⚡</div>
                <h3>Interactive Experience</h3>
                <p>Mouse-reveal canvas animations on every anime detail page</p>
              </motion.div>
              <motion.div
                className="home-glow-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="glow-icon">🎨</div>
                <h3>Stunning Visuals</h3>
                <p>High-quality artwork and custom themes for each anime</p>
              </motion.div>
              <motion.div
                className="home-glow-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="glow-icon">🌏</div>
                <h3>Growing Collection</h3>
                <p>New anime and features added regularly to keep you hooked</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="home-stats-section">
        <div className="home-container">
          <div className="home-stats-grid">
            {stats.map((stat, i) => (
              <motion.div
                className="home-stat-card"
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.1, translateY: -5 }}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Picks Section */}
      <section className="home-featured-section">
        <div className="home-container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            Featured Picks
          </motion.h2>
          <motion.p
            className="home-featured-subtitle"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hand-picked anime to get you started
          </motion.p>
          <div className="home-featured-grid">
            {featuredAnime.map((anime, i) => (
              <motion.div
                className="home-featured-card"
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Link to={anime.path}>
                  <div
                    className="featured-card-img"
                    style={{ backgroundImage: `url(${anime.image})` }}
                  />
                  <div className="featured-card-info">
                    <h3>{anime.title}</h3>
                    <span className="featured-card-arrow">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="home-featured-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
              <Link to="/anime" className="home-cta-btn secondary">
                View All Anime →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="home-how-section">
        <div className="home-container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          <div className="home-steps-grid">
            <motion.div
              className="home-step-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="step-number">01</div>
              <h3>Pick Your Anime</h3>
              <p>Browse our collection and choose any anime that catches your eye.</p>
            </motion.div>
            <motion.div
              className="home-step-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="step-number">02</div>
              <h3>Explore the Details</h3>
              <p>Dive into each anime's custom page with unique themes and content.</p>
            </motion.div>
            <motion.div
              className="home-step-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="step-number">03</div>
              <h3>Reveal Hidden Art</h3>
              <p>Move your mouse across the canvas to reveal hidden characters and scenes.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
