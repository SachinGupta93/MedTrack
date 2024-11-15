import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar, LineChart, Shield, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Never miss a dose with intelligent notifications and reminders tailored to your schedule.',
    color: 'blue'
  },
  {
    icon: Calendar,
    title: 'Schedule Management',
    description: 'Easily manage your medication schedule with our intuitive calendar interface.',
    color: 'green'
  },
  {
    icon: LineChart,
    title: 'Progress Tracking',
    description: 'Monitor your medication adherence and health progress with detailed analytics.',
    color: 'purple'
  },
  {
    icon: Shield,
    title: 'Secure Data',
    description: 'Your health data is encrypted and protected with enterprise-grade security.',
    color: 'red'
  },
  {
    icon: Clock,
    title: 'Refill Alerts',
    description: 'Get timely notifications when it\'s time to refill your prescriptions.',
    color: 'yellow'
  },
  {
    icon: Users,
    title: 'Family Sharing',
    description: 'Manage medications for your entire family with multi-user support.',
    color: 'indigo'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50">
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
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
        whileHover={{ y: -5, scale: 1.02 }}
        className="glass-card p-8 h-full transition-all duration-300"
      >
        <div className={`inline-block p-3 rounded-2xl bg-${feature.color}-100 mb-6`}>
          <Icon className={`w-8 h-8 text-${feature.color}-500`} />
        </div>
        <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default Features;