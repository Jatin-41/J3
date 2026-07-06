import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './AnimeCard.css'

export default function AnimeCard({ title, description, image, path }) {
  const navigate = useNavigate()

  return (
    <motion.div
      className="anime-card"
      onClick={() => navigate(path)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <div
        className="card-image"
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  )
}