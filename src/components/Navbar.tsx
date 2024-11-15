import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const handleScroll = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleScroll('hero')}
          >
            <img 
              src="/medtrack-logo.png" 
              alt="MedTrack Logo" 
              className="h-12 w-12"
            />
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              MedTrack
            </span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => handleScroll('features')}>Features</NavLink>
            <NavLink onClick={() => handleScroll('screenshots')}>App</NavLink>
            <NavLink onClick={() => handleScroll('how-it-works')}>How It Works</NavLink>
            <NavLink onClick={() => handleScroll('team')}>Team</NavLink>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 md:hidden text-gray-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
              <MobileNavLink onClick={() => handleScroll('features')}>Features</MobileNavLink>
              <MobileNavLink onClick={() => handleScroll('screenshots')}>App</MobileNavLink>
              <MobileNavLink onClick={() => handleScroll('how-it-works')}>How It Works</MobileNavLink>
              <MobileNavLink onClick={() => handleScroll('team')}>Team</MobileNavLink>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-lg font-medium shadow-lg"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const NavLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <motion.button
    onClick={onClick}
    className="text-gray-600 hover:text-blue-600 transition-colors relative group font-medium"
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
  </motion.button>
);

const MobileNavLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <motion.button
    onClick={onClick}
    whileTap={{ scale: 0.95 }}
    className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
  >
    {children}
  </motion.button>
);

export default Navbar;