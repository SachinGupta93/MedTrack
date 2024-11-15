import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Plus, Calendar } from 'lucide-react';
import DashboardImage from "../assets/Dashboard.png";
import AddmedicationImage from "../assets/Addmedication.png";
import CheckupImage from "../assets/Checkup.png";

const Screenshots = () => {
  const screenshots = [
    {
      title: "Dashboard View",
      description: "Monitor your daily medications and track your adherence progress",
      icon: Monitor,
      label: "Core View",
      image: DashboardImage, // Use the imported image
    },
    {
      title: "Add Medication",
      description: "Simple and intuitive medication entry with detailed tracking options",
      icon: Plus,
      label: "Quick Entry",
      image: AddmedicationImage, // Use the imported image
    },
    {
      title: "Health Checkups",
      description: "Stay on top of your medical appointments and schedule follow-ups",
      icon: Calendar,
      label: "Scheduling",
      image: CheckupImage, // Use the imported image
    }
  ];

  return (
    <section
      id="screenshots" // Add this line
      className="py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >
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
              App Preview
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the simplicity of medication management
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
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
  image: string; // Added image property type
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
      className="group"
    >
      <motion.div
        whileHover={{ scale: 1.05 }} // Apply a slight zoom-in effect
        className={`relative bg-white rounded-2xl overflow-hidden shadow-lg flex ${
          index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
        }`}
      >
        {/* Content Section */}
        <div className="w-1/3 p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <Icon className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">
              {label}
            </span>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        {/* Screenshot Section */}
        <div className="w-2/3 p-6">
          <div className="relative rounded-lg overflow-hidden shadow-md">
            {/* Browser-like header */}
            <div className="bg-gray-100 px-4 py-2 border-b flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 text-center">
                <div className="bg-white/80 mx-auto w-1/2 h-5 rounded text-xs flex items-center justify-center text-gray-400">
                  medtrack.app
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
