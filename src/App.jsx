import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import OnePiece from './pages/OnePiece.jsx'
import BakiHanma from './pages/BakiHanma.jsx'
import Naruto from './pages/Naruto.jsx'
import DemonSlayer from './pages/DemonSlayer.jsx'
import AttackOnTitan from './pages/AttackOnTitan.jsx'
import JujutsuKaisen from './pages/JujutsuKaisen.jsx'
import DragonBall from './pages/DragonBall.jsx'
import ClassroomElite from './pages/ClassroomElite.jsx'
import TokyoGhoul from './pages/TokyoGhoul.jsx'

export default function App() {
  const location = useLocation()
  const isDetailPage = ['/one-piece', '/baki-hanma', '/naruto', '/demon-slayer', '/attack-on-titan', '/jujutsu-kaisen', '/dragon-ball', '/classroom-of-the-elite', '/tokyo-ghoul'].includes(location.pathname)

  return (
    <>
      {!isDetailPage && <Navbar />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/one-piece" element={<OnePiece />} />
          <Route path="/baki-hanma" element={<BakiHanma />} />
          <Route path="/naruto" element={<Naruto />} />
          <Route path="/demon-slayer" element={<DemonSlayer />} />
          <Route path="/attack-on-titan" element={<AttackOnTitan />} />
          <Route path="/jujutsu-kaisen" element={<JujutsuKaisen />} />
          <Route path="/dragon-ball" element={<DragonBall />} />
          <Route path="/classroom-of-the-elite" element={<ClassroomElite />} />
          <Route path="/tokyo-ghoul" element={<TokyoGhoul />} /> 
        </Routes>
      </AnimatePresence>
      {!isDetailPage && <Footer />}
    </>
  )
}
