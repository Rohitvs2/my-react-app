import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import GlassmorphismCard from '../components/GlassmorphismCard';
import AnimatedButton from '../components/AnimatedButton';
import { Sparkles, Zap, Rocket } from 'lucide-react';

const Home: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: 'Cyber Sundays',
      description: 'Every week, we deep-dive into trending cybersecurity topics — from ethical hacking to OSINT to malware analysis. Learn, collaborate, and grow together.',
    },
    {
      icon: Zap,
      title: 'Shastra',
      description: 'An exclusive event designed for freshers and juniors! Get a practical introduction to cybersecurity through fun, interactive sessions, and discover how to kickstart your journey.',
    },
    {
      icon: Rocket,
      title: 'Chakravyuh',
      description: 'Our flagship inter-college Capture the Flag (CTF) competition. Battle it out with the brightest minds, solve real-world challenges, and prove your skills on the leaderboard.',
    },
  ];

  return (
    <div className="relative">
      <Hero />
      
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent animate-pulse">
              Unlock the World of Cybersecurity
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
              From weekly knowledge sessions to inter-college hackathons, we create hands-on experiences that transform curious minds into skilled professionals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16" ref={featuresRef}>
            {features.map((feature, index) => (
              <div key={index} className="feature-card opacity-0 transform translate-y-8">
                <GlassmorphismCard>
                  <div className="text-center p-6 sm:p-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-white rounded-full mb-4 sm:mb-6 transform hover:scale-110 transition-transform duration-300">
                      <feature.icon size={24} className="sm:w-8 sm:h-8 text-purple-900" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{feature.description}</p>
                  </div>
                </GlassmorphismCard>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/events">
              <AnimatedButton>
                Explore Events
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-transparent via-purple-950/50 to-indigo-950 text-white pt-16 pb-6 px-4 overflow-hidden border-t border-purple-500/20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
          <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Contact Us */}
            <div className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group">
              <h3 className="font-bold text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-purple-300">
                Contact Us
              </h3>
              <div className="text-gray-300 text-sm space-y-3">
                <div className="flex items-start gap-3 group-hover:text-gray-200 transition-colors">
                  <span className="text-purple-400 text-lg">📍</span>
                  <span className="leading-relaxed">
                    Geethanjali College Of Engineering and Technology<br />
                    Cheeryal, Hyderabad<br />
                    Telangana - 501301
                  </span>
                </div>
                <div className="flex items-center gap-3 hover:text-purple-300 transition-colors cursor-pointer">
                  <span className="text-purple-400 text-lg">📞</span>
                  <span>+91 7075946768</span>
                </div>
                <div className="flex items-center gap-3 hover:text-purple-300 transition-colors cursor-pointer">
                  <span className="text-purple-400 text-lg">🌐</span>
                  <span>www.gcet.edu.in</span>
                </div>
              </div>
            </div>

            {/* Event Coordinators */}
            <div className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group">
              <h3 className="font-bold text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-purple-300">
                 Co-Ordinators
              </h3>
              <div className="text-gray-300 text-sm space-y-4">
                <div className="group-hover:text-gray-200 transition-colors">
                  <div className="font-semibold text-purple-300 mb-1">CybeSecurity Club President</div>
                  <div className="leading-relaxed">
                    Rohit Chandra<br />
                    <span className="text-gray-400">+91 7075946768</span>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
                <div className="group-hover:text-gray-200 transition-colors">
                  <div className="font-semibold text-purple-300 mb-1">CyberSecurity Club Vice President</div>
                  <div className="leading-relaxed">
                    Ratna Keshav<br />
                    <span className="text-gray-400">+91 7013821872</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <h3 className="font-bold text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-purple-300">
                Quick Links
              </h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>
                  <a 
                    href="https://www.instagram.com/cybersecurity_club_gcet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-purple-500/20 hover:text-white transition-all duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                    Instagram
                  </a>
                </li>
                <li>
                  <Link 
                    to="/events"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-purple-500/20 hover:text-white transition-all duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                    Events
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/team"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-purple-500/20 hover:text-white transition-all duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:w-2 group_hover:h-2 transition-all"></span>
                    Team
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://forms.gle/cMPuT5UaJnJMyXnA6" 
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-purple-500/20 hover:text-white transition-all duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                    Register Now
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-purple-500/20 pt-6">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © 2025 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 font-semibold">CYBERSECURITY CLUB </span>. 
              </p>
              <p className="text-sm ">Designed by Rohit Chandra</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;