import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Pill, Activity, Heart, ArrowRight, X } from 'lucide-react';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  return (
    <section 
      id="hero"
      className="min-h-screen pt-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-10"
          >
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                The Future of
              </span>
              <br />
              <span className="text-gray-900">
                Medication Management
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed">
              Join our waitlist to be among the first to experience MedTrack - 
              the revolutionary approach to medication tracking and health management.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openWaitlist}
                className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Join Waitlist
              </motion.button>
              <motion.a
                href="https://github.com/Ganesh540-crypto/MedTrack"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-medium text-lg transition-colors duration-300"
              >
                Learn More
              </motion.a>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-8">
              <Stat label="Launch Date" value="Q1 2025" />
              <Stat label="Beta Access" value="Coming Soon" />
              <Stat label="Development" value="In Progress" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative perspective-1000 hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              <FloatingElement
                Icon={Pill}
                mouseX={mouseX}
                mouseY={mouseY}
                x="20%"
                y="0%"
                delay={0}
                color="blue"
              />
              <FloatingElement
                Icon={Activity}
                mouseX={mouseX}
                mouseY={mouseY}
                x="75%"
                y="0%"
                delay={0.2}
                color="green"
              />
              <FloatingElement
                Icon={Heart}
                mouseX={mouseX}
                mouseY={mouseY}
                x="5%"
                y="55%"
                delay={0.4}
                color="red"
              />
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%]"
                style={{
                  rotateX: useSpring(useTransform(mouseY, [0, 600], [5, -5])),
                  rotateY: useSpring(useTransform(mouseX, [0, 800], [-5, 5])),
                  marginLeft: '-10rem',
                  top: '20%',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Medical App Interface"
                  className="rounded-3xl shadow-2xl transform transition-transform duration-300"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-lg sm:text-xl font-bold text-gray-900">{value}</div>
    <div className="text-sm text-gray-600 mt-1">{label}</div>
  </div>
);

const FloatingElement = ({
  Icon,
  mouseX,
  mouseY,
  x,
  y,
  delay,
  color,
}: {
  Icon: any;
  mouseX: any;
  mouseY: any;
  x: string;
  y: string;
  delay: number;
  color: string;
}) => {
  const springConfig = { stiffness: 300, damping: 30 };

  return (
    <motion.div
      className={`absolute z-20`}
      style={{
        left: x,
        top: y,
        x: useSpring(useTransform(mouseX, [0, 800], [-20, 20]), springConfig),
        y: useSpring(useTransform(mouseY, [0, 600], [-20, 20]), springConfig),
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 15 }}
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        className={`p-4 bg-${color}-100 rounded-2xl shadow-lg cursor-pointer
          hover:shadow-2xl transition-shadow duration-300
          backdrop-blur-sm bg-opacity-80`}
      >
        <Icon className={`w-8 h-8 text-${color}-500`} />
      </motion.div>
    </motion.div>
  );
};

export default Hero;