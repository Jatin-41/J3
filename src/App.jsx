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
import ChainsawMan from './pages/ChainsawMan.jsx'
import TokyoRevengers from './pages/TokyoRevengers.jsx'
import SoloLeveling from './pages/SoloLeveling.jsx'
import OnePunchMan from './pages/OnePunchMan.jsx'
import DeathNote from './pages/DeathNote.jsx'

export default function App() {
  const location = useLocation()
  const isDetailPage = ['/one-piece', '/baki-hanma', '/naruto', '/demon-slayer', '/attack-on-titan', '/jujutsu-kaisen', '/dragon-ball', '/classroom-of-the-elite', '/tokyo-ghoul', '/chainsaw-man', '/tokyo-revengers', '/solo-leveling', '/one-punch-man', '/death-note',].includes(location.pathname)

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
          <Route path="/chainsaw-man" element={<ChainsawMan />} />  
          <Route path="/tokyo-revengers" element={<TokyoRevengers />} /> 
          <Route path="/solo-leveling" element={<SoloLeveling />} />
          <Route path="/one-punch-man" element={<OnePunchMan />} />
          <Route path="/death-note" element={<DeathNote />} />  
        </Routes>
      </AnimatePresence>
      {!isDetailPage && <Footer />}
    </>
  )
}
