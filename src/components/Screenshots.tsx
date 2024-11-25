import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Plus, Calendar } from 'lucide-react';
import DashboardImage from "../assets/Dashboard.png";
import AddmedicationImage from "../assets/Addmedication.png";
import CheckupImage from "../assets/Checkup.png";

const screenshots = [
  {
    title: "Dashboard View",
    description: "Monitor your daily medications and track your adherence progress",
    icon: Monitor,
    label: "Core View",
    image: DashboardImage,
  },
  {
    title: "Add Medication",
    description: "Simple and intuitive medication entry with detailed tracking options",
    icon: Plus,
    label: "Quick Entry",
    image: AddmedicationImage,
  },
  {
    title: "Health Checkups",
    description: "Stay on top of your medical appointments and schedule follow-ups",
    icon: Calendar,
    label: "Scheduling",
    image: CheckupImage,
  }
];

const Screenshots = () => {
  return (
    <section id="screenshots" className="py-20 bg-accent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-neutral-600 bg-white px-4 py-2 rounded-full">
            App Preview
          </span>
          <h2 className="text-4xl font-bold mt-6 mb-4">
            Experience the
            <span className="heading-gradient block">
              Future of Healthcare
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Experience the simplicity of medication management
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {screenshots.map((screen, index) => (
            <ScreenshotCard key={index} {...screen} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ScreenshotCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  image: string;
  index: number;
}

const ScreenshotCard: React.FC<ScreenshotCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  label, 
  image, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div
        whileHover={{ y: -5 }}
        className={`card overflow-hidden flex ${
          index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
        }`}
      >
        <div className="w-1/3 p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <Icon className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium text-secondary">
              {label}
            </span>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-primary">{title}</h3>
          <p className="text-neutral-600">{description}</p>
        </div>

        <div className="w-2/3 p-6">
          <div className="card overflow-hidden">
            <div className="bg-neutral-100 px-4 py-2 border-b flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 text-center">
                <div className="bg-white/80 mx-auto w-1/2 h-5 rounded text-xs flex items-center justify-center text-neutral-400">
                  medtrack.co.in
                </div>
              </div>
            </div>
            <img
              src={image}
              alt={title}
              className="w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Screenshots;