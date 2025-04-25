import React from 'react';
import Image from 'next/image';

interface PhoneFrameProps {
  imageUrl: string;
  alt?: string;
  className?: string;
}

export default function PhoneFrame({ imageUrl, alt = "App screenshot", className = "" }: PhoneFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Phone Frame */}
      <div className="relative w-full h-full max-w-[320px] mx-auto">
        {/* Phone Body */}
        <div className="relative w-full pt-[200%] rounded-[2.5rem] bg-black border-4 border-gray-800 shadow-2xl overflow-hidden">
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-black z-10 flex justify-center">
            <div className="w-1/3 h-6 bg-black rounded-b-3xl"></div>
          </div>
          
          {/* Phone Screen - Actual Image */}
          <div className="absolute top-8 left-0 right-0 bottom-0 overflow-hidden bg-purple-900/10">
            <div className="relative w-full h-full">
              <Image
                src={imageUrl}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover h-full w-full"
                priority
                quality={100}
                unoptimized={true}
              />
            </div>
          </div>
          
          {/* Home Button/Bottom Notch */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div className="w-1/3 h-1 bg-gray-700 rounded-full"></div>
          </div>
          
          {/* Phone Buttons */}
          <div className="absolute top-16 -right-4 h-12 w-1 bg-gray-800 rounded-l-md"></div>
          <div className="absolute top-32 -right-4 h-12 w-1 bg-gray-800 rounded-l-md"></div>
          <div className="absolute top-20 -left-4 h-16 w-1 bg-gray-800 rounded-r-md"></div>
        </div>
      </div>
      
      {/* Reflection/Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-[2.5rem] z-0 opacity-40 blur-md"></div>
    </div>
  );
} 