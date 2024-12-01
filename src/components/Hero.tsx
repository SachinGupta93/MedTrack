import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
      className="min-h-screen pt-20 pb-12 sm:pb-24 relative overflow-hidden bg-accent"
      onMouseMove={handleMouseMove}
    >
      <div className="container-custom h-full py-8 md:py-16">
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

            <div className="pt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 sm:divide-x divide-gray-200">
              <Stat 
                number="Q2 2025" 
                label="Launch Date" 
                className="mb-12 sm:mb-0 sm:pr-8"
              />
              <Stat 
                number="Coming Soon" 
                label="Beta Access" 
                className="mb-12 sm:mb-0 sm:px-8"
              />
              <Stat 
                number="In Progress" 
                label="Development" 
                className="sm:pl-8"
              />
            </div>
          </motion.div>

          {/* Desktop Image Section */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-square">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    rotateX: useSpring(useTransform(mouseY, [0, 600], [5, -5])),
                    rotateY: useSpring(useTransform(mouseX, [0, 800], [-5, 5])),
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="MedTrack App Interface"
                    className="rounded-3xl shadow-2xl"
                  />
                </motion.div>
              </div>
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

const Stat = ({ number, label, className }: { number: string; label: string; className?: string }) => (
  <div className={`text-center ${className}`}>
    <div className="text-2xl font-bold text-primary">{number}</div>
    <div className="text-sm text-neutral-600 mt-1">{label}</div>
  </div>
);

export default Hero;