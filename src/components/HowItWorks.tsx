import React from 'react';
import { motion } from 'framer-motion';
import { Download, Bell, Calendar, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Download App',
    description: 'Get started by downloading MedTrack from your app store',
    color: 'blue'
  },
  {
    icon: Calendar,
    title: 'Add Medications',
    description: 'Input your medications and schedule',
    color: 'green'
  },
  {
    icon: Bell,
    title: 'Set Reminders',
    description: 'Customize notifications for your medication schedule',
    color: 'purple'
  },
  {
    icon: CheckCircle,
    title: 'Stay on Track',
    description: 'Never miss a dose with our smart reminder system',
    color: 'red'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with MedTrack in simple steps
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-green-500 transform -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string;
  index: number;
}

const StepCard: React.FC<StepCardProps> = ({ icon: Icon, title, description, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative z-10"
    >
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        className="glass-card p-8 text-center h-full"
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className={`w-16 h-16 rounded-full bg-${color}-100 flex items-center justify-center mx-auto mb-6`}
        >
          <Icon className={`w-8 h-8 text-${color}-500`} />
        </motion.div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default HowItWorks;