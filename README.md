# VanSuraksha - Forest Fire Risk Prediction System

<div align="center">
  <h3>🌲 Advanced ML-Powered Forest Fire Prediction 🔥</h3>
  <p>A modern, responsive web application for predicting and monitoring forest fire risks</p>
</div>

## 🎯 Overview

VanSuraksha is a comprehensive forest fire risk prediction system that leverages machine learning to analyze environmental parameters and predict fire risks across different regions. Built with React, Tailwind CSS, and modern web technologies, it provides an intuitive interface for forest management teams and researchers.

## ✨ Features

- **🏠 Interactive Home Page**: Hero section with project overview and call-to-action buttons
- **📖 Comprehensive About Page**: Detailed project documentation including methodology, objectives, and future scope
- **🗺️ Risk Map**: Interactive Leaflet-based map showing real-time risk levels across regions
- **🔮 Prediction System**: Upload satellite images or input environmental data for fire risk prediction
- **📊 Dashboard**: Comprehensive statistics and insights about monitored regions
- **📞 Contact Page**: Easy communication with the team and FAQ section
- **🎨 Modern UI**: Clean, professional design with nature-themed color palette
- **📱 Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **⚡ Smooth Animations**: Framer Motion powered transitions and interactions

## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern UI library
- **Vite**: Lightning-fast build tool
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icon library

### Mapping
- **Leaflet**: Interactive maps
- **React Leaflet**: React components for Leaflet

### UI Components
- **shadcn/ui inspired components**: Card, Button, Input, Badge, Textarea
- **Custom components**: Navbar, Footer, Sidebar, RiskBadge

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Navigate to the project directory**
   ```bash
   cd vansuraksha
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
vansuraksha/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base UI components (Button, Card, Input, etc.)
│   │   ├── Navbar.jsx    # Navigation bar
│   │   ├── Footer.jsx    # Footer component
│   │   ├── Sidebar.jsx   # Sidebar component
│   │   └── RiskBadge.jsx # Risk level badge
│   ├── pages/            # Page components
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── RiskMapPage.jsx
│   │   ├── PredictionPage.jsx
│   │   ├── DashboardPage.jsx
│   │   └── ContactPage.jsx
│   ├── data/             # Mock data and constants
│   │   └── mockData.js
│   ├── lib/              # Utility functions
│   │   └── utils.js
│   ├── types/            # Type definitions
│   │   └── index.js
│   ├── App.jsx           # Main app component with routing
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles with Tailwind
├── package.json
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 Pages Overview

### 1. Home Page (`/`)
- Hero section with project branding
- Features showcase
- Call-to-action buttons

### 2. About Page (`/about`)
Complete project documentation including:
- Introduction
- Background & Problem Domain
- Motivation & Objectives
- Significance
- Background Study
- Proposed Methodology
- Expected Outcomes
- Tools & Technologies
- Applications & Future Scope

### 3. Risk Map (`/risk-map`)
- Interactive Leaflet map
- Region markers with risk indicators
- Sidebar with risk legend
- Real-time risk distribution

### 4. Prediction Page (`/prediction`)
- CSV data entry or satellite image upload
- Real-time prediction results
- Risk level visualization
- Actionable recommendations

### 5. Dashboard (`/dashboard`)
- Key statistics cards
- Recent predictions list
- Risk distribution charts
- Regional insights table

### 6. Contact Page (`/contact`)
- Contact form
- Contact information
- FAQ section

## 🔌 Backend API Integration

See [API_INTEGRATION.md](./API_INTEGRATION.md) for detailed instructions.

## 🌐 Deployment

```bash
npm run build
```

Deploy the `dist/` directory to Vercel, Netlify, or any static hosting service.

---

<div align="center">
  <p>Made with ❤️ for forest conservation</p>
  <p>🌲 Protecting forests, one prediction at a time 🔥</p>
</div>
