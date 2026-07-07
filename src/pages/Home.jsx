import { motion } from 'framer-motion'
import './Home.css'
import HeroSection from '../components/HeroSection.jsx'
import AnimeCard from '../components/AnimeCard.jsx'
import monkeyDLuffy from '../assets/monkey-d-luffy.jpg'
import bakiHanmaImg from '../assets/baki-hanma-anime-series-3840x2160-14925.jpg'
import sasukeImg from '../assets/sasuke-uchiha.png'
import kokushiboImg from '../assets/kokushibo-demon-.png'
import attackOnTitanImg from '../assets/attack-on-titan1.jpg'
import jujutsuKaisenImg from '../assets/jujutsu-kaisen-.jpg'
import gokuImg from '../assets/goku-vs-vegeta-.jpg'
import classroomofEliteImg from '../assets/classroom-of-the-elite.jpg'
import TokyoGhoulImg from '../assets/Kaneghoul.jpg'
import ChainsawManImg from '../assets/chainsaw-man-denj-.jpg'
import TokyoRevengersImg from '../assets/izana-kurokawa.jpg'
import SoloLevelingImg from '../assets/sung-jinwoo-purple.jpg'
import OnePunchManImg from '../assets/saitama-one-punch-man.jpg'


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
            title="Demon Slayer"
            description="Twin brothers whose bond was shattered by jealousy, leading one to become history's greatest swordsman and the other its strongest demon."
            image={kokushiboImg}
            path="/demon-slayer"
          />
           <AnimeCard
            title="Attack on Titan"
            description="Humanity fights for survival against terrifying giant humanoid creatures known as Titans."
            image={attackOnTitanImg}
            path="/attack-on-titan"
          />
           <AnimeCard
            title="Jujutsu Kaisen"
            description="A story of broken friendships, clashing ideals, and the battle between humanity and the King of Curses."
            image={jujutsuKaisenImg}
            path="/jujutsu-kaisen"
          />
          <AnimeCard
            title="Goku & Vejeta"
            description="Rival Saiyans whose fierce competition pushes each other to become stronger and protect the universe."
            image={gokuImg}
            path="/dragon-ball"
          />
          <AnimeCard
            title="Classroom of the Elite"
            description="Ayanokoji Kiyotaka enters the prestigious Tokyo Advanced Nurturing High School, only to discover it's a brutal meritocracy where only the smartest survive and the weak are discarded."
            image={classroomofEliteImg}
            path="/classroom-of-the-elite"
          />
          <AnimeCard
            title="Tokyo Ghoul"
            description="A college student's life changes forever when he becomes a ghoul."
            image={TokyoGhoulImg}
            path="/tokyo-ghoul"
          />
          <AnimeCard
            title="Chainsaw Man"
            description="A young man bonds with a Chainsaw Devil and fights to protect humanity from dangerous demons."
            image={ChainsawManImg}
            path="/chainsaw-man"
          />
          <AnimeCard
            title="Tokyo Revengers"
            description="A gang leader finds his life in danger when he becomes the target of a rival gang."
            image={TokyoRevengersImg}
            path="/tokyo-revengers"
          />
          <AnimeCard
            title="Solo Leveling"
            description="Sung Jin-woo, the weakest hunter alive, discovers a system that allows him to level up and become the strongest."
            image={SoloLevelingImg}
            path="/solo-leveling"
          />
          <AnimeCard
            title="One-Punch Man"
            description="Saitama, a hero who can defeat any enemy with a single punch, struggles to find meaning in his strength."
            image={OnePunchManImg}
            path="/one-punch-man"
          />
        </div>
      </main>
    </>
  )
}
