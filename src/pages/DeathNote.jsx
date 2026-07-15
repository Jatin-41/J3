import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './DeathNote.css'
const deathNoteBg = 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784018713/death-note-light_er1emq.jpg';
const deathNoteReveal = 'https://res.cloudinary.com/dzrgiefgf/image/upload/v1784018887/l-lawliet-death_tfeexl.png'; // Agar alag image hai toh, nahi toh same use karo

export default function DeathNote() {
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
    const OVERLAY = 'rgba(0,0,0,0.48)'

    const mouse = { x: -9999, y: -9999 }
    const smooth = { x: -9999, y: -9999 }
    const trail = []

    const bottom = new Image()
    const top = new Image()
    bottom.src = deathNoteBg
    top.src = deathNoteReveal

    const off = document.createElement('canvas')
    const offc = off.getContext('2d')

    function cover(img, cw, ch) {
      const ir = img.width / img.height
      const cr = cw / ch
      let w, h, x, y
      if (ir > cr) { h = ch; w = ch * ir; x = (cw - w) / 2; y = 0 }
      else { w = cw; h = cw / ir; x = 0; y = (ch - h) / 2 }
      return [x, y, w, h]
    }

    function resize() {
      const w = hero.offsetWidth, h = hero.offsetHeight
      canvas.width = w * DPR; canvas.height = h * DPR
      off.width = w * DPR; off.height = h * DPR
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      offc.setTransform(DPR, 0, 0, DPR, 0, 0)
      HEAD_RADIUS = Math.max(130, Math.min(w, h) * 0.24)
    }

    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e) => {
      const r = hero.getBoundingClientRect()
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top
      if (hint) hint.style.opacity = '0'
    }
    const onTouchMove = (e) => {
      const r = hero.getBoundingClientRect(), t = e.touches[0]
      mouse.x = t.clientX - r.left; mouse.y = t.clientY - r.top
      if (hint) hint.style.opacity = '0'
    }

    hero.addEventListener('mousemove', onMouseMove)
    hero.addEventListener('touchmove', onTouchMove, { passive: true })

    let animId

    function draw() {
      const w = hero.offsetWidth, h = hero.offsetHeight
      smooth.x += (mouse.x - smooth.x) * 0.13
      smooth.y += (mouse.y - smooth.y) * 0.13
      trail.unshift({ x: smooth.x, y: smooth.y })
      if (trail.length > TRAIL_LENGTH) trail.length = TRAIL_LENGTH

      ctx.clearRect(0, 0, w, h)
      const cb = cover(bottom, w, h)
      ctx.drawImage(bottom, cb[0], cb[1], cb[2], cb[3])
      ctx.fillStyle = OVERLAY; ctx.fillRect(0, 0, w, h)

      offc.clearRect(0, 0, w, h)
      offc.globalCompositeOperation = 'source-over'
      for (let i = 0; i < trail.length; i++) {
        const t = 1 - i / trail.length
        const r = HEAD_RADIUS * (0.25 + 0.75 * t)
        const alpha = Math.pow(t, 1.5)
        offc.beginPath(); offc.arc(trail[i].x, trail[i].y, r, 0, Math.PI * 2)
        offc.fillStyle = 'rgba(0,0,0,' + alpha + ')'; offc.fill()
      }
      offc.globalCompositeOperation = 'source-in'
      const ct = cover(top, w, h)
      offc.drawImage(top, ct[0], ct[1], ct[2], ct[3])
      offc.globalCompositeOperation = 'source-atop'
      offc.fillStyle = OVERLAY; offc.fillRect(0, 0, w, h)
      ctx.drawImage(off, 0, 0, w, h)

      if (trail.length) {
        const head = trail[0]
        const glow = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, HEAD_RADIUS * 1.45)
        glow.addColorStop(0, 'rgba(255,0,0,0.30)') // Red glow - Death Note theme
        glow.addColorStop(0.45, 'rgba(150,0,0,0.12)')
        glow.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.beginPath(); ctx.arc(head.x, head.y, HEAD_RADIUS * 1.45, 0, Math.PI * 2)
        ctx.fillStyle = glow; ctx.fill()
      }
      animId = requestAnimationFrame(draw)
    }

    let loaded = 0
    const onLoad = () => { if (++loaded === 2) draw() }
    const onError = () => { loaded++; if (loaded >= 2) draw() }
    bottom.onload = onLoad; top.onload = onLoad
    bottom.onerror = onError; top.onerror = onError

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      hero.removeEventListener('mousemove', onMouseMove)
      hero.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
    >
      <Link to="/anime" className="back-btn death-note">← Back</Link>

      <div className="canvas-hero death-note" ref={heroRef}>
        <canvas className="canvas-element" ref={canvasRef} />

        <div className="canvas-logo">
          <div className="main-title death-note">Death Note</div>
          <div className="sub-tag">THE&nbsp;&nbsp;NOTEBOOK &nbsp;·&nbsp; THE GOD</div>
        </div>

        <div className="canvas-content">
          {/* LEFT SIDE - LIGHT YAGAMI */}
          <div className="canvas-left">
            <span className="canvas-eyebrow death-note">The God of the New World</span>
            <h1 className="canvas-title death-note">
              LIGHT<br />YAGAMI
            </h1>
            <p className="canvas-desc">
              A brilliant student who stumbles upon a supernatural 
              notebook that can kill anyone whose name is written in it. 
              He takes it upon himself to cleanse the world of criminals, 
              becoming a god-like figure known as "Kira."
            </p>
            <button className="canvas-btn death-note">Write the Name</button>
          </div>

          {/* RIGHT SIDE - L */}
          <div className="canvas-right">
            <span className="canvas-eyebrow death-note-right">The World's Greatest Detective</span>
            <h1 className="canvas-title death-note death-note-right">
              L<br />LAWLIET
            </h1>
            <p className="canvas-desc">
              The enigmatic detective who stands as humanity's only hope. 
              With his unmatched intellect and unorthodox methods, 
              he vows to catch Kira — even if it means putting his 
              own life on the line in this deadly game of wits.
            </p>
          </div>
        </div>

        <div className="canvas-hint" ref={hintRef}>
          ▸ MOVE ACROSS TO REVEAL THE TRUTH ◂
        </div>
      </div>
    </motion.div>
  )
}