'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import AnimatedElement from "../components/AnimatedElement";
import GlowingButton from "../components/GlowingButton";
import AppStoreButton from "../components/AppStoreButton";
import PhoneFrame from "../components/PhoneFrame";

export default function Home() {
  // For header transparency effect
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col animated-bg">
      {/* Navigation Bar */}
      <nav 
        className={`fixed w-full py-4 px-8 sm:px-16 flex justify-between items-center z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-md border-b border-purple-600/30 box-glow' 
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center">
          <Image
            src="/facecardlogo.png"
            alt="Facecard Logo"
            width={48}
            height={48}
            priority
            className="rounded-md purple-glow invert hue-rotate-180"
          />
          <span className="ml-3 text-xl font-bold text-glow bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">Facecard</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <Link 
            href="#features" 
            className="text-sm hover-underline-animation"
          >
            Features
          </Link>
          <Link 
            href="#how-it-works" 
            className="text-sm hover-underline-animation"
          >
            How It Works
          </Link>
          <Link 
            href="#gallery" 
            className="text-sm hover-underline-animation"
          >
            Gallery
          </Link>
        </div>
        
        <div className="hidden md:block">
          <AppStoreButton />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 p-1 rounded-md focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300 ${mobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white mb-1.5 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg pt-24 px-8 z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col gap-8 items-center">
          <Link 
            href="#features" 
            className="text-lg font-medium hover-underline-animation"
            onClick={closeMobileMenu}
          >
            Features
          </Link>
          <Link 
            href="#how-it-works" 
            className="text-lg font-medium hover-underline-animation"
            onClick={closeMobileMenu}
          >
            How It Works
          </Link>
          <Link 
            href="#gallery" 
            className="text-lg font-medium hover-underline-animation"
            onClick={closeMobileMenu}
          >
            Gallery
          </Link>
          <div className="mt-6">
            <AppStoreButton />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 sm:px-16 min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement type="fade-right" duration={800}>
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-glow">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                  Enhance Your Natural Beauty
                </span> with AI-Powered Recommendations
              </h1>
              <p className="text-lg text-gray-300">
                Facecard analyzes your unique facial features and provides personalized routines 
                to help you look your best. Take your appearance to the next level.
              </p>
              <div className="flex gap-4 mt-4">
                <AppStoreButton className="w-auto" />
                <Link href="#features">
                  <GlowingButton variant="outlined" size="lg">
                    Learn More
                  </GlowingButton>
                </Link>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement type="fade-left" delay={200} duration={800}>
            <div className="w-full mx-auto flex justify-center relative purple-glow-subtle">
              <PhoneFrame 
                imageUrl="/main.jpeg" 
                alt="Facecard app screenshot" 
                className="max-w-[300px] transform hover:rotate-3 transition-all duration-500"
              />
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 sm:px-16 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement type="fade-up">
            <h2 className="text-4xl font-bold text-center mb-4 text-glow">How Facecard Helps You Level Up</h2>
            <p className="text-lg text-center mb-16 text-purple-300 max-w-3xl mx-auto">
              Our cutting-edge technology analyzes your features and provides personalized recommendations to enhance your natural beauty.
            </p>
          </AnimatedElement>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedElement type="fade-up" delay={100} className="h-full">
              <div className="bg-black border border-purple-900/50 p-8 rounded-xl shadow-lg card-hover h-full">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-6 purple-glow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-purple-300">Personalized Analysis</h3>
                <p className="text-gray-300">
                  Get detailed facial analysis and personalized recommendations based on your unique features. Our AI identifies optimal improvements for your facial structure.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement type="fade-up" delay={200} className="h-full">
              <div className="bg-black border border-purple-900/50 p-8 rounded-xl shadow-lg card-hover h-full">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-6 purple-glow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-purple-300">Custom Routines</h3>
                <p className="text-gray-300">
                  Receive tailored skincare, fitness, and style routines to enhance your natural features. Follow your personalized plan to maximize your appearance.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement type="fade-up" delay={300} className="h-full">
              <div className="bg-black border border-purple-900/50 p-8 rounded-xl shadow-lg card-hover h-full">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-6 purple-glow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-purple-300">Progress Tracking</h3>
                <p className="text-gray-300">
                  Track your transformation with before and after comparisons and detailed progress metrics. See real results as you follow your custom plan.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-8 sm:px-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement type="fade-up">
            <h2 className="text-4xl font-bold text-center mb-4 text-glow">How It Works</h2>
            <p className="text-lg text-center mb-16 text-purple-300 max-w-3xl mx-auto">
              Our simple 4-step process helps you achieve your aesthetic goals faster than ever before.
            </p>
          </AnimatedElement>
          
          <div className="grid md:grid-cols-4 gap-8">
            <AnimatedElement type="fade-up" delay={100}>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6 purple-glow">
                  <span className="text-3xl font-bold text-purple-300">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Upload Your Photo</h3>
                <p className="text-gray-300">
                  Take a clear selfie or upload an existing photo for analysis.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement type="fade-up" delay={200}>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6 purple-glow">
                  <span className="text-3xl font-bold text-purple-300">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Get Analyzed</h3>
                <p className="text-gray-300">
                  Our AI analyzes your facial features and structure with precision.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement type="fade-up" delay={300}>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6 purple-glow">
                  <span className="text-3xl font-bold text-purple-300">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Receive Plan</h3>
                <p className="text-gray-300">
                  Get your personalized improvement plan and actionable recommendations.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement type="fade-up" delay={400}>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6 purple-glow">
                  <span className="text-3xl font-bold text-purple-300">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Track Progress</h3>
                <p className="text-gray-300">
                  Update your photos regularly to visualize your improvements.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Image Grid Gallery */}
      <section id="gallery" className="py-20 px-8 sm:px-16 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement type="fade-up">
            <h2 className="text-4xl font-bold text-center mb-4 text-glow">Success Gallery</h2>
            <p className="text-lg text-center mb-16 text-purple-300 max-w-3xl mx-auto">
              Explore our collection of successful transformations and see what&apos;s possible with Facecard.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatedElement type="fade-up" delay={100} className="h-full">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden group transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
                <Image
                  src="/facecard1.png"
                  alt="Facecard transformation example"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold">Jawline Enhancement</span>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement type="fade-up" delay={150} className="h-full">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden group transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
                <Image
                  src="/facecard2.png"
                  alt="Facecard transformation example"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold">Skin Rejuvenation</span>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement type="fade-up" delay={200} className="h-full">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden group transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
                <Image
                  src="/facecard3.png"
                  alt="Facecard transformation example"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold">Facial Symmetry</span>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement type="fade-up" delay={250} className="h-full">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden group transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
                <Image
                  src="/facecard4.png"
                  alt="Facecard transformation example"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold">Complete Makeover</span>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 sm:px-16 bg-gradient-to-r from-purple-900/80 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement type="fade-up">
            <h2 className="text-4xl font-bold mb-6 text-glow">Ready to Transform Your Appearance?</h2>
            <p className="text-xl mb-10 text-purple-200 max-w-3xl mx-auto">
              Join thousands of users who have discovered their best looks with Facecard.
              Your journey to your best self begins now.
            </p>
            <AppStoreButton className="mx-auto" />
          </AnimatedElement>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 sm:px-16 border-t border-purple-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Image
                src="/facecardlogo.png"
                alt="Facecard Logo"
                width={40}
                height={40}
                className="rounded-md purple-glow invert hue-rotate-180"
              />
              <span className="ml-3 text-xl font-bold text-glow bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">Facecard</span>
            </div>
            <div className="flex gap-8 mb-6 md:mb-0">
              <Link href="/privacy" className="text-sm hover-underline-animation">Privacy Policy</Link>
              <Link href="/terms" className="text-sm hover-underline-animation">Terms of Service</Link>
              <Link href="mailto:support@maktubtechnologies.com" className="text-sm hover-underline-animation">Contact</Link>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Facecard. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
