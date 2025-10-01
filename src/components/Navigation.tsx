import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Users, Calendar, UserCheck, Menu, X } from 'lucide-react';
import logo from '../assets/2025 team photos/image.jfif';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Zap },
    { path: '/about', label: 'About', icon: Users },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/team', label: 'Team', icon: UserCheck },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-purple-900/20 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={logo}
              alt="Cybersecurity Club Logo" 
              className="lg:w-14 h-8 sm:w-10 sm:h-10 filter brightness-110 hover:brightness-125 transition-all duration-300 hover:scale-110"
            />
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              Cybersecurity Club
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group ${
                  location.pathname === path
                    ? 'bg-gradient-to-r from-purple-500/20 to-white/10 text-purple-300'
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon size={18} />
                <span className="font-medium">{label}</span>
                {location.pathname === path && (
                  <div className="absolute inset-0 border border-purple-400/30 rounded-lg animate-pulse"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-purple-500/20">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    location.pathname === path
                      ? 'bg-gradient-to-r from-purple-500/20 to-white/10 text-purple-300'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon size={20} />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;