import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PrescriptionScanner from './PrescriptionScanner';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const openWaitlist = () => {
    window.open('https://getwaitlist.com/waitlist/22253', '_blank');
  };

  const openGitHub = () => {
    window.open('https://github.com/Ganesh540-crypto/MedTrack', '_blank');
  };

  return (
    <section 
      id="hero"
      className="min-h-screen pt-20 relative overflow-hidden bg-accent"
      onMouseMove={handleMouseMove}
    >
      <div className="container-custom h-full py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md"
            >
              <span className="text-sm font-medium text-neutral-600">
                🚀 Join the healthcare revolution
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-balance">
              Smart Medication
              <br />
              <span className="heading-gradient">
                Management Made Simple
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-neutral-600 max-w-lg leading-relaxed text-balance">
              Transform your medication routine with MedTrack. Intelligent reminders, 
              seamless tracking, and peace of mind in one elegant solution.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openWaitlist}
                className="btn-primary inline-flex items-center gap-2"
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openGitHub}
                className="btn-secondary"
              >
                Learn More
              </motion.button>
            </div>

            {/* Stats Section - Hidden on mobile */}
            <div className="hidden md:flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center pt-8">
              <Stat number="Q2 2025" label="Launch Date" />
              <Stat number="Coming Soon" label="Beta Access" />
              <Stat number="In Progress" label="Development" isLast />
            </div>
          </motion.div>

          {/* Desktop Animation Section */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <PrescriptionScanner />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>
    </section>
  );
};

const Stat = ({ number, label, isLast }: { number: string; label: string; isLast?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full lg:flex-1 flex items-center justify-center"
  >
    <motion.div 
      whileHover={{ 
        scale: 1.05,
        borderColor: '#6366f1',
        transition: { duration: 0.2 }
      }}
      className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg w-full max-w-[280px] lg:w-auto border-2 border-transparent transition-colors duration-200 hover:border-primary/50"
    >
      <div className="text-2xl font-bold text-primary whitespace-nowrap">{number}</div>
      <div className="text-sm text-neutral-600 mt-1 whitespace-nowrap">{label}</div>
    </motion.div>
    {!isLast && <div className="hidden lg:block text-neutral-300 text-2xl mx-4">|</div>}
  </motion.div>
);

export default Hero;