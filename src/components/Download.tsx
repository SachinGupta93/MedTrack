import React from 'react';
import { motion } from 'framer-motion';
import { Apple, PlayCircle } from 'lucide-react';

const Download = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Download MedTrack
            <span className="text-blue-600">.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Join thousands waiting to revolutionize their medication management experience.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors relative overflow-hidden group"
          >
            <Apple className="w-8 h-8" />
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-xl font-semibold">App Store</div>
            </div>
            <div className="absolute top-2 right-2">
              <span className="px-2 py-1 text-xs bg-blue-600 text-white rounded-full">
                Coming Soon
              </span>
            </div>
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors relative overflow-hidden group"
          >
            <PlayCircle className="w-8 h-8" />
            <div className="text-left">
              <div className="text-xs">GET IT ON</div>
              <div className="text-xl font-semibold">Google Play</div>
            </div>
            <div className="absolute top-2 right-2">
              <span className="px-2 py-1 text-xs bg-blue-600 text-white rounded-full">
                Coming Soon
              </span>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;