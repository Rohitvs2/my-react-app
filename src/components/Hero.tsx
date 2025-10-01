import React, { useEffect, useRef } from 'react';
import AnimatedButton from './AnimatedButton';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/2025 team photos/image.jfif';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;
      
      heroRef.current.style.background = `
        radial-gradient(circle at ${x}% ${y}%, 
        rgba(147, 51, 234, 0.2) 0%, 
        rgba(255, 255, 255, 0.1) 25%, 
        rgba(26, 0, 51, 0.8) 50%),
        linear-gradient(135deg, #1a0033 0%, #2d1b69 50%, #4c1d95 100%)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 px-4"
      style={{
        background: 'linear-gradient(135deg, #1a0033 0%, #2d1b69 50%, #4c1d95 100%)'
      }}
    >
      {/* Floating geometric shapes */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-12 h-12 sm:w-20 sm:h-20 border border-purple-400/30 rotate-45 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-10 h-10 sm:w-16 sm:h-16 border border-white/30 rotate-12 animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 sm:w-12 sm:h-12 border border-purple-300/30 rotate-45 animate-bounce-slow"></div>
      </div> */}

      <div className="text-center z-10 max-w-6xl mx-auto w-full">
        <div className="mb-8 animate-fade-in">
          <div className="flex justify-center mb-8">
            <img 
              src={heroImage}
              alt="Club Logo" 
              className="lg:w-60 h-20 sm:w-44 sm:h-24 md:w-32 md:h-32 filter brightness-110 hover:brightness-125 transition-all duration-700 hover:scale-110"
            />
          </div>
          <h1 className="text-3xl sm:text-6xl md:text-8xl lg:text-7xl font-black mb-6 leading-none">
            <span className="bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent animate-gradient-x">
              Cybersecurity Club ' GCET 
            </span>
          </h1>
          <div className="h-1 w-20 sm:w-32 bg-gradient-to-r from-purple-400 to-white mx-auto mb-8 animate-pulse"></div>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-delayed px-4">
          Home to the 
          <span className="text-transparent bg-gradient-to-r from-purple-400 to-white bg-clip-text font-bold"> biggest and oldest  </span>
          club of GCET
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 animate-fade-in-delayed-2 px-4">
          <a 
  href="https://forms.gle/cMPuT5UaJnJMyXnA6" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <AnimatedButton>
    Register For Cybercongress'2025
  </AnimatedButton>
</a>

          <Link to="/events">
                        <AnimatedButton>
                          Know more about Congress'25
                        </AnimatedButton>
                      </Link>
          {/* <button className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-purple-300 border-2 border-purple-400/50 rounded-lg backdrop-blur-sm hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300 group w-full sm:w-auto">
            <span className="flex items-center">
              Watch Demo
              <div className="ml-2 w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                →
              </div>
            </span>
          </button> */}
        </div>

        <div className="animate-bounce-slow">
          <ChevronDown size={24} className="sm:w-8 sm:h-8 text-gray-400 mx-auto" />
        </div>
      </div>

      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-shimmer"></div>
    </section>
  );
};

export default Hero;