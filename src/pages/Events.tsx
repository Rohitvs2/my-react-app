import React, { useEffect, useState } from "react";
import GlassmorphismCard from "../components/GlassmorphismCard";
import AnimatedButton from "../components/AnimatedButton";
import { Calendar, Clock, Sword, Shield } from "lucide-react";
import { Link } from 'react-router-dom';


const Events: React.FC = () => {
  const targetDate = new Date("October 30, 2025 09:30:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-purple-900 via-black to-purple-900 opacity-90"></div>
      {/* Top padding to avoid navbar overlap */}
      <div className="pt-24 px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
            ⚔ CyberCongress'2025 ⚔
          </h1>
          <p className="text-lg mb-8 text-gray-200 tracking-wide">Time Until the Event Begins</p>

          {/* Countdown with glass effect */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex gap-4 bg-black/30 backdrop-blur-md rounded-xl px-6 py-4 border border-purple-500/30 shadow-lg">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  className="flex flex-col items-center justify-center px-2"
                >
                  <p className="text-3xl font-bold text-white drop-shadow">{value}</p>
                  <span className="text-xs sm:text-sm capitalize text-purple-300 tracking-wide">{unit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Day 1 */}
          <GlassmorphismCard className="p-6 flex flex-col space-y-3 border border-purple-500/20 shadow-lg hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center gap-3">
              <Shield className="text-purple-400 animate-bounce" size={28} />
              <h2 className="text-xl font-bold text-purple-300 drop-shadow">
                Day 1: The Training Grounds
              </h2>
            </div>
            <p className="text-gray-200">
              Overview & Practical Applications of Digital Forensics
            </p>
            <p className="text-sm text-purple-400 flex items-center gap-2">
              <Calendar size={16} /> Oct 30 | <Clock size={16} /> 9:30 AM – 3:30 PM
            </p>
          </GlassmorphismCard>

          {/* Day 2 */}
          <GlassmorphismCard className="p-6 flex flex-col space-y-3 border border-purple-500/20 shadow-lg hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center gap-3">
              <Sword className="text-purple-400 animate-bounce" size={28} />
              <h2 className="text-xl font-bold text-purple-300 drop-shadow">
                Day 2: The First Battle
              </h2>
            </div>
            <p className="text-gray-200">CyberCongress Hackathon Kickoff (24 Hours)</p>
            <p className="text-sm text-purple-400 flex items-center gap-2">
              <Calendar size={16} /> Oct 31 | <Clock size={16} /> 9:30 AM onwards
            </p>
          </GlassmorphismCard>

          {/* Day 3 */}
          <GlassmorphismCard className="p-6 flex flex-col space-y-3 border border-purple-500/20 shadow-lg hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center gap-3">
              <Sword className="text-purple-400 animate-bounce" size={28} />
              <h2 className="text-xl font-bold text-purple-300 drop-shadow">
                Day 3: The Final Showdown
              </h2>
            </div>
            <p className="text-gray-200">Hackathon Continues + Closing Ceremony</p>
            <p className="text-sm text-purple-400 flex items-center gap-2">
              <Calendar size={16} /> Nov 1 | <Clock size={16} /> 9:30 AM – 3:30 PM
            </p>
          </GlassmorphismCard>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a 
  href="https://forms.gle/cMPuT5UaJnJMyXnA6" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <AnimatedButton>
    Register For Cybercongress'2025
  </AnimatedButton>
</a>

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
    </div>
  );
};

export default Events;
