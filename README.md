# 🚀 Siddhesh Kabra's Portfolio

A modern, interactive portfolio website showcasing my journey as a Full-Stack Developer. Built with React, Three.js, and cutting-edge web technologies to create an immersive and engaging user experience.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-19.1.1-blue) ![Three.js](https://img.shields.io/badge/Three.js-0.179.1-orange) ![Vite](https://img.shields.io/badge/Vite-7.1.2-purple)

## ✨ Features

### 🎨 Interactive 3D Experience
- **Floating Astronaut**: Animated 3D astronaut model using React Three Fiber
- **Parallax Background**: Dynamic space-themed background with smooth scrolling effects
- **Mouse-Responsive Camera**: Camera follows mouse movement for immersive interaction
- **Smooth Animations**: Fluid transitions and micro-interactions throughout

### 📱 Responsive Design
- **Mobile-First Approach**: Optimized for all device sizes
- **Adaptive 3D Elements**: Astronaut scales and repositions based on screen size
- **Touch-Friendly Interface**: Gesture support for mobile devices

### 🎯 Portfolio Sections
- **Hero Section**: Eye-catching introduction with animated text and 3D elements
- **About Me**: Interactive grid layout showcasing skills and personality
- **Projects**: Detailed showcase of 7+ major projects with live demos
- **Experience**: Professional timeline with key achievements
- **Testimonials**: Client feedback and recommendations
- **Contact**: Multiple ways to get in touch with copy-to-clipboard functionality

### 🛠️ Technical Highlights
- **Modern React**: Built with React 19.1.1 and latest hooks
- **3D Graphics**: Three.js integration with React Three Fiber
- **Styling**: TailwindCSS for utility-first styling
- **Animations**: Framer Motion for smooth transitions
- **Performance**: Optimized bundle size and lazy loading

## 🚀 Live Demo

Visit the live portfolio: **[https://portfolio-alpha-one-67.vercel.app](https://portfolio-alpha-one-67.vercel.app)**

## 📦 Projects Showcased

### 1. **Lyvo Chat Application** 🚀
- **Tech Stack**: MERN + Socket.IO
- **Features**: Real-time messaging, JWT authentication, 32 customizable themes
- **Highlights**: CI/CD with GitHub Actions, Docker containerization, unit testing

### 2. **URL Shortener** 🔗
- **Tech Stack**: MERN Stack
- **Features**: Custom short links, analytics, rate limiting
- **Highlights**: Anonymous & authenticated users, Docker deployment

### 3. **CSECDPCOE Website** 🌐
- **Tech Stack**: React, JavaScript, TailwindCSS
- **Features**: Dynamic content, SEO optimization, mobile responsive
- **Highlights**: Official club website, event management

### 4. **Employee Management System** 👥
- **Tech Stack**: React, Local Storage
- **Features**: CRUD operations, search/filter, role-based access
- **Highlights**: Modular components, future backend integration ready

### 5. **File Sharing System** 📁
- **Tech Stack**: MERN Stack
- **Features**: Secure upload/download, tokenized sharing, GridFS
- **Highlights**: JWT authentication, role-based access control

### 6. **AI-Powered Resume Matching** 🤖
- **Tech Stack**: React, FastAPI, Python, LlamaIndex
- **Features**: PDF parsing, semantic similarity, confidence scoring
- **Highlights**: NLP integration, real-time feedback

### 7. **Plant Disease Detection** 🌱
- **Tech Stack**: React, FastAPI, Python, TensorFlow
- **Features**: Image classification, treatment suggestions
- **Highlights**: Hackathon winner 2024, CNN model integration

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern UI library
- **Three.js 0.179.1** - 3D graphics and animations
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **TailwindCSS 4.1.12** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Animation library
- **React Responsive** - Responsive design utilities

### Backend & Tools
- **Vite 7.1.2** - Fast build tool and dev server
- **EmailJS** - Email service integration
- **Cobe** - Interactive globe component
- **Maath** - Math utilities for animations

### Development
- **ESLint** - Code linting and formatting
- **TypeScript** - Type definitions for React
- **GitHub Actions** - CI/CD pipeline

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── logos/           # Technology logos
│   │   ├── projects/        # Project screenshots
│   │   └── socials/         # Social media icons
│   └── models/              # 3D models
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Astronaut.jsx    # 3D astronaut component
│   │   ├── Card.jsx         # Interactive card component
│   │   ├── Globe.jsx        # Interactive globe
│   │   └── ...
│   ├── sections/            # Page sections
│   │   ├── Hero.jsx         # Landing section
│   │   ├── About.jsx        # About section
│   │   ├── Projects.jsx     # Projects showcase
│   │   └── ...
│   ├── constants/           # Data and configuration
│   │   └── index.js         # Project data, social links, etc.
│   └── App.jsx              # Main application component
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Adding New Projects
Edit `src/constants/index.js` to add new projects:

```javascript
export const myProjects = [
  {
    id: 8,
    title: "Your New Project",
    description: "Project description...",
    subDescription: ["Feature 1", "Feature 2", "Feature 3"],
    href: "https://github.com/yourusername/project",
    image: "/assets/projects/your-project.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      // Add more tech stack tags
    ],
  },
  // ... existing projects
];
```

### Updating Personal Information
Modify the following in `src/constants/index.js`:
- `mySocials` - Social media links
- `experiences` - Work experience timeline
- `reviews` - Client testimonials

### Styling Customization
- Global styles: `src/index.css`
- Component styles: Use TailwindCSS classes
- 3D elements: Modify Three.js components in `src/components/`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Siddhesh Kabra**
- 📧 Email: [siddheshkabra@gmail.com](mailto:siddheshkabra@gmail.com)
- 💼 LinkedIn: [siddhesh-kabraa](https://www.linkedin.com/in/siddhesh-kabraa/)
- 📱 WhatsApp: [+91 9527116922](https://wa.me/919527116922)
- 📸 Instagram: [@siddhesh.kabra](https://www.instagram.com/siddhesh.kabra/)

## 🙏 Acknowledgments

- **3D Model**: Tenhun Falling Spaceman by [wallmasterr](https://sketchfab.com/wallmasterr)
- **Icons**: Various technology logos and social media icons
- **Inspiration**: Modern portfolio designs and Three.js community
- **Special Thanks**: To all clients and collaborators who provided feedback

---

⭐ **Star this repository** if you found it helpful!

**Built with ❤️ by Siddhesh Kabra**