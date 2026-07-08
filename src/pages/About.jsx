import { motion } from 'framer-motion'
import './About.css'

export default function About() {
  return (
    <main className="container">
      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="section-title">About AnimeVerse</h1>
        <p>Welcome to AnimeVerse, your ultimate destination for everything anime! We are dedicated to providing the latest news, detailed insights, and vibrant community discussions about your favorite animated series from Japan.</p>
        <p>Whether you're a seasoned otaku or just starting your journey into the world of anime, we have something for everyone. Dive deep into character backstories, explore intricate lore, and discover hidden gems.</p>
        <div className="about-image" style={{ backgroundImage: "url('https://4kwallpapers.com/images/walls/thumbs_3t/25406.jpg')" }} />
      </motion.div>
    </main>
  )
}
