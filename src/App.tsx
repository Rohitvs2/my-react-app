import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Team from './pages/Team';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 flex items-center justify-center z-50 px-4">
        <div className="relative">
          <img 
            src="src/assets/image.jfif" 
            alt="Loading" 
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 filter brightness-110 animate-pulse"
          />
          <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 sm:border-3 md:border-4 border-transparent border-t-purple-400 border-r-white rounded-full animate-rotate"></div>
          <div className="absolute inset-1 sm:inset-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 sm:border-3 md:border-4 border-transparent border-b-purple-300 border-l-white rounded-full animate-rotate" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white overflow-x-hidden relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation />
        <main className="transition-all duration-700 ease-out">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;