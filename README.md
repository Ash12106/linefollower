# Circuit Drift'26 - Line Follower Robotics Competition

The **Circuit Drift'26 Landing Page** is a high-fidelity, interactive web application acting as the central hub for the premier line-follower robotics competition hosted by the **ForgeNexus Robotics Club** at **Vidhyavardhaka College of Engineering (VVCE)**.

## 🚀 Key Features

- **Competition Details**: Essential rules, track domains, and prize pool breakdowns (₹20,000 / ₹15,000 / ₹10,000).
- **Immersive Visuals**: High-contrast, hardware-accelerated animations using Framer Motion and an interactive 3D gallery to showcase technical achievements.
- **Modern UI Stack**: Built with **React 19**, **Tailwind CSS v4**, and **Framer Motion** for fluid animations and a premium glassmorphic feel.
- **Responsive Registration Portal**: Fully optimized mobile-responsive sections with direct calls to action for easy team registrations and support access.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Interaction**: [@use-gesture/react](https://use-gesture.netlify.app/) & [OGL](https://github.com/oogljs/ogl)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🏁 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18.x or later recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ash12106/linefollower.git
   cd linefollower
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

## 📁 Customizing Assets

### Adding Your Images
To replace the placeholder images in the Innovation Gallery or Student Core sections:

- **Innovation Gallery**: Place your `.jpg` or `.png` images in `/public/gallery/` and name them `gallery_1.jpg`, `gallery_2.jpg`, etc.
- **Rulebook**: Replace the dummy file by placing `rulebook.pdf` at the root of the `/public` directory.

---
Created by [Ash12106](https://github.com/Ash12106)
