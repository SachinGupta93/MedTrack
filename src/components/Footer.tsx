import React from 'react';
import { motion } from 'framer-motion';
import { Pill, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    overview: ['Home', 'Features', 'Screenshots', 'Team'],
    support: ['FAQ', 'Privacy Policy', 'Terms', 'Contact'],
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white p-2 rounded-xl">
                <Pill size={24} />
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                MedTrack
              </span>
            </div>
            <p className="text-gray-600 max-w-xs">
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
            <h3 className="font-semibold text-gray-900 mb-4">Overview</h3>
            <ul className="space-y-3">
              {footerLinks.overview.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to get the latest updates.
            </p>
            <form className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 MedTrack. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};



const SocialLink = ({ icon: Icon }: { icon: LucideIcon }) => (
  <motion.a
    href="#"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
  >
    <Icon size={18} />
  </motion.a>
);

export default Footer;