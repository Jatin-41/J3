<div align="center">

```
  ███╗   ██╗███████╗ ██████╗ █████╗ ██████╗ ██╗   ██╗
  ████╗  ██║██╔════╝██╔════╝██╔══██╗██╔══██╗╚██╗ ██╔╝
  ██╔██╗ ██║█████╗  ██║     ███████║██████╔╝ ╚████╔╝
  ██║╚██╗██║██╔══╝  ██║     ██╔══██║██╔══██╗  ╚██╔╝
  ██║ ╚████║███████╗╚██████╗██║  ██║██║  ██║   ██║
  ╚═╝  ╚═══╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝
```

### 🎌 AnimeVerse — Discover the World of Anime

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-05F?style=for-the-badge&logo=framer&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**An immersive, dark-themed anime discovery platform with interactive canvas effects, smooth animations, and a cyberpunk-inspired aesthetic.**

[Live Demo](#) • [Report Bug](https://github.com/your-username/anime-site-react/issues) • [Request Feature](https://github.com/your-username/anime-site-react/issues)

</div>

---

## 📖 About

**AnimeVerse** is a visually stunning anime-themed web application built with React and Vite. It features interactive full-screen canvas reveal effects, glassmorphism UI, Framer Motion animations, and a dark cyberpunk aesthetic — delivering an immersive browsing experience for anime fans.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Dark Cyberpunk Theme** | Navy-dark backgrounds with neon glows and gradient accents |
| 🖼️ **Interactive Canvas Effects** | Mouse-following image reveal using HTML5 Canvas compositing |
| ✨ **Smooth Animations** | Page transitions and hover effects powered by Framer Motion |
| 🔮 **Glassmorphism UI** | Blurred, translucent navigation and card components |
| 📱 **Responsive Design** | Adapts seamlessly across all screen sizes |
| 🌌 **Immersive Detail Pages** | Full-screen experiences for each anime with custom theming |
| ⚡ **Lightning Fast** | Vite-powered dev server with instant HMR |

---

## 🛠️ Tech Stack

```
┌─────────────────────────────────────────────────┐
│  FRONTEND                                        │
├─────────────────────────────────────────────────┤
│  ⚛️  React 19.2         - UI Framework          │
│  ⚡  Vite 8.1           - Build Tool            │
│  🚀  React Router 7.18  - Client-side Routing   │
│  🎞️  Framer Motion 12.4 - Animations            │
│  🎨  Plain CSS           - Styling (Variables)   │
│  🖌️  Google Fonts        - Typography            │
│  🖼️  HTML5 Canvas        - Interactive Effects   │
└─────────────────────────────────────────────────┘
```

---

## 🎬 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | **Home** | Hero banner + trending anime card grid |
| `/about` | **About** | About AnimeVerse platform |
| `/one-piece` | **One Piece** | Interactive Gear 5 canvas experience (Gold theme) |
| `/baki-hanma` | **Baki Hanma** | Interactive Demon Back canvas experience (Green theme) |
| `/naruto` | **Naruto** | Interactive Sharingan canvas experience (Orange theme) |

---

## 🎨 Design System

```css
/* Color Palette */
--bg-color:       #0f172a   /* Deep Navy      */
--text-color:     #f8fafc   /* Near White     */
--primary-color:  #3b82f6   /* Electric Blue   */
--secondary-color:#1e293b   /* Dark Slate      */
--accent-color:   #8b5cf6   /* Neon Purple     */
--card-bg:        rgba(30, 41, 59, 0.7)  /* Glass */
```

| Element | Font |
|---------|------|
| Logo | **Luckiest Guy** |
| UI Text | **Outfit** |
| Anime Titles | **Bangers** |
| Labels/Tags | **Bebas Neue** |
| Descriptions | **Cormorant Garamond** |

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/anime-site-react.git

# Navigate to project directory
cd anime-site-react

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be live at `http://localhost:5173` 🚀

---

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |

---

## 🗂️ Project Structure

```
anime-site-react/
├── public/
│   ├── favicon.svg          # Purple lightning bolt favicon
│   └── icons.svg            # Social media SVG sprite
├── src/
│   ├── assets/              # Anime character images
│   │   ├── baki-hanma-*.jpg
│   │   ├── monkey-d-luffy.jpg
│   │   ├── pirate-monkey.jpg
│   │   └── sasuke-uchiha*.png
│   ├── components/
│   │   ├── Navbar.jsx       # Glassmorphism navigation bar
│   │   ├── Footer.jsx       # Copyright footer
│   │   ├── HeroSection.jsx  # Full-screen hero banner
│   │   └── AnimeCard.jsx    # Reusable anime card component
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── About.jsx        # About page
│   │   ├── OnePiece.jsx     # One Piece detail page
│   │   ├── BakiHanma.jsx    # Baki Hanma detail page
│   │   └── Naruto.jsx       # Naruto detail page
│   ├── main.jsx             # React entry point
│   ├── App.jsx              # Root component with routes
│   └── index.css            # Global CSS & variables
├── index.html
├── package.json
└── vite.config.js
```

---

## 🖼️ Canvas Reveal Effect

The detail pages feature a custom **"Magic Lens"** effect:

```
┌─────────────────────────────────────┐
│         Bottom Layer (Image A)       │
│  ┌───────────────────────────┐      │
│  │    Top Layer (Image B)    │      │
│  │    revealed via cursor    │      │
│  │    trail compositing      │      │
│  └───────────────────────────┘      │
│  🟡 Cursor Glow follows mouse       │
└─────────────────────────────────────┘
```

- Uses `source-in` compositing on an offscreen canvas
- Cursor trail creates smooth reveal mask
- Each anime has its own glow color (Gold / Green / Orange)
- HiDPI/Retina display support via `devicePixelRatio`

---

## 🚀 Deployment

The app includes a pre-built `dist/` folder ready for deployment:

```bash
# Rebuild (if needed)
npm run build

# Deploy to any static host
# Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.
```

---

## 📝 To-Do

- [ ] Add Attack on Titan detail page (`/aot` route)
- [ ] Implement Demon Slayer page (assets already available)
- [ ] Add 404 page for undefined routes
- [ ] Extract shared canvas logic into a custom hook
- [ ] Add social media links in footer
- [ ] Implement dark/light mode toggle

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

```bash
# Fork the repo
# Create your feature branch
git checkout -b feature/amazing-feature

# Commit your changes
git commit -m 'Add amazing feature'

# Push to the branch
git push origin feature/amazing-feature

# Open a Pull Request
```

---

## 📄 License

This project is open source and available for educational purposes.

---

<div align="center>

**Made with ❤️ for Anime Fans Everywhere**

⭐ Star this repo if you like it!

</div>
