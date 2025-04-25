import { useEffect, useRef, useState } from 'react';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out' | 'pulse' | 'bounce';

interface AnimatedElementProps {
  children: React.ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export default function AnimatedElement({
  children,
  type = 'fade-up',
  delay = 0,
  duration = 400,
  threshold = 0.1,
  className = '',
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      { threshold }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  // Animation styles based on type
  const getAnimationStyles = () => {
    if (!isVisible) {
      // Initial styles
      switch (type) {
        case 'fade-up':
          return { opacity: 0, transform: 'translateY(30px)' };
        case 'fade-down':
          return { opacity: 0, transform: 'translateY(-30px)' };
        case 'fade-left':
          return { opacity: 0, transform: 'translateX(-30px)' };
        case 'fade-right':
          return { opacity: 0, transform: 'translateX(30px)' };
        case 'zoom-in':
          return { opacity: 0, transform: 'scale(0.9)' };
        case 'zoom-out':
          return { opacity: 0, transform: 'scale(1.1)' };
        case 'pulse':
          return { opacity: 0 };
        case 'bounce':
          return { opacity: 0, transform: 'translateY(20px)' };
        default:
          return { opacity: 0 };
      }
    }

    // Animated styles
    return {
      opacity: 1,
      transform: 'none',
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out ${delay}ms`,
    };
  };

  // Additional animation class for bounce and pulse
  const getSpecialAnimationClass = () => {
    if (!isVisible) return '';
    
    switch (type) {
      case 'pulse':
        return 'animate-pulse';
      case 'bounce':
        return 'animate-bounce';
      default:
        return '';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${className} ${getSpecialAnimationClass()}`}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  );
} 