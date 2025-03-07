import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Linkedin, Github, Mail, Instagram } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState('idle');
  const location = useLocation();
  const navigate = useNavigate();

  const footerLinks = {
    overview: [
      { name: 'Home', sectionId: 'top' },
      { name: 'Features', sectionId: 'features' },
      { name: 'Screenshots', sectionId: 'screenshots' },
      { name: 'Team', sectionId: 'team' }
    ],
    support: [
      { name: 'FAQ', path: '/faq' },
      { name: 'Privacy Policy', path: '/privacypolicy' },
      { name: 'Terms', path: '/terms' },
      { name: 'Contact', path: '/contact' }
    ]
  };

  const handleNavigation = (sectionId) => {
    // Check if we're already on home page
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      // Navigate to home page with section info
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const scrollToSection = (section) => {
    if (section === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Check if we need to scroll after navigation
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [location]);

  useEffect(() => {
    let timer;
    if (subscriptionStatus === 'success') {
      timer = setTimeout(() => {
        setSubscriptionStatus('idle');
      }, 8000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [subscriptionStatus]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value.trim());
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_cf7o19h',
        'template_c7ki6lw',
        {
          from_name: 'Newsletter Subscription',
          from_email: email,
          message: `New newsletter subscription from: ${email}`,
          reply_to: email,
          to_email: email,
          subject: 'Welcome to MedTrack Newsletter'
        },
        'fVuXiQ6Za49DxAauS'
      );
      setSubscriptionStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      setSubscriptionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const SocialLink = ({ icon: Icon, href }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-secondary hover:text-white transition-colors"
    >
      <Icon size={18} />
    </motion.a>
  );

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img 
                src="/medtrack-logo1.png" 
                alt="MedTrack" 
                className="h-10 w-10 brightness-0 invert"
              />
              <span className="ml-3 text-xl font-bold">
                MedTrack<span className="text-secondary">.</span>
              </span>
            </Link>
            <p className="text-neutral-400 max-w-xs">
              Revolutionizing medication management with smart technology and intuitive design.
              <span className="block mt-2 text-sm">By VISTORA TRAYANA LLP</span>
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={Instagram} href="https://www.instagram.com/medtrack.care?igsh=MXY0M2U3NzdpYjdjaA==" />
              <SocialLink icon={Linkedin} href="https://www.linkedin.com/company/105065237/admin/dashboard/" />
              <SocialLink icon={Github} href="https://github.com/VISTORA-TRAYANA-LLP" />
              <SocialLink icon={Mail} href="mailto:support@medtrack.co.in" />
            </div>
          </div>

          {/* Overview Links */}
          <div>
            <h3 className="font-semibold text-white mb-6">Overview</h3>
            <ul className="space-y-4">
              {footerLinks.overview.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => handleNavigation(link.sectionId)}
                    className="text-neutral-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 ease-in-out"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-neutral-400 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-6">Newsletter</h3>
            <AnimatePresence mode="wait">
              <motion.div
                key={subscriptionStatus}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {subscriptionStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="bg-neutral-800 rounded-lg p-6 flex flex-col items-center justify-center space-y-4"
                  >
                    <motion.div 
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center"
                    >
                      <Mail className="w-6 h-6 text-secondary" />
                    </motion.div>
                    <motion.h4 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-lg font-semibold text-white"
                    >
                      Subscribed!
                    </motion.h4>
                    <motion.p 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-neutral-400 text-center text-sm"
                    >
                      Thank you for subscribing to our newsletter.
                    </motion.p>
                  </motion.div>
                ) : subscriptionStatus === 'error' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-neutral-800 rounded-lg p-6 flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-red-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-red-500">Subscription Failed</h4>
                    <p className="text-neutral-400 text-center text-sm">
                      Sorry, we couldn't subscribe you. Please try again.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSubscriptionStatus('idle')}
                      className="text-sm text-secondary hover:text-secondary/80 transition-colors"
                    >
                      Try again
                    </motion.button>
                  </motion.div>
                ) : (
                  <>
                    <p className="text-neutral-400 mb-4">
                      Subscribe to get the latest updates.
                    </p>
                    <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                      <div className="flex">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={handleEmailChange}
                          className="flex-1 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-white"
                          required
                        />
                        <button
                          type="submit"
                          disabled={isSubmitting || !email}
                          className={`px-4 py-2 bg-secondary text-white rounded-r-lg transition-colors ${
                            isSubmitting || !email ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
                          }`}
                        >
                          {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <Mail size={20} />
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © 2025 MedTrack. All rights reserved.
            </p>
            {/* Bottom Bar Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                to="/privacy-policy" 
                className="text-neutral-400 hover:text-secondary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-neutral-400 hover:text-secondary text-sm transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
