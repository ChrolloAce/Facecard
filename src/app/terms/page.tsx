'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function TermsOfService() {
  const [scrolled, setScrolled] = useState(false);
  
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
        <Link href="/" className="flex items-center">
          <Image
            src="/facecardlogo.png"
            alt="Facecard Logo"
            width={48}
            height={48}
            priority
            className="rounded-md purple-glow invert hue-rotate-180"
          />
          <span className="ml-3 text-xl font-bold text-glow bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">Facecard</span>
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="text-sm hover-underline-animation">
            Home
          </Link>
          <Link href="/privacy" className="text-sm hover-underline-animation">
            Privacy Policy
          </Link>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-8 sm:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-glow">Terms of Service</h1>
          <div className="prose prose-invert prose-purple max-w-none">
            <p className="text-gray-300">Last Updated: June 1, 2024</p>
            
            <p className="mt-6 text-gray-300">
              Welcome to Facecard. Please read these Terms of Service (&quot;Terms&quot;) carefully before using the Facecard mobile application (the &quot;App&quot;) operated by Maktub Technologies (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            </p>
            
            <p className="text-gray-300">
              By downloading, accessing, or using our App, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access the App.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">1. Use of the App</h2>
            
            <p className="text-gray-300">
              Facecard is an AI-powered facial analysis and recommendation application designed to analyze facial features and provide personalized recommendations.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-purple-300">1.1 Account Registration</h3>
            
            <p className="text-gray-300">
              To use certain features of the App, you may be required to register for an account. When you register for an account, you agree to provide accurate and complete information. You are responsible for maintaining the security of your account credentials and for all activities that occur under your account.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-purple-300">1.2 Age Restrictions</h3>
            
            <p className="text-gray-300">
              The App is intended for users who are 18 years of age or older. By accessing or using our App, you represent and warrant that you are at least 18 years old. If you are under 18, you may only use the App with the involvement and consent of a parent or guardian.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">2. User Content</h2>
            
            <p className="text-gray-300">
              Our App allows you to upload photos for analysis (&quot;User Content&quot;). By uploading User Content to the App, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, process, and display your User Content solely for the purpose of providing and improving the App.
            </p>
            
            <p className="text-gray-300">
              You represent and warrant that you have all rights necessary to grant us this license for any User Content you submit and that your User Content does not violate any third-party rights or applicable laws.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">3. Intellectual Property</h2>
            
            <p className="text-gray-300">
              The App and its original content, features, and functionality are and will remain the exclusive property of Maktub Technologies and its licensors. The App is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Maktub Technologies.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">4. Disclaimer of Warranties</h2>
            
            <p className="text-gray-300">
              The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We make no warranties, express or implied, regarding the operation of the App or the information, content, materials, or products included on the App.
            </p>
            
            <p className="text-gray-300">
              We disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the App or its servers are free of viruses or other harmful components.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">5. Limitation of Liability</h2>
            
            <p className="text-gray-300">
              In no event shall Maktub Technologies, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the App; (ii) any conduct or content of any third party on the App; or (iii) unauthorized access, use, or alteration of your transmissions or content.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">6. Termination</h2>
            
            <p className="text-gray-300">
              We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            
            <p className="text-gray-300">
              All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">7. Changes to Terms</h2>
            
            <p className="text-gray-300">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">8. Contact Us</h2>
            
            <p className="text-gray-300">
              If you have any questions about these Terms, please contact us at:
            </p>
            
            <p className="text-gray-300">
              Email: support@maktubtechnologies.com<br />
              Phone: (786) 641-1493
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-12 px-8 sm:px-16 border-t border-purple-900/30 mt-auto">
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
              <Link href="/" className="text-sm hover-underline-animation">Home</Link>
              <Link href="/terms" className="text-sm hover-underline-animation">Terms of Service</Link>
              <Link href="/privacy" className="text-sm hover-underline-animation">Privacy Policy</Link>
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