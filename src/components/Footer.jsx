import { Link } from 'react-router-dom';
import { Flame, Github, Mail, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Flame className="h-8 w-8 text-forest-500" />
              <span className="text-2xl font-bold text-white">VanSuraksha</span>
            </div>
            <p className="text-gray-400 mb-4">
              Advanced forest fire risk prediction system leveraging machine learning
              to protect our forests and communities.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-forest-500 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-forest-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-forest-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@vansuraksha.com"
                className="hover:text-forest-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-forest-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-forest-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/risk-map" className="hover:text-forest-500 transition-colors">
                  Risk Map
                </Link>
              </li>
              <li>
                <Link to="/prediction" className="hover:text-forest-500 transition-colors">
                  Prediction
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="hover:text-forest-500 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-forest-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-forest-500 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest-500 transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VanSuraksha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
