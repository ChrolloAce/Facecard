'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PrivacyPolicy() {
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
          <Link href="/terms" className="text-sm hover-underline-animation">
            Terms of Service
          </Link>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-8 sm:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-glow">Privacy Policy</h1>
          <div className="prose prose-invert prose-purple max-w-none">
            <p className="text-gray-300">Last Updated: June 1, 2024</p>
            
            <p className="mt-6 text-gray-300">
              At Facecard, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (&quot;App&quot;).
            </p>
            
            <p className="text-gray-300">
              Please read this Privacy Policy carefully. By accessing or using the App, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-purple-300">1.1 Personal Information</h3>
            
            <p className="text-gray-300">
              We may collect personal information that you voluntarily provide to us when you register with the App, such as:
            </p>
            
            <ul className="text-gray-300 list-disc pl-6 mt-3">
              <li>Name</li>
              <li>Email address</li>
              <li>Profile pictures and facial images</li>
              <li>Age and gender</li>
              <li>Account creation and login information</li>
            </ul>
            
            <p className="text-gray-300 mt-3">
              We collect facial imagery when users voluntarily submit a selfie for analysis. This data is used to generate aesthetic metrics and is not used for identification or recognition purposes.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-purple-300">1.2 Automatically Collected Information</h3>
            
            <p className="text-gray-300">
              When you access or use our App, we may automatically collect certain information, including:
            </p>
            
            <ul className="text-gray-300 list-disc pl-6 mt-3">
              <li>Device information (such as your mobile device ID, model, and manufacturer)</li>
              <li>Operating system type and version</li>
              <li>Usage data and interaction with our App</li>
              <li>Log information</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">2. How We Use Your Information</h2>
            
            <p className="text-gray-300">
              We use the information we collect for various purposes, including to:
            </p>
            
            <ul className="text-gray-300 list-disc pl-6 mt-3">
              <li>Provide, maintain, and improve our App</li>
              <li>Process and analyze facial features to provide personalized recommendations</li>
              <li>Create and maintain your account</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you technical notices, updates, security alerts, and administrative messages</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Enhance the safety and security of our App</li>
              <li>Comply with applicable laws, regulations, and legal processes</li>
            </ul>
            
            <p className="text-gray-300 mt-3">
              Facial data submitted through the app is used solely to provide users with personalized visual analysis and improvement suggestions. We do not use facial data for advertising or third-party purposes.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">3. Data Storage and Security</h2>
            
            <p className="text-gray-300">
              We use commercially reasonable methods to secure your personal information. However, no data transmission over the Internet or wireless networks can be guaranteed to be 100% secure. Therefore, while we strive to protect your personal information, you acknowledge that there are security and privacy limitations inherent to the Internet, and that the security, integrity, and privacy of any information exchanged between you and the App cannot be guaranteed.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-purple-300">3.1 Data Retention and Deletion</h3>
            
            <p className="text-gray-300">
              Facial data is stored only for as long as necessary to provide the user with ongoing access to their analysis or as required by user interaction. Users may delete their facial data and associated records at any time through the app.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">4. Sharing Your Information</h2>
            
            <p className="text-gray-300">
              We may share your information in the following situations:
            </p>
            
            <ul className="text-gray-300 list-disc pl-6 mt-3">
              <li><strong>With Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us.</li>
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information where required to do so by law or in response to valid requests by public authorities.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">5. Your Privacy Rights</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-purple-300">5.1 Access, Update, or Delete</h3>
            
            <p className="text-gray-300">
              You can request to access, update, or delete your personal information by contacting us. We will respond to your request within a reasonable timeframe.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-purple-300">5.2 California Privacy Rights</h3>
            
            <p className="text-gray-300">
              If you are a California resident, you have the right to request information regarding the disclosure of your personal information to third parties for their direct marketing purposes. To make such a request, please contact us using the information provided below.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">6. Children&apos;s Privacy</h2>
            
            <p className="text-gray-300">
              Our App is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take appropriate action.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">7. Third-Party Services</h2>
            
            <p className="text-gray-300">
              Our App may contain links to third-party websites and services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. If you click on a third-party link, you will be directed to that third party&apos;s site. We strongly advise you to review the privacy policy of every site you visit.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">8. Changes to This Privacy Policy</h2>
            
            <p className="text-gray-300">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date at the top. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">9. Contact Us</h2>
            
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            
            <p className="text-gray-300">
              Email: 001ernestolopez@gmail.com<br />
              Phone: (833) 999-0739
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