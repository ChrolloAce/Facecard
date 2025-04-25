import React from 'react';

interface AppStoreButtonProps {
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function AppStoreButton({ className = '', onClick, href = '#' }: AppStoreButtonProps) {
  return (
    <a 
      href={href}
      onClick={onClick}
      className={`inline-flex items-center bg-black text-white rounded-xl px-6 py-3 border border-gray-800 hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-purple-600/20 ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="mr-3">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M16.04 11.34c-.01-1.79.9-3.42 2.37-4.27-1.04-1.44-2.76-2.29-4.59-2.29-1.97-.21-3.84 1.11-4.83 1.11-.99 0-2.53-1.08-4.16-1.05-2.09.03-4.04 1.2-5.13 3.04-2.18 3.74-.56 9.24 1.58 12.27 1.03 1.5 2.27 3.17 3.87 3.11 1.58-.07 2.18-.99 4.08-.99 1.9 0 2.44.99 4.08.95 1.69-.02 2.75-1.51 3.79-3.01.83-1.17 1.48-2.47 1.93-3.84-2.16-.83-3.09-3.08-3-5.03z"/>
          <path d="M14.51 4.35c.92-1.12 1.3-2.54 1.06-3.95-1.27.15-2.41.83-3.2 1.9-.92 1.12-1.3 2.54-1.06 3.95 1.28-.16 2.42-.84 3.2-1.9z"/>
        </svg>
      </span>
      <div className="flex flex-col items-start">
        <span className="text-xs">Download on the</span>
        <span className="text-lg font-semibold -mt-1">App Store</span>
      </div>
    </a>
  );
} 