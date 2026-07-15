import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './OnePiece.css'
// Import your images from assets
const pirateMonkey = 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784018897/pirate-monkey_vbeprr.jpg';
const monkeyDLuffy = 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784018918/monkey-d-luffy_lpo58a.jpg';

export default function OnePiece() {
  const canvasRef = useRef(null)
  const heroRef = useRef(null)
  const hintRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const canvas = canvasRef.current
    if (!hero || !canvas) return

    const ctx = canvas.getContext('2d')
    const hint = hintRef.current
    if (!ctx) return

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const TRAIL_LENGTH = 60
    let HEAD_RADIUS = 190
    const OVERLAY = 'rgba(0,0,0,0.42)'

    const mouse = { x: -9999, y: -9999 }
    const smooth = { x: -9999, y: -9999 }
    const trail = []

    const bottom = new Image()
    const top = new Image()
    bottom.src = pirateMonkey
    top.src = monkeyDLuffy

    const off = document.createElement('canvas')
    const offc = off.getContext('2d')

    function cover(img, cw, ch) {
      const ir = img.width / img.height
      const cr = cw / ch
      let w, h, x, y
      if (ir > cr) {
        h = ch
        w = ch * ir
        x = (cw - w) / 2
        y = 0
      } else {
        w = cw
        h = cw / ir
        x = 0
        y = (ch - h) / 2
      }
      return [x, y, w, h]
    }

    function resize() {
      const w = hero.offsetWidth
      const h = hero.offsetHeight
      canvas.width = w * DPR
      canvas.height = h * DPR
      off.width = w * DPR
      off.height = h * DPR
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      offc.setTransform(DPR, 0, 0, DPR, 0, 0)
      HEAD_RADIUS = Math.max(130, Math.min(w, h) * 0.24)
    }

    resize()
    window.addEventListener('resize', resize)

    function onMouseMove(e) {
      const r = hero.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
      if (hint) hint.style.opacity = '0'
    }

    function onTouchMove(e) {
      const r = hero.getBoundingClientRect()
      const t = e.touches[0]
      mouse.x = t.clientX - r.left
      mouse.y = t.clientY - r.top
      if (hint) hint.style.opacity = '0'
    }

    hero.addEventListener('mousemove', onMouseMove)
    hero.addEventListener('touchmove', onTouchMove, { passive: true })

    let animId

    function draw() {
      const w = hero.offsetWidth
      const h = hero.offsetHeight
      smooth.x += (mouse.x - smooth.x) * 0.13
      smooth.y += (mouse.y - smooth.y) * 0.13

      trail.unshift({ x: smooth.x, y: smooth.y })
      if (trail.length > TRAIL_LENGTH) trail.length = TRAIL_LENGTH

      ctx.clearRect(0, 0, w, h)
      const cb = cover(bottom, w, h)
      ctx.drawImage(bottom, cb[0], cb[1], cb[2], cb[3])
      ctx.fillStyle = OVERLAY
      ctx.fillRect(0, 0, w, h)

      offc.clearRect(0, 0, w, h)
      offc.globalCompositeOperation = 'source-over'
      for (let i = 0; i < trail.length; i++) {
        const t = 1 - i / trail.length
        const r = HEAD_RADIUS * (0.25 + 0.75 * t)
        const alpha = Math.pow(t, 1.5)
        offc.beginPath()
        offc.arc(trail[i].x, trail[i].y, r, 0, Math.PI * 2)
        offc.fillStyle = 'rgba(0,0,0,' + alpha + ')'
        offc.fill()
      }
      offc.globalCompositeOperation = 'source-in'
      const ct = cover(top, w, h)
      offc.drawImage(top, ct[0], ct[1], ct[2], ct[3])
      offc.globalCompositeOperation = 'source-atop'
      offc.fillStyle = OVERLAY
      offc.fillRect(0, 0, w, h)

      ctx.drawImage(off, 0, 0, w, h)

      if (trail.length) {
        const head = trail[0]
        const glow = ctx.createRadialGradient(
          head.x,
          head.y,
          0,
          head.x,
          head.y,
          HEAD_RADIUS * 1.45
        )
        glow.addColorStop(0, 'rgba(255,245,215,0.30)')
        glow.addColorStop(0.45, 'rgba(244,196,48,0.14)')
        glow.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.beginPath()
        ctx.arc(head.x, head.y, HEAD_RADIUS * 1.45, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()
      }
      animId = requestAnimationFrame(draw)
    }

    let loaded = 0
    const onLoad = function () {
      if (++loaded === 2) draw()
    }
    bottom.onload = onLoad
    top.onload = onLoad

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      hero.removeEventListener('mousemove', onMouseMove)
      hero.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="/anime" className="back-btn one-piece">
        ← Back
      </Link>
      <div className="canvas-hero one-piece" ref={heroRef}>
        <canvas className="canvas-element" ref={canvasRef} />

        <div className="canvas-logo">
          <div className="main-title one-piece">One Piece</div>
          <div className="sub-tag">GEAR&nbsp;&nbsp;5 &nbsp;·&nbsp; AWAKENING</div>
        </div>

        <div className="canvas-content">
          <div className="canvas-left">
            <span className="canvas-eyebrow one-piece">Straw Hat Pirates</span>
            <h1 className="canvas-title one-piece">
              MONKEY D.<br />LUFFY
            </h1>
            <p className="canvas-desc">
              The boy who would be King of the Pirates. Rubber fists, an iron
              will, and a grin that never quits — chasing the world's greatest
              treasure.
            </p>
            <button className="canvas-btn one-piece">Set Sail</button>
          </div>
          <div className="canvas-right">
            <span className="canvas-eyebrow">Joy Boy Awakened</span>
            <h1 className="canvas-title one-piece">GEAR<br />FIVE</h1>
            <p className="canvas-desc">
              The Warrior of Liberation. Laughter becomes power, the world bends
              to imagination — the truest form of the Nika Devil Fruit.
            </p>
          </div>
        </div>

        <div className="canvas-hint" ref={hintRef}>
          ▸ MOVE ACROSS TO AWAKEN GEAR 5 ◂
        </div>
      </div>
    </motion.div>
  )
}