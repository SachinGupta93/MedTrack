import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Mail, LucideProps } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    overview: ['Home', 'Features', 'Screenshots', 'Team'],
    support: ['FAQ', 'Privacy Policy', 'Terms', 'Contact'],
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="/medtrack-logo1.png" 
                alt="MedTrack" 
                className="h-10 w-10 brightness-0 invert"
              />
              <span className="ml-3 text-xl font-bold">
                MedTrack
                <span className="text-secondary">.</span>
              </span>
            </div>
            <p className="text-neutral-400 max-w-xs">
              Revolutionizing medication management with smart technology and intuitive design.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={Twitter} />
              <SocialLink icon={Linkedin} />
              <SocialLink icon={Github} />
            </div>
          </div>

          {/* Overview Links */}
          <div>
            <h3 className="font-semibold text-white mb-6">Overview</h3>
            <ul className="space-y-4">
              {footerLinks.overview.map((link) => (
                <li key={link}>
                  <a href="#" className="text-neutral-400 hover:text-secondary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-neutral-400 hover:text-secondary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-6">Newsletter</h3>
            <p className="text-neutral-400 mb-4">
              Subscribe to get the latest updates.
            </p>
            <form className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-secondary text-white rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © 2024 MedTrack. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-secondary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-secondary text-sm transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon: Icon }: { icon: React.ComponentType<LucideProps> }) => (
  <motion.a
    href="#"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-secondary hover:text-white transition-colors"
  >
    <Icon size={18} />
  </motion.a>
);

export default Footer;