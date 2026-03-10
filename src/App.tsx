/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Menu, 
  X, 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Star
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Nexus</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Contact</a>
              <button className="px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all hover:shadow-lg hover:shadow-slate-900/20 active:scale-95">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="text-slate-600 hover:text-slate-900 p-2">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-xl"
          >
            <a href="#features" onClick={toggleMobileMenu} className="block text-base font-medium text-slate-600 hover:text-indigo-600">Features</a>
            <a href="#pricing" onClick={toggleMobileMenu} className="block text-base font-medium text-slate-600 hover:text-indigo-600">Pricing</a>
            <a href="#testimonials" onClick={toggleMobileMenu} className="block text-base font-medium text-slate-600 hover:text-indigo-600">Testimonials</a>
            <a href="#contact" onClick={toggleMobileMenu} className="block text-base font-medium text-slate-600 hover:text-indigo-600">Contact</a>
            <button className="w-full px-4 py-3 text-base font-medium text-white bg-slate-900 rounded-xl">
              Get Started
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 blur-[100px] rounded-full mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
                v2.0 is now live
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Build faster with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">intelligent</span> tools.
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                Nexus provides the infrastructure you need to scale your startup. Stop worrying about the backend and focus on delivering value to your users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 text-base font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all hover:shadow-xl hover:shadow-slate-900/20 active:scale-95 flex items-center justify-center gap-2">
                  Start for free <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-4 text-base font-medium text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-full transition-all active:scale-95 flex items-center justify-center">
                  Book a demo
                </button>
              </div>
              <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-8 h-8 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <p>Trusted by 10,000+ developers</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:ml-auto"
            >
              <div className="relative rounded-2xl bg-slate-900 p-2 shadow-2xl shadow-indigo-500/20 border border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-2xl" />
                <img 
                  src="https://picsum.photos/seed/dashboard/1200/800" 
                  alt="Product Dashboard" 
                  className="rounded-xl w-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                {/* Floating UI Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -left-8 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Deployment successful</p>
                      <p className="text-xs text-slate-500">Just now</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-3">Features</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Everything you need to scale</h3>
            <p className="text-lg text-slate-600">We've built a comprehensive suite of tools to help you manage your infrastructure, so you can focus on building your product.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6 text-indigo-600" />,
                title: "Lightning Fast",
                description: "Our edge network ensures your application loads instantly for users anywhere in the world."
              },
              {
                icon: <Shield className="w-6 h-6 text-indigo-600" />,
                title: "Bank-grade Security",
                description: "Enterprise-level security protocols built-in by default to keep your data safe."
              },
              {
                icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
                title: "Mobile Optimized",
                description: "Responsive APIs and SDKs designed specifically for mobile-first applications."
              },
              {
                icon: <Globe className="w-6 h-6 text-indigo-600" />,
                title: "Global Edge Network",
                description: "Deploy your code to 100+ edge locations with a single click."
              },
              {
                icon: <CheckCircle2 className="w-6 h-6 text-indigo-600" />,
                title: "Automated Testing",
                description: "Built-in CI/CD pipelines that automatically test and deploy your code."
              },
              {
                icon: <Star className="w-6 h-6 text-indigo-600" />,
                title: "Premium Support",
                description: "24/7 access to our team of expert engineers to help you overcome any hurdle."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:border-indigo-200 group-hover:bg-indigo-50">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-indigo-400 uppercase mb-3">Pricing</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Simple, transparent pricing</h3>
            <p className="text-lg text-slate-400">Start for free, upgrade when you need more power.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 hover:border-slate-600 transition-colors">
              <h4 className="text-xl font-semibold mb-2">Starter</h4>
              <p className="text-slate-400 text-sm mb-6">Perfect for side projects and indie hackers.</p>
              <div className="mb-6">
                <span className="text-4xl font-display font-bold">$0</span>
                <span className="text-slate-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Up to 1,000 users', 'Basic analytics', 'Community support', '1GB storage'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-4 rounded-xl font-medium bg-slate-700 hover:bg-slate-600 transition-colors">
                Get Started
              </button>
            </div>

            {/* Pro */}
            <div className="bg-gradient-to-b from-indigo-600 to-purple-700 rounded-3xl p-8 relative transform md:-translate-y-4 shadow-2xl shadow-indigo-500/25 border border-indigo-400/50">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-300 to-purple-300 text-indigo-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <h4 className="text-xl font-semibold mb-2">Pro</h4>
              <p className="text-indigo-100 text-sm mb-6">For growing startups and businesses.</p>
              <div className="mb-6">
                <span className="text-4xl font-display font-bold">$49</span>
                <span className="text-indigo-200">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Up to 50,000 users', 'Advanced analytics', 'Priority email support', '100GB storage', 'Custom domains'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white text-sm">
                    <CheckCircle2 className="w-5 h-5 text-indigo-200 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-4 rounded-xl font-medium bg-white text-indigo-900 hover:bg-indigo-50 transition-colors shadow-lg">
                Start Free Trial
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 hover:border-slate-600 transition-colors">
              <h4 className="text-xl font-semibold mb-2">Enterprise</h4>
              <p className="text-slate-400 text-sm mb-6">Custom solutions for large scale applications.</p>
              <div className="mb-6">
                <span className="text-4xl font-display font-bold">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Unlimited users', 'Custom reporting', '24/7 phone support', 'Unlimited storage', 'Dedicated success manager'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-4 rounded-xl font-medium bg-slate-700 hover:bg-slate-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Loved by developers worldwide</h2>
            <p className="text-lg text-slate-600">Don't just take our word for it. Here's what our users have to say.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Nexus completely transformed how we build applications. We shipped our MVP in half the time it usually takes.",
                author: "Ubaid Ullah",
                role: "Founder & CEO",
                avatar: "https://picsum.photos/seed/ubaid/100/100"
              },
              {
                quote: "The performance improvements are incredible. Our global latency dropped by 60% after switching to their edge network.",
                author: "David Chen",
                role: "Lead Engineer at StartupX",
                avatar: "https://picsum.photos/seed/david/100/100"
              },
              {
                quote: "Best developer experience I've ever had. The documentation is flawless and the APIs are incredibly intuitive.",
                author: "Elena Rodriguez",
                role: "Indie Hacker",
                avatar: "https://picsum.photos/seed/elena/100/100"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-8 text-lg leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h5 className="font-bold text-slate-900">{testimonial.author}</h5>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 rounded-3xl p-8 md:p-12 border border-indigo-100 text-center">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Ready to get started?</h2>
            <p className="text-lg text-slate-600 mb-8">Join thousands of developers building the future with Nexus.</p>
            
            <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                />
              </div>
              <input 
                type="email" 
                placeholder="Work Email" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
              />
              <textarea 
                placeholder="How can we help?" 
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow resize-none"
              ></textarea>
              <button type="submit" className="w-full py-4 px-6 rounded-xl font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl hover:shadow-slate-900/20 active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight text-white">Nexus</span>
              </div>
              <p className="text-sm max-w-xs mb-6">
                Building the infrastructure for the next generation of web applications.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2026 Ubaid Ullah. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
