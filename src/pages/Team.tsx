import React, { useEffect } from 'react';
import GlassmorphismCard from '../components/GlassmorphismCard';
import { Linkedin, Twitter, Mail, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import team images
import roh1 from '../assets/2025 team photos/roh1.jfif';
import rk from '../assets/2025 team photos/RK.jfif';
import dhanush from '../assets/2025 team photos/Dhanush.jpg';
import venkatesh from '../assets/2025 team photos/VENKATESH .jpg';
import shreyas from '../assets/2025 team photos/Shreyas 🙂.webp';
import gunjana from '../assets/2025 team photos/GUNJANA.jpg';
import vaishaviPratha from '../assets/2025 team photos/vaishnavi.jpg';
import vaishaviGaujala from '../assets/2025 team photos/Vaish.jpg';
import manogna from '../assets/2025 team photos/mn.jfif';
import vikrama from '../assets/2025 team photos/vikram.jpeg';
import harshith from '../assets/2025 team photos/HARSHITH.jpeg';
import pranathi from '../assets/2025 team photos/Pranathi.jpg';
import lasya from '../assets/2025 team photos/ls1.jfif';
import harshJha from '../assets/2025 team photos/harsh.jpeg';
import saathvik from '../assets/2025 team photos/Saathvik_.jpg';
import adil from '../assets/2025 team photos/ad3.jfif';

const Team: React.FC = () => {
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

    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

 const teamMembers = [
    { id: 1, name: 'Rohit Chandra', designation: 'President', image: roh1, bio: 'President of the Cyber Security Club GCET.', social: { linkedin: 'https://www.linkedin.com/in/rohit-chandra-05721626b/', instagram: 'https://www.instagram.com/rohitksskks?igsh=eWoxMjdsbWF5ZW1x' } },
    { id: 2, name: 'Ratna Keshav', designation: 'Vice President', image: rk, bio: 'Vice President of the Cyber Security Club GCET.', social: { instagram: 'https://www.instagram.com/rk__07_10?igsh=MThhZzZodnpjbDNqaA==' } },
    { id: 3, name: 'G.Dhanush Reddy', designation: 'Core Team', image: dhanush, bio: 'Main Core Member Of Cyber Security Club GCET.', social: { linkedin: 'https://www.linkedin.com/in/dhanush3105/', instagram: 'https://www.instagram.com/dhanush_reddy_31?igsh=MWI5YnFlYm0zbWhtaQ==' } },
    { id: 4, name: 'S.S.S.Venkatesh', designation: 'Core Team', image: venkatesh, bio: 'Main Core Member Of Cyber Security Club GCET.', social: { linkedin: 'https://www.linkedin.com/in/s-s-s-venkatesh-ab0859291/', instagram: 'https://www.instagram.com/venkysama333?utm_source=qr&igsh=dG13OWd6NnNucHkx' } },
    { id: 5, name: 'Shreyas Behara', designation: 'Core Team', image: shreyas, bio: 'Main Core Member Of Cyber Security Club GCET.', social: { linkedin: 'https://www.linkedin.com/in/shreyas-behara/', instagram: 'https://www.instagram.com/shreyasbehara_30?igsh=MWxjdTBjczU5dTFxZA==' } },
    { id: 6, name: 'Gunjana Kachuwah', designation: 'Core Team', image: gunjana, bio: 'Main Core Member Of Cyber Security Club GCET.', social: { linkedin: 'https://www.linkedin.com/in/gunjana-kachuwaya/', instagram: 'https://www.instagram.com/gunjana_kachuwaya?igsh=MTEzcjU0NHpkbHRuag==' } },
    { id: 7, name: 'Vaishavi Pratha', designation: 'Core Team', image: vaishaviPratha, bio: 'Main Core Member Of Cyber Security Club GCET.', social: { linkedin: 'https://www.linkedin.com/in/vaishnavipratha7/', instagram: 'https://www.instagram.com/vaishnavi.pratha?igsh=cjZ6OGg4Ymw4cG5x' } },
    { id: 8, name: 'Vaishavi Gaujala', designation: 'Core Team', image: vaishaviGaujala, bio: 'Main Core Member Of Cyber Security Club GCET.', social: { linkedin: 'https://www.linkedin.com/in/vaishnavi-gajula-0b369b303/', instagram: 'https://www.instagram.com/_vaishnavigajula_?igsh=MmRxN3RleGF0eWQy' } },
    { id: 9, name: 'K.Manogna', designation: 'Core Team', image: manogna, bio: 'Main Core Member Of Cyber Security Club GCET.', social: { linkedin: 'https://www.linkedin.com/in/manogna-kundam-9a0a63376/', instagram: 'https://www.instagram.com/manognareddyy?igsh=MWZ3eXhiaGgyMHU3YQ==' } },
    { id: 10, name: 'Vikrama Aditya', designation: 'Core Team', image: vikrama, bio: 'Main Core Member Of Cyber Security Club GCET.', social: { instagram: 'https://www.instagram.com/vikramaditya.atragada?igsh=OXk1eGxkem40d2oz' } },
    { id: 11, name: 'K.Harshith Subramanyam', designation: 'Sub-Core Team', image: harshith, bio: 'Sub-Core Member Of Cyber Security Club GCET.', social: { linkedin: 'https://www.linkedin.com/in/kakumanu-harshith-subrahmanyam-56455a255/', instagram: 'https://www.instagram.com/suubbbuu?igsh=MXh5M2VpaGJpbmF5bA==' } },
    { id: 12, name: 'V.Padmavathi Pranathi', designation: 'Sub-Core Team', image: pranathi, bio: 'Sub-Core Member Of Cyber Security Club GCET.', social: { linkedin: 'https://www.linkedin.com/in/v-padmavathi-pranathi-5165a8359/', instagram: 'https://www.instagram.com/_padmavathipranathi?igsh=Y25hbjkzZGNkdDF5' } },
    { id: 13, name: 'Sai Lasya', designation: 'Sub-Core Team', image: lasya, bio: 'Sub-Core Member Of Cyber Security Club GCET.', social: { linkedin: 'https://www.linkedin.com/in/lasya-k-376740318/', instagram: 'https://www.instagram.com/lasya_jpg?igsh=aXQzZ3Q4enZua2Ri' } },
    { id: 14, name: 'Harsh Jha', designation: 'Sub-Core Team', image: harshJha, bio: 'Sub-Core Member Of Cyber Security Club GCET.', social: { linkedin: 'https://www.linkedin.com/in/harsh-jha-883aa5327/', instagram: 'https://www.instagram.com/markjhaash?igsh=MWhmangyemJscDVwaQ==' } },
    { id: 15, name: 'Saathvik', designation: 'Sub-Core Team', image: saathvik, bio: 'Sub-Core Member Of Cyber Security Club GCET.', social: { linkedin: 'https://www.linkedin.com/in/saathvik-vinnakota-007838363/', instagram: 'https://www.instagram.com/saathvix_fr?igsh=MWg1dWZjaW5teGl5bw==' } },
    { id: 16, name: 'Mohammed Adil Ahmed', designation: 'Sub-Core Team', image: adil, bio: 'Sub-Core Member Of Cyber Security Club GCET.', social: { linkedin: 'https://www.linkedin.com/in/mohammed-adil-ahmed-shareef-445586323/', instagram: 'https://www.instagram.com/md_adil_ahmed_shareef?igsh=aW1tcndpcm1qc3Rj' } }
  ];

  // Group members by designation
  const president = teamMembers.filter(m => m.designation === 'President');
  const vicePresident = teamMembers.filter(m => m.designation === 'Vice President');
  const coreTeam = teamMembers.filter(m => m.designation === 'Core Team');
  const subCoreTeam = teamMembers.filter(m => m.designation === 'Sub-Core Team');

  return (
    <div className="relative pt-20 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 fade-in-element opacity-0 transform translate-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-300 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <div className="h-1.5 w-24 sm:w-40 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 mx-auto mb-8 sm:mb-10 rounded-full"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-4 font-light">
            Meet the minds driving innovation, collaboration, and resilience within the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-medium">Cybersecurity Club</span> of GCET.
          </p>
        </div>

        {/* President & Vice President side by side */}
        <div className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 justify-center">
            {[...president, ...vicePresident].map((member, index) => (
              <div 
                key={member.id} 
                className="fade-in-element opacity-0 transform translate-y-8"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <GlassmorphismCard className="overflow-hidden h-full group hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                  {/* Member Image */}
                  <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden rounded-t-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center rounded-t-2xl transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Social Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 pointer-events-none">
                      <div className="flex space-x-3 sm:space-x-4 pointer-events-auto">
                        {member.social.linkedin && (
                          <a 
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-purple-500/50 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                          >
                            <Linkedin size={18} className="sm:w-5 sm:h-5 text-white" />
                          </a>
                        )}
                        {member.social.instagram && (
                          <a 
                            href={member.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-pink-500/50 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2" />
                              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                              <circle cx="17" cy="7" r="1.5" fill="currentColor" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-6 sm:p-8 relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="flex items-center mb-4">
                      <p className="text-purple-300 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                        {member.designation}
                      </p>
                      <div className="flex-grow h-px bg-gradient-to-r from-purple-400/50 to-transparent ml-4"></div>
                    </div>
                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                      {member.bio}
                    </p>
                    <div className="mt-4 sm:mt-6">
                      <div className="h-0.5 w-16 sm:w-20 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
                </GlassmorphismCard>
              </div>
            ))}
          </div>
        </div>

        {/* Core Team */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-purple-300 bg-clip-text text-transparent inline-block">
              Core Team
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreTeam.map((member, index) => (
              <div 
                key={member.id} 
                className="fade-in-element opacity-0 transform translate-y-8"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <GlassmorphismCard className="overflow-hidden h-full group hover:scale-105 transition-all duration-500">
                  {/* Member Image */}
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-t-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center rounded-t-2xl transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Social Links Overlay */}
                    {/* Social Links Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 pointer-events-none">
                      <div className="flex space-x-3 sm:space-x-4 pointer-events-auto">
                        {member.social.linkedin && (
                          <a 
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-purple-500/50 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                          >
                            <Linkedin size={18} className="sm:w-5 sm:h-5 text-white" />
                          </a>
                        )}
                        {member.social.instagram && (
                          <a 
                            href={member.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-pink-500/50 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2" />
                              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                              <circle cx="17" cy="7" r="1.5" fill="currentColor" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-purple-300 font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">
                      {member.designation}
                    </p>
                    <p className="text-gray-200 leading-relaxed text-xs sm:text-sm">
                      {member.bio}
                    </p>
                    
                    {/* Decorative Element */}
                    <div className="mt-3 sm:mt-4 h-1 w-12 sm:w-16 bg-gradient-to-r from-purple-400 to-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-white/5 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
                </GlassmorphismCard>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-Core Team */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-purple-300 bg-clip-text text-transparent inline-block">
              Sub-Core Team
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {subCoreTeam.map((member, index) => (
              <div 
                key={member.id} 
                className="fade-in-element opacity-0 transform translate-y-8"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <GlassmorphismCard className="overflow-hidden h-full group hover:scale-105 transition-all duration-500">
                  {/* Member Image */}
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-t-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center rounded-t-2xl transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Social Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 pointer-events-none">
                      <div className="flex space-x-3 sm:space-x-4 pointer-events-auto">
                        {member.social.linkedin && (
                          <a 
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-purple-500/50 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                          >
                            <Linkedin size={18} className="sm:w-5 sm:h-5 text-white" />
                          </a>
                        )}
                        {member.social.instagram && (
                          <a 
                            href={member.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-pink-500/50 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2" />
                              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                              <circle cx="17" cy="7" r="1.5" fill="currentColor" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-purple-300 font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">
                      {member.designation}
                    </p>
                    <p className="text-gray-200 leading-relaxed text-xs sm:text-sm">
                      {member.bio}
                    </p>
                    
                    {/* Decorative Element */}
                    <div className="mt-3 sm:mt-4 h-1 w-12 sm:w-16 bg-gradient-to-r from-purple-400 to-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-white/5 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
                </GlassmorphismCard>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
    
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

export default Team;