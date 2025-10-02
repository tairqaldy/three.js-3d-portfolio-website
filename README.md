# Three.js 3D Portfolio - Tair Kaldybayev

A modern, interactive 3D portfolio website built with React, Three.js, and React Three Fiber. Features immersive 3D animations, interactive elements, and a sleek dark theme.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18+-blue)
![Three.js](https://img.shields.io/badge/Three.js-latest-green)
![Vite](https://img.shields.io/badge/Vite-5+-purple)

## ✨ Features

### 🎨 Interactive 3D Elements
- **3D Hacker Room Scene** - Immersive workspace environment
- **Animated Developer Character** - Multiple animations (idle, salute, clapping, victory)
- **Floating 3D Objects** - React logo, cubes, rings, and custom models
- **Interactive Globe** - Shows location with custom markers
- **Custom 3D Models** - Lightbulb, Rubik's cube, tree with animations

### 🚀 Modern Tech Stack
- **Frontend**: React 18, Vite, Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: GSAP, Framer Motion
- **Styling**: Tailwind CSS with custom components
- **Icons**: Custom SVG icons and 3D models

### 📱 Responsive Design
- Mobile-first approach
- Adaptive 3D scene scaling
- Touch-friendly interactions
- Optimized performance across devices

### 🎯 Sections
1. **Hero** - Animated 3D scene with floating elements
2. **About** - Interactive tech stack with 3D models
3. **Experience** - 3D character with work history
4. **Projects** - Portfolio showcase
5. **Contact** - Interactive contact form

## 🛠️ Installation

### Prerequisites
- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **Modern browser** (Chrome, Firefox, Safari, Edge)

### Quick Setup
```bash
# Clone and setup
git clone https://github.com/tairqaldy/three.js-3d-portfolio-website.git
cd three.js-3d-portfolio-website
npm install
npm run dev
```

### Development Commands
```bash
# Start development server
npm run dev
# Opens at http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

### What You Need to Modify

#### 1. **Personal Information** (`src/constants/index.js`)
```javascript
// Update your work experience, projects, and contact info
export const workExperiences = [
  {
    id: 1,
    name: "Your Company",
    position: "Your Position", 
    duration: "2023 - Present",
    // ... update with your data
  }
]
```

#### 2. **Contact Form** (`src/sections/Contact.jsx`)
```javascript
// Update EmailJS service IDs (lines 29-38)
emailjs.send(
  'YOUR_SERVICE_ID',     // Replace with your EmailJS service ID
  'YOUR_TEMPLATE_ID',    // Replace with your template ID
  // ... your email data
  'YOUR_PUBLIC_KEY',     // Replace with your EmailJS public key
)
```

#### 3. **3D Models** (`public/models/`)
- Replace `developer.glb` with your character model
- Update `hacker-room.glb` with your workspace scene
- Add your own 3D assets

#### 4. **Styling** (`src/index.css`)
- Modify colors in CSS variables
- Update fonts and spacing
- Customize component styles

#### 5. **Content** (Various files)
- Update text content in all sections
- Replace images in `public/assets/`
- Modify tech stack in About section

## 📁 Project Structure

```
src/
├── components/          # Reusable 3D and UI components
│   ├── Button.jsx      # Custom button component
│   ├── CanvasLoader.jsx # Loading component
│   ├── Cube.jsx        # 3D cube component
│   ├── Developer.jsx   # Animated 3D character
│   ├── HackerRoom.jsx  # 3D room scene
│   ├── HeroCamera.jsx  # Camera controls
│   ├── Lightbulb.jsx   # Custom 3D lightbulb
│   ├── Loading.jsx     # Loading states
│   ├── ReactLogo.jsx   # 3D React logo
│   ├── Rings.jsx       # 3D rings animation
│   ├── RubicsCube.jsx  # 3D Rubik's cube
│   ├── Target.jsx      # 3D target model
│   └── Tree.jsx        # 3D tree model
├── sections/           # Page sections
│   ├── About.jsx       # About section with tech stack
│   ├── Clients.jsx     # Client testimonials
│   ├── Contact.jsx     # Contact form
│   ├── Experience.jsx  # Work experience
│   ├── Footer.jsx      # Footer component
│   ├── Hero.jsx        # Hero section
│   ├── Navbar.jsx      # Navigation
│   └── Projects.jsx    # Projects showcase
├── constants/          # Configuration and data
│   └── index.js        # Constants and work data
├── App.jsx            # Main app component
├── index.css          # Global styles
└── main.jsx           # App entry point

public/
├── models/            # 3D model files
│   ├── animations/    # Character animations
│   ├── human/         # Character models
│   └── *.glb          # 3D model files
├── assets/            # Images and icons
└── textures/          # Texture files
```

## 🎮 3D Models & Assets

### Character Animations
- `idle.fbx` - Default idle animation
- `salute.fbx` - Greeting animation
- `clapping.fbx` - Celebration animation
- `victory.fbx` - Success animation

### 3D Scenes
- `hacker-room.glb` - Main workspace scene
- `developer.glb` - Character model
- `react.glb` - React logo
- `cube.glb` - Floating cube

### Custom Components
- **Lightbulb** - Procedural 3D lightbulb with glow effects
- **Rubik's Cube** - Animated 3x3x3 cube with rotation
- **Tree** - Multi-layered pine tree with wind animation

## 🎨 Customization

### Colors & Theme
Edit `src/index.css` to customize:
- Color scheme
- Typography
- Component styles
- Animation timings

### 3D Models
Replace models in `public/models/`:
- Use GLB format for best performance
- Optimize textures for web
- Keep file sizes under 5MB

### Animations
Modify animations in component files:
- GSAP animations in `Target.jsx`
- Three.js animations in custom components
- CSS animations in `index.css`

## 🚀 Performance Optimization

### 3D Optimization
- Model compression and optimization
- LOD (Level of Detail) implementation
- Texture compression
- Efficient lighting setup

### React Optimization
- Code splitting with lazy loading
- Memoization for expensive calculations
- Suspense boundaries for 3D components
- Efficient re-renders

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Tair Kaldybayev**
- Portfolio: [Portfolio URL] - TODO deploy
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/tair-kaldybayev-922198312/)
- Email: taircaldy.yt@gmail.com

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - 3D graphics library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [Drei](https://github.com/pmndrs/drei) - Useful helpers for R3F
- [GSAP](https://greensock.com/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [JavaScript Mastery](https://www.youtube.com/watch?v=kt0FrkQgw8w) - Tutorial and assets for this project
  - 📁 [Free Video Kit (Code, Design, Repo, Guide)](https://jsm.dev/pfolio24-kit)

> **💡 Personal Recommendation**: I highly recommend following the [JavaScript Mastery tutorial](https://www.youtube.com/watch?v=kt0FrkQgw8w) step by step, writing everything yourself and understanding each concept. The explanation is really detailed and easy to follow! This approach helped me build a solid foundation in Three.js and React Three Fiber.

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/threejs-3d-portfolio-tairqaldy)
![GitHub forks](https://img.shields.io/github/forks/yourusername/threejs-3d-portfolio-tairqaldy)
![GitHub issues](https://img.shields.io/github/issues/yourusername/threejs-3d-portfolio-tairqaldy)
![GitHub license](https://img.shields.io/github/license/yourusername/threejs-3d-portfolio-tairqaldy)

---

⭐ **Star this repo if you found it helpful!**