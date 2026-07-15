import { motion } from 'framer-motion'
import './Anime.css'
import AnimeCard from '../components/AnimeCard.jsx'

const monkeyDLuffy = 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784018897/pirate-monkey_vbeprr.jpg'
const bakiHanmaImg = 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784018690/baki-hanma-anime-series-3840x2160-14925_utptuh.jpg'
const sasukeImg = 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784018955/sasuke-uchiha_qkhkiz.png'
const kokushiboImg = 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784018900/kokushibo-demon-_qdhr9v.png'
const attackOnTitanImg = 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784018712/attack-on-titan_dvmcgh.jpg'
const jujutsuKaisenImg = 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784018999/jujutsu-kaisen-_pq7rzd.jpg'
const classroomofEliteImg = 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784018693/classroom-of-the-elite_txlyxf.jpg'
const TokyoGhoulImg = 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784018897/Kaneghoul_pf6ahq.jpg'
const ChainsawManImg = 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784018709/chainsaw-man-denj-_ocumqa.jpg'
const TokyoRevengersImg = 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784018888/izana-kurokawa_fwyr1k.jpg'
const SoloLevelingImg = 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784019211/sung-jinwoo-purple_ppescj.jpg'
const OnePunchManImg = 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784019056/saitama-one-punch-man_lubkya.jpg'
const DeathNoteImg = 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784018713/death-note-light_er1emq.jpg'
const dragonBallImg = 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784018714/goku-vs-vegeta-_wnmuvk.jpg'

export default function Anime() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Anime Page Hero Banner */}
      <div className="anime-page-hero">
        <div className="anime-hero-overlay" />
        <motion.div
          className="anime-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="anime-hero-badge">🔥 Trending Now</span>
          <h1 className="anime-hero-title">Explore All Anime</h1>
          <p className="anime-hero-subtitle">
            Dive into our curated collection of the greatest anime series ever created.
          </p>
        </motion.div>
      </div>

      {/* Anime Cards Grid */}
      <main className="anime-page-container">
        <div className="anime-page-grid">
          <AnimeCard
            title="One Piece"
            description="Join Monkey D. Luffy on his quest to find the legendary treasure and become the Pirate King."
            image={monkeyDLuffy}
            path="/one-piece"
          />

          <AnimeCard
            title="Solo Leveling"
            description="Sung Jin-woo, the weakest hunter alive, discovers a system that allows him to level up and become the strongest."
            image={SoloLevelingImg}
            path="/solo-leveling"
          />

          <AnimeCard
            title="Demon Slayer"
            description="Twin brothers whose bond was shattered by jealousy, leading one to become history's greatest swordsman and the other its strongest demon."
            image={kokushiboImg}
            path="/demon-slayer"
          />

          <AnimeCard
            title="Jujutsu Kaisen"
            description="A story of broken friendships, clashing ideals, and the battle between humanity and the King of Curses."
            image={jujutsuKaisenImg}
            path="/jujutsu-kaisen"
          />

          <AnimeCard
            title="Attack on Titan"
            description="Humanity fights for survival against terrifying giant humanoid creatures known as Titans."
            image={attackOnTitanImg}
            path="/attack-on-titan"
          />

          <AnimeCard
            title="Naruto Shippuden"
            description="Follow Naruto Uzumaki's journey to become the strongest ninja in his village."
            image={sasukeImg}
            path="/naruto"
          />

          <AnimeCard
            title="Chainsaw Man"
            description="A young man bonds with a Chainsaw Devil and fights to protect humanity from dangerous demons."
            image={ChainsawManImg}
            path="/chainsaw-man"
          />

          <AnimeCard
            title="One-Punch Man"
            description="Saitama, a hero who can defeat any enemy with a single punch, struggles to find meaning in his strength."
            image={OnePunchManImg}
            path="/one-punch-man"
          />

          <AnimeCard
            title="Tokyo Ghoul"
            description="A college student's life changes forever when he becomes a ghoul."
            image={TokyoGhoulImg}
            path="/tokyo-ghoul"
          />

          <AnimeCard
            title="Classroom of the Elite"
            description="Ayanokoji Kiyotaka enters the prestigious Tokyo Advanced Nurturing High School, only to discover it's a brutal meritocracy where only the smartest survive and the weak are discarded."
            image={classroomofEliteImg}
            path="/classroom-of-the-elite"
          />

          <AnimeCard
            title="Tokyo Revengers"
            description="A gang leader finds his life in danger when he becomes the target of a rival gang."
            image={TokyoRevengersImg}
            path="/tokyo-revengers"
          />

          <AnimeCard
            title="Baki Hanma"
            description="Witness the ultimate martial arts saga. Baki Hanma fights to surpass his father, the strongest creature on Earth."
            image={bakiHanmaImg}
            path="/baki-hanma"
          />

          <AnimeCard
            title="Death Note"
            description="A high school genius stumbles upon a supernatural notebook that allows him to kill anyone by writing their name in it."
            image={DeathNoteImg}
            path="/death-note"
          />

          <AnimeCard
            title="Dragon Ball Z"
            description="Follow the adventures of Goku as he defends the Earth against an assortment of villains."
            image={dragonBallImg}
            path="/dragon-ball"
          />
        </div>
      </main>
    </motion.div>
  ) 
}
