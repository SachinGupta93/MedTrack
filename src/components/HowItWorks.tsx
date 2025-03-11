import React from 'react';
import { motion } from 'framer-motion';
import { Download, Bell, Calendar, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Download App',
    description: 'Get started by downloading MedTrack from your app store',
    color: 'primary'
  },
  {
    icon: Calendar,
    title: 'Add Medications',
    description: 'Input your medications and schedule',
    color: 'secondary'
  },
  {
    icon: Bell,
    title: 'Set Reminders',
    description: 'Customize notifications for your medication schedule',
    color: 'primary'
  },
  {
    icon: CheckCircle,
    title: 'Stay on Track',
    description: 'Never miss a dose with our smart reminder system',
    color: 'secondary'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-neutral-600 bg-neutral-100 px-4 py-2 rounded-full">
            Process
          </span>
          <h2 className="text-4xl font-bold mt-6 mb-4">
            Start Using MedTrack
            <span className="heading-gradient block">
              In Four Simple Steps
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Get started with MedTrack in simple steps
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-100 transform -translate-y-1/2 hidden lg:block" />
          
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
  icon: React.ComponentType<{ className?: string }>;
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
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative z-10"
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="card p-8 text-center h-full group"
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.3 }}
          className={`w-16 h-16 rounded-full bg-${color === 'primary' ? 'neutral' : 'secondary'}-100 
            flex items-center justify-center mx-auto mb-6 group-hover:bg-${color} transition-colors duration-100`}
        >
          <Icon className={`w-8 h-8 text-${color === 'primary' ? 'neutral-600' : 'secondary'} 
            group-hover: transition-colors duration-100`} />
        </motion.div>
        <div className="absolute -top-4 left-4 text-5xl font-bold text-neutral-100">
          {index + 1}
        </div>
        <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-100">
          {title}
        </h3>
        <p className="text-neutral-600">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default HowItWorks;