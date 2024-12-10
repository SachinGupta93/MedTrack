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
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <motion.nav
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'md:bg-white/80 md:backdrop-blur-sm bg-white shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleScroll('hero')}
          >
            <img 
              src="/medtrack-logo.png" 
              alt="MedTrack" 
              className="h-10 w-10"
            />
            <span className="ml-3 text-xl font-bold text-primary">
              MedTrack
              <span className="text-secondary">.</span>
            </span>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => handleScroll('features')}>Features</NavLink>
            <NavLink onClick={() => handleScroll('screenshots')}>App</NavLink>
            <NavLink onClick={() => handleScroll('how-it-works')}>How It Works</NavLink>
            <NavLink onClick={() => handleScroll('team')}>Team</NavLink>
            <motion.button
              onClick={() => window.plugSDK.toggleSearchAgent()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Search
            </motion.button>
            <motion.a
              href="https://getwaitlist.com/waitlist/22253"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Join Waitlist
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 md:hidden text-neutral-600"
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
            className="md:hidden glass-effect border-t border-neutral-200 fixed w-full top-20 left-0"
          >
            <div className="container-custom py-4 space-y-4">
              <MobileNavLink onClick={() => handleScroll('features')}>Features</MobileNavLink>
              <MobileNavLink onClick={() => handleScroll('screenshots')}>App</MobileNavLink>
              <MobileNavLink onClick={() => handleScroll('how-it-works')}>How It Works</MobileNavLink>
              <MobileNavLink onClick={() => handleScroll('team')}>Team</MobileNavLink>
              <motion.button
                onClick={() => {
                  window.plugSDK.toggleSearchAgent();
                  setIsMenuOpen(false);
                }}
                whileTap={{ scale: 0.95 }}
                className="block w-full text-center btn-primary"
              >
                Search
              </motion.button>
              <motion.a
                href="https://getwaitlist.com/waitlist/22253"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="block w-full btn-primary text-center"
              >
                Join Waitlist
              </motion.a>
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
    className="text-neutral-600 hover:text-primary transition-colors relative group font-medium"
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
  </motion.button>
);

const MobileNavLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <motion.button
    onClick={onClick}
    whileTap={{ scale: 0.95 }}
    className="block w-full text-left px-4 py-2 text-neutral-600 hover:text-primary hover:bg-neutral-50 rounded-lg transition-colors font-medium"
  >
    {children}
  </motion.button>
);

export default Navbar;
