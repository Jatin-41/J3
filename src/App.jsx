import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import OnePiece from './pages/OnePiece.jsx'
import BakiHanma from './pages/BakiHanma.jsx'
import Naruto from './pages/Naruto.jsx'

export default function App() {
  const location = useLocation()
  const isDetailPage = location.pathname === '/one-piece' || location.pathname === '/baki-hanma' || location.pathname === '/naruto'

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
        </Routes>
      </AnimatePresence>
      {!isDetailPage && <Footer />}
    </>
  )
}
