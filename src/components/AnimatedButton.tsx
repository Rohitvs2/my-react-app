import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  onClick,
  className = '' 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white rounded-lg w-full sm:w-auto
        bg-gradient-to-r from-purple-600 to-white/90 hover:from-purple-500 hover:to-white
        transform hover:scale-105 transition-all duration-300
        shadow-lg hover:shadow-purple-500/50 group overflow-hidden
        ${className}
      `}
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-purple-400 via-white to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x">
        <div className="w-full h-full rounded-lg bg-gradient-to-r from-purple-600 to-white/90"></div>
      </div>
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center text-purple-900 font-bold text-center">
        {children}
      </span>

      {/* Glowing effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-white opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md"></div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
    </button>
  );
};

export default AnimatedButton;