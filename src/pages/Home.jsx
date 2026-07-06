import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection.jsx'
import AnimeCard from '../components/AnimeCard.jsx'
import monkeyDLuffy from '../assets/monkey-d-luffy.jpg'
import bakiHanmaImg from '../assets/baki-hanma-anime-series-3840x2160-14925.jpg'
import sasukeImg from '../assets/sasuke-uchiha.png'

export default function Home() {
  return (
    <>
      <HeroSection />
      <main id="anime-list" className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Trending Anime
        </motion.h2>
        <div className="anime-grid">
          <AnimeCard
            title="One Piece"
            description="Join Monkey D. Luffy on his quest to find the legendary treasure and become the Pirate King."
            image={monkeyDLuffy}
            path="/one-piece"
          />
          <AnimeCard
            title="Baki Hanma"
            description="Witness the ultimate martial arts saga. Baki Hanma fights to surpass his father, the strongest creature on Earth."
            image={bakiHanmaImg}
            path="/baki-hanma"
          />
          <AnimeCard
            title="Naruto Shippuden"
            description="Follow Naruto Uzumaki's journey to become the strongest ninja in his village."
            image={sasukeImg}
            path="/naruto"
          />
          <AnimeCard
            title="Attack on Titan"
            description="Humanity fights for survival against terrifying giant humanoid creatures known as Titans."
            image="https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            path="/aot"
          />
        </div>
      </main>
    </>
  )
}
