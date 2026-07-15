import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './About.css'

// Framer motion variants for reuse
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <motion.div 
          className="about-hero-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="about-badge">Who We Are</span>
          <h1 className="about-title">The Ultimate <span>Otaku</span> Sanctuary</h1>
          <p className="about-subtitle">We are more than just a website. We are a community of passionate anime lovers.</p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="about-mission-section">
        <div className="about-container">
          <motion.div 
            className="mission-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="mission-text" variants={fadeInUp}>
              <h2>Our Mission</h2>
              <p>AnimeVerse was born out of a pure passion for Japanese animation. We felt that standard wikis and databases lacked the immersive experience that anime deserves.</p>
              <p>Our mission is to create a platform where art meets technology. By utilizing interactive canvas animations, we bring your favorite characters and scenes to life right beneath your cursor.</p>
              <div className="mission-stats">
                <div className="stat-item">
                  <h3>100+</h3>
                  <span>Curated Titles</span>
                </div>
                <div className="stat-item">
                  <h3>50k+</h3>
                  <span>Active Users</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="mission-image-wrapper" variants={fadeInUp}>
              <img 
                src="https://4kwallpapers.com/images/walls/thumbs_3t/25406.jpg" 
                alt="Anime Landscape" 
                className="mission-image"
                loading="lazy"
              />
              <div className="image-glow"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features / Why Us */}
      <section className="about-features-section">
        <div className="about-container">
          <motion.div 
            className="features-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2>What Makes Us Special</h2>
            <p>We redefine how you explore anime online.</p>
          </motion.div>
          
          <motion.div 
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="feature-card" variants={fadeInUp} whileHover={{ y: -10, scale: 1.02 }}>
              <div className="feature-icon">✨</div>
              <h3>Interactive Canvas</h3>
              <p>Every anime page features a custom mouse-reveal effect, making exploration incredibly engaging.</p>
            </motion.div>
            
            <motion.div className="feature-card" variants={fadeInUp} whileHover={{ y: -10, scale: 1.02 }}>
              <div className="feature-icon">🎨</div>
              <h3>Premium Design</h3>
              <p>No generic templates. Every element is crafted to reflect the high-quality art of the anime industry.</p>
            </motion.div>
            
            <motion.div className="feature-card" variants={fadeInUp} whileHover={{ y: -10, scale: 1.02 }}>
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Optimized with the latest web technologies, lazy loading, and modern frameworks for instant access.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <motion.div 
          className="about-cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Dive In?</h2>
          <p>Join thousands of otakus exploring our immersive universe.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
            <Link to="/anime" className="about-cta-btn">
              Explore Anime Now
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
