import React, { useEffect } from 'react';
import GlassmorphismCard from '../components/GlassmorphismCard';
import { Target, Users, Lightbulb, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  useEffect(() => {
    // Fade-in effect for sections
    const elements = document.querySelectorAll(".fade-in-element");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, creating experiences that didn\'t exist before.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Our platform is built around bringing people together in meaningful, transformative ways.',
    },
    {
      icon: Lightbulb,
      title: 'Creative Excellence',
      description: 'Every event is crafted with meticulous attention to detail and creative vision.',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'We maintain the highest standards in technology, design, and user experience.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900 text-white overflow-x-hidden">
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 fade-in-element opacity-0 transform translate-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent">
            About Cybersecurity Club
          </h1>
          <div className="h-1 w-20 sm:w-32 bg-gradient-to-r from-purple-400 to-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-4">
            We are a community of innovators, defenders, and ethical hackers
            dedicated to learning, sharing, and leading in the world of
            cybersecurity. Our mission is to build digital resilience and prepare
            students for the challenges of tomorrow's cyber battlefield. ⚔️
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {[
            {
              title: "Learn & Explore",
              desc: "From basics of ethical hacking to advanced penetration testing, we empower students with real-world cybersecurity skills.",
            },
            {
              title: "Compete & Grow",
              desc: "Through hackathons, CTFs, and workshops, we challenge members to think like attackers and defend like professionals.",
            },
            {
              title: "Collaborate & Lead",
              desc: "We connect with industry leaders, host events, and guide students toward careers in cybersecurity and beyond.",
            },
          ].map((item, idx) => (
            <GlassmorphismCard key={idx} className="fade-in-element opacity-0 translate-y-10 p-8 rounded-2xl border border-purple-400/20 hover:border-purple-400/40 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20">
              <h3 className="text-xl font-bold text-purple-300 mb-4">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </GlassmorphismCard>
          ))}
        </div>

        {/* Activities Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent fade-in-element opacity-0 transform translate-y-8">
            What We Do 🔐
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Workshops & Training",
                desc: "Hands-on sessions covering OSINT, Web Security, Networking, and Cloud Security tools.",
              },
              {
                title: "CTFs & Hackathons",
                desc: "We organize and participate in Capture the Flag competitions and college-wide hackathons.",
              },
              {
                title: "Industry Collaboration",
                desc: "Partnering with companies to host talks, solve real-world problems, and create opportunities.",
              },
              {
                title: "Community Building",
                desc: "We mentor juniors, share resources, and create a thriving space for future cyber defenders.",
              },
            ].map((item, idx) => (
              <GlassmorphismCard key={idx} className="fade-in-element opacity-0 translate-y-10 p-6 rounded-xl border border-purple-400/20 hover:border-purple-400/40 transition-all duration-500">
                <h3 className="text-xl font-semibold mb-3 text-purple-300">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </GlassmorphismCard>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent fade-in-element opacity-0 transform translate-y-8">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <GlassmorphismCard key={index} className="fade-in-element opacity-0 translate-y-8 p-4 sm:p-6 text-center h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-white rounded-full mb-3 sm:mb-4 transform hover:scale-110 transition-transform duration-300">
                  <value.icon size={20} className="sm:w-6 sm:h-6 text-purple-900" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{value.title}</h3>
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">{value.description}</p>
              </GlassmorphismCard>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="fade-in-element opacity-0 transform translate-y-8">
          <GlassmorphismCard className="p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-300 mb-1 sm:mb-2">18</div>
                <div className="text-gray-200 text-sm sm:text-base">Events Hosted</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">1350</div>
                <div className="text-gray-200 text-sm sm:text-base">Attendees</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">140</div>
                <div className="text-gray-200 text-sm sm:text-base">Internships </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-200 mb-1 sm:mb-2">2021</div>
                <div className="text-gray-200 text-sm sm:text-base">Active since</div>
              </div>
            </div>
          </GlassmorphismCard>
        </div>
      </div>

      {/* Trademark */}
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

export default About;