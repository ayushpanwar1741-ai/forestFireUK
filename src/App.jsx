import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { RiskMapPage } from './pages/RiskMapPage.jsx';
import { PredictionPage } from './pages/PredictionPage.jsx';
import { DashboardPage } from './pages/DashboardPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';

function App() {
  return (
    <Router basename="/forestFireUK">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/risk-map" element={<RiskMapPage />} />
            <Route path="/prediction" element={<PredictionPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
