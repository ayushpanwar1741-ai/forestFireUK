# VanSuraksha - Quick Start Guide

## ✅ Project Setup Complete!

Your VanSuraksha Forest Fire Risk Prediction System frontend is now ready to use.

## 📂 What's Been Created

### **Project Structure**
```
vansuraksha/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── input.jsx
│   │   │   ├── textarea.jsx
│   │   │   └── badge.jsx
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Footer.jsx      # Footer
│   │   ├── Sidebar.jsx     # Sidebar component
│   │   └── RiskBadge.jsx   # Risk level indicator
│   ├── pages/              # Page components
│   │   ├── HomePage.jsx    # Landing page with hero & features
│   │   ├── AboutPage.jsx   # Project documentation
│   │   ├── RiskMapPage.jsx # Interactive Leaflet map
│   │   ├── PredictionPage.jsx # ML prediction interface
│   │   ├── DashboardPage.jsx  # Statistics dashboard
│   │   └── ContactPage.jsx    # Contact form
│   ├── data/
│   │   └── mockData.js     # Sample risk data
│   ├── lib/
│   │   └── utils.js        # Utility functions
│   ├── types/
│   │   └── index.js        # Type definitions (JSDoc)
│   ├── App.jsx             # Main app with routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Tailwind styles
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── package.json
├── README.md               # Complete documentation
└── API_INTEGRATION.md      # Backend integration guide
```

### **Pages Created**

1. **Home Page** (`/`)
   - Hero section with VanSuraksha branding
   - 6 feature cards showcasing capabilities
   - Call-to-action buttons
   - Framer Motion animations

2. **About Page** (`/about`)
   - Complete project documentation
   - Sections: Introduction, Background, Objectives, Methodology, Technologies, Future Scope
   - Professional card-based layout

3. **Risk Map** (`/risk-map`)
   - Interactive Leaflet map centered on India
   - 6 sample regions with risk indicators
   - Clickable markers with popup details
   - Sidebar with risk legend and region list
   - Color-coded risk zones (Low/Moderate/High/Severe)

4. **Prediction Page** (`/prediction`)
   - Dual input mode: CSV data or satellite images
   - Form inputs for temperature, humidity, wind speed, rainfall, vegetation
   - Real-time prediction display
   - Risk level visualization with progress bars
   - Actionable recommendations

5. **Dashboard** (`/dashboard`)
   - 4 statistics cards (Total Predictions, High Risk Zones, etc.)
   - Recent predictions list
   - Risk distribution chart
   - Regional insights table
   - Quick insights panel

6. **Contact** (`/contact`)
   - Contact form with validation
   - Contact information cards
   - Office hours
   - Emergency hotline
   - FAQ section

### **Features Implemented**

✅ Fully responsive design (mobile, tablet, desktop)
✅ Modern UI with Tailwind CSS
✅ shadcn/ui inspired components
✅ React Router for navigation
✅ Framer Motion animations
✅ Lucide React icons
✅ Interactive Leaflet maps
✅ Nature-themed color palette
✅ Mock data for demonstration
✅ Ready for API integration

## 🚀 How to Run

### **1. Navigate to Project Directory**
```bash
cd "c:\Users\HP\OneDrive\Desktop\Fire\vansuraksha"
```

### **2. Install Dependencies** (if not already done)
```bash
npm install
```

### **3. Start Development Server**
```bash
npm run dev
```

### **4. Open in Browser**
Navigate to: `http://localhost:5173`

## 🎨 Design System

### **Colors**
- **Primary (Forest Green)**: `#22c55e`
- **Risk Levels**:
  - Low: `#22c55e` (Green)
  - Moderate: `#eab308` (Yellow)
  - High: `#f97316` (Orange)
  - Severe: `#ef4444` (Red)

### **Typography**
- System fonts for performance
- Clear hierarchy with Tailwind classes
- Responsive font sizes

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔌 Next Steps: Backend Integration

See `API_INTEGRATION.md` for detailed instructions on connecting to your ML backend.

### **Quick Overview**

1. Create `src/services/api.js`
2. Set up environment variables in `.env`
3. Replace mock data with API calls
4. Test endpoints
5. Deploy

### **Required API Endpoints**

- `POST /api/predict` - Fire risk prediction
- `GET /api/risk-data` - All regions data
- `GET /api/dashboard/stats` - Dashboard statistics
- `POST /api/predict/image` - Image-based prediction (optional)

## 🛠️ Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Production Deployment

### **Build**
```bash
npm run build
```

### **Output**
The built files will be in the `dist/` directory.

### **Deployment Options**

1. **Vercel** (Recommended)
   - Connect GitHub repository
   - Auto-deploy on push
   - Zero configuration

2. **Netlify**
   - Drag and drop `dist/` folder
   - Or connect via GitHub

3. **Traditional Hosting**
   - Upload `dist/` contents to server
   - Configure for SPA routing

## 🧪 Testing the Application

### **Manual Testing Checklist**

- [ ] Navigate through all pages
- [ ] Test responsive design on different screen sizes
- [ ] Click on map markers
- [ ] Fill out prediction form
- [ ] Submit contact form
- [ ] Test sidebar toggle on mobile

### **Sample Data Available**

- 6 mock regions with varying risk levels
- Sample dashboard statistics
- Realistic environmental parameters

## 🐛 Troubleshooting

### **Issue: Port 5173 already in use**
```bash
# Kill the process or use a different port
npm run dev -- --port 3000
```

### **Issue: Modules not found**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### **Issue: Tailwind styles not loading**
```bash
# Clear cache and restart
rm -rf node_modules/.vite
npm run dev
```

## 📚 Documentation

- `README.md` - Complete project documentation
- `API_INTEGRATION.md` - Backend integration guide
- Inline code comments for complex logic
- JSDoc type definitions in `src/types/index.js`

## 🌟 Key Technologies

- **React 18** - UI library
- **Vite 7** - Build tool
- **Tailwind CSS 4** - Styling
- **React Router 7** - Routing
- **Framer Motion** - Animations
- **Leaflet** - Maps
- **Lucide React** - Icons

## 💡 Tips

1. **Development**
   - Use `npm run dev` for hot reload
   - Check browser console for errors
   - Use React DevTools for debugging

2. **Customization**
   - Modify colors in `tailwind.config.js`
   - Update mock data in `src/data/mockData.js`
   - Add new routes in `src/App.jsx`

3. **Performance**
   - Images are optimized
   - Code is split by route
   - Tailwind purges unused CSS

## ✉️ Support

For questions or issues:
- Check `README.md` for detailed documentation
- Review `API_INTEGRATION.md` for backend setup
- Contact: contact@vansuraksha.com

## 🎉 You're All Set!

Your VanSuraksha frontend is ready to use. Start the development server and begin exploring!

```bash
npm run dev
```

Happy Coding! 🌲🔥
