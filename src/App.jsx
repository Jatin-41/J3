import React, { Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
const Home = React.lazy(() => import('./pages/Home.jsx'))
const About = React.lazy(() => import('./pages/About.jsx'))
const Anime = React.lazy(() => import('./pages/Anime.jsx'))
const OnePiece = React.lazy(() => import('./pages/OnePiece.jsx'))
const BakiHanma = React.lazy(() => import('./pages/BakiHanma.jsx'))
const Naruto = React.lazy(() => import('./pages/Naruto.jsx'))
const DemonSlayer = React.lazy(() => import('./pages/DemonSlayer.jsx'))
const AttackOnTitan = React.lazy(() => import('./pages/AttackOnTitan.jsx'))
const JujutsuKaisen = React.lazy(() => import('./pages/JujutsuKaisen.jsx'))
const DragonBall = React.lazy(() => import('./pages/DragonBall.jsx'))
const ClassroomElite = React.lazy(() => import('./pages/ClassroomElite.jsx'))
const TokyoGhoul = React.lazy(() => import('./pages/TokyoGhoul.jsx'))
const ChainsawMan = React.lazy(() => import('./pages/ChainsawMan.jsx'))
const TokyoRevengers = React.lazy(() => import('./pages/TokyoRevengers.jsx'))
const SoloLeveling = React.lazy(() => import('./pages/SoloLeveling.jsx'))
const OnePunchMan = React.lazy(() => import('./pages/OnePunchMan.jsx'))
const DeathNote = React.lazy(() => import('./pages/DeathNote.jsx'))

export default function App() {
  const location = useLocation()
  const isDetailPage = ['/one-piece', '/baki-hanma', '/naruto', '/demon-slayer', '/attack-on-titan', '/jujutsu-kaisen', '/dragon-ball', '/classroom-of-the-elite', '/tokyo-ghoul', '/chainsaw-man', '/tokyo-revengers', '/solo-leveling', '/one-punch-man', '/death-note',].includes(location.pathname)

  return (
    <>
      {!isDetailPage && <Navbar />}
      <AnimatePresence mode="wait">
        <Suspense fallback={<div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>Loading Anime...</div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/anime" element={<Anime />} />
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
        </Suspense>
      </AnimatePresence>
      {!isDetailPage && <Footer />}
    </>
  )
}
