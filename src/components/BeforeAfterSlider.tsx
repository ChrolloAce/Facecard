import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = 'Before image',
  afterAlt = 'After image',
  className = '',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle mouse/touch events
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    let clientX: number;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    setSliderPosition(percentage);
  };

  // Add/remove event listeners
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('touchend', handleGlobalMouseUp);
    
    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-xl group cursor-ew-resize h-full w-full ${className}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleMouseMove}
    >
      {/* Main container */}
      <div className="w-full h-full relative bg-black">
        {/* Before image - fixed in position */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={beforeImage}
            alt={beforeAlt}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>

        {/* After image with mask - fixed in same position as before image */}
        <div 
          className="absolute inset-0 overflow-hidden h-full"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 w-[100vw] h-full" style={{ left: 0 }}>
            <Image
              src={afterImage}
              alt={afterAlt}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              style={{ 
                objectPosition: "center",
                transform: "none"
              }}
            />
          </div>
        </div>

        {/* Full-height slider line */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.7)] z-20 h-full"
          style={{ left: `${sliderPosition}%` }}
        ></div>

        {/* Slider handle */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-[0_0_15px_rgba(147,51,234,0.7)] z-30 flex items-center justify-center border-2 border-purple-600 transition-transform duration-200 scale-90 group-hover:scale-100 slider-handle-pulse"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="flex items-center justify-between w-6">
            <div className="w-1 h-3 bg-purple-600 rounded-full"></div>
            <div className="w-1 h-3 bg-purple-600 rounded-full"></div>
          </div>
        </div>

        {/* Before/After labels */}
        <div className="absolute top-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full z-10">Before</div>
        <div className="absolute top-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full z-10">After</div>
      </div>
    </div>
  );
} 