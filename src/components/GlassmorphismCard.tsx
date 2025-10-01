import React from 'react';

interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl
      shadow-2xl hover:shadow-purple-500/20 transition-all duration-500
      hover:bg-white/15 hover:border-purple-400/30 group
      ${className}
    `}>
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-purple-500/50 via-white/50 to-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-purple-900/80 to-purple-800/80 backdrop-blur-xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-white/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
    </div>
  );
};

export default GlassmorphismCard;