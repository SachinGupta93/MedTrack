import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar, LineChart, Shield, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Never miss a dose with intelligent notifications and reminders tailored to your schedule.',
    color: 'primary'
  },
  {
    icon: Calendar,
    title: 'Schedule Management',
    description: 'Easily manage your medication schedule with our intuitive calendar interface.',
    color: 'secondary'
  },
  {
    icon: LineChart,
    title: 'Progress Tracking',
    description: 'Monitor your medication adherence and health progress with detailed analytics.',
    color: 'primary'
  },
  {
    icon: Shield,
    title: 'Secure Data',
    description: 'Your health data is encrypted and protected with enterprise-grade security.',
    color: 'secondary'
  },
  {
    icon: Clock,
    title: 'Refill Alerts',
    description: "Get timely notifications when it's time to refill your prescriptions.",
    color: 'primary'
  },
  {
    icon: Users,
    title: 'Family Sharing',
    description: 'Manage medications for your entire family with multi-user support.',
    color: 'secondary'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-neutral-600 bg-neutral-100 px-4 py-2 rounded-full">
            Features
          </span>
          <h2 className="text-4xl font-bold mt-6 mb-4">
            Everything you need to
            <span className="heading-gradient block">
              Stay on Track
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Everything you need to manage your medications effectively and stay healthy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="card p-8 h-full group"
      >
        <div className={`inline-block p-3 rounded-2xl bg-${feature.color === 'primary' ? 'neutral' : 'secondary'}-100 
          group-hover:bg-${feature.color === 'primary' ? 'primary' : 'secondary'} transition-colors duration-300 mb-6`}>
          <Icon className={`w-8 h-8 text-${feature.color === 'primary' ? 'neutral-600' : 'secondary'} 
            group-hover:text-white transition-colors duration-300`} />
        </div>
        <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-neutral-600">{feature.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default Features;