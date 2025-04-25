import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/facecard-logo.svg" 
              alt="Facecard" 
              width={180} 
              height={38} 
              className="text-emerald-600 dark:text-white"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-emerald-600 transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-emerald-600 transition-colors">How It Works</Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-emerald-600 transition-colors">Testimonials</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-emerald-600 transition-colors">Pricing</Link>
          </div>
          <div>
            <Link href="#get-started" className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Elevate Your <span className="text-emerald-600">Appearance</span> to New Heights
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-md">
                Facecard helps you enhance your natural features with personalized looks maxing recommendations and routines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#get-started" className="bg-emerald-600 text-white px-8 py-3 rounded-full text-center hover:bg-emerald-700 transition-colors">
                  Start Your Journey
                </Link>
                <Link href="#how-it-works" className="bg-white text-emerald-600 px-8 py-3 rounded-full text-center border border-emerald-600 hover:bg-emerald-50 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/hero-image.svg" 
                alt="Enhance your appearance" 
                width={800} 
                height={600} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Facecard</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform offers everything you need to enhance your natural features and maximize your appearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started with Facecard is simple and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what others are saying about Facecard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that works best for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden ${plan.highlighted ? 'ring-2 ring-emerald-600' : ''}`}>
                <div className={`p-6 ${plan.highlighted ? 'bg-emerald-600 text-white' : 'bg-gray-100'}`}>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold">${plan.price}</span>
                    <span className="ml-1 text-xl font-medium text-opacity-80">/month</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link href="#get-started" className={`block w-full px-4 py-3 rounded-lg text-center ${
                      plan.highlighted 
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                        : 'bg-white text-emerald-600 border border-emerald-600 hover:bg-emerald-50'
                    } transition-colors`}>
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="py-16 md:py-24 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Appearance?</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-emerald-100">
            Join thousands of others who have already enhanced their natural features with Facecard.
          </p>
          <Link href="#" className="bg-white text-emerald-600 px-8 py-3 rounded-full inline-block text-lg font-medium hover:bg-gray-100 transition-colors">
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image 
                src="/facecard-logo.svg" 
                alt="Facecard" 
                width={150} 
                height={32} 
                className="text-white mb-4"
              />
              <p className="mb-4">Enhance your natural features with personalized looks maxing recommendations.</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link href="#testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Guides</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>Email: info@facecard.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Main St, City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2023 Facecard. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Data
const features = [
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>,
    title: "Personalized Analysis",
    description: "Get detailed facial analysis and personalized recommendations based on your unique features."
  },
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>,
    title: "Custom Routines",
    description: "Receive tailored skincare, fitness, and style routines to enhance your natural features."
  },
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>,
    title: "Progress Tracking",
    description: "Track your transformation with before and after comparisons and detailed progress metrics."
  }
];

const steps = [
  {
    title: "Create an Account",
    description: "Sign up and create your Facecard profile with basic information."
  },
  {
    title: "Upload Photos",
    description: "Upload clear photos of yourself from different angles for analysis."
  },
  {
    title: "Get Recommendations",
    description: "Receive personalized recommendations to enhance your features."
  },
  {
    title: "Track Your Progress",
    description: "Follow your custom plan and track improvements over time."
  }
];

const testimonials = [
  {
    quote: "Facecard has completely transformed my appearance. The personalized recommendations were spot on!",
    name: "Alex Johnson",
    title: "Premium Member"
  },
  {
    quote: "I've tried many other apps, but Facecard is by far the most comprehensive and effective solution.",
    name: "Sophia Chen",
    title: "Pro Member"
  },
  {
    quote: "The progress tracking feature helps me stay motivated and see real changes over time.",
    name: "Marcus Williams",
    title: "Basic Member"
  }
];

const pricingPlans = [
  {
    name: "Basic",
    price: 9.99,
    features: [
      "Basic facial analysis",
      "Standard recommendations",
      "Weekly progress tracking",
      "Email support"
    ],
    highlighted: false
  },
  {
    name: "Pro",
    price: 19.99,
    features: [
      "Advanced facial analysis",
      "Personalized routines",
      "Daily progress tracking",
      "Priority support",
      "Expert consultations"
    ],
    highlighted: true
  },
  {
    name: "Premium",
    price: 29.99,
    features: [
      "Comprehensive analysis",
      "Custom routines & diet plans",
      "Real-time progress tracking",
      "24/7 priority support",
      "Monthly expert consultations",
      "Exclusive content access"
    ],
    highlighted: false
  }
];
