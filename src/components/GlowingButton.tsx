import React from 'react';

interface GlowingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  glowIntensity?: 'low' | 'medium' | 'high';
}

export default function GlowingButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  glowIntensity = 'medium',
}: GlowingButtonProps) {
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Glow intensity
  const glowStyles = {
    low: 'shadow-[0_0_10px_rgba(147,51,234,0.3)]',
    medium: 'shadow-[0_0_15px_rgba(147,51,234,0.5)]',
    high: 'shadow-[0_0_20px_rgba(147,51,234,0.7)]',
  };

  // Variant styles
  const variantClasses = {
    primary: `bg-gradient-to-r from-purple-700 to-purple-500 text-white border border-purple-600 hover:from-purple-800 hover:to-purple-600 ${glowStyles[glowIntensity]}`,
    secondary: `bg-black text-white border border-purple-600 hover:bg-gray-900 ${glowStyles[glowIntensity]}`,
    outlined: `bg-transparent border border-purple-600 text-purple-500 dark:text-purple-400 hover:bg-purple-900/10 ${glowStyles[glowIntensity]}`,
  };

  return (
    <button
      onClick={onClick}
      className={`
        rounded-full font-medium transition-all duration-300 ease-in-out
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        hover:scale-105 active:scale-95
        relative overflow-hidden
        ${className}
      `}
    >
      {/* Inner glow effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/0 via-purple-600/30 to-purple-600/0 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
      
      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </button>
  );
} 