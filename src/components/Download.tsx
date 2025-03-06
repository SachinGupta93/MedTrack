import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple, PlayCircle, X } from 'lucide-react';

const Download = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPlatform, setModalPlatform] = useState('');

  const handleDownloadClick = (platform: string) => {
    setModalPlatform(platform);
    setIsModalOpen(true);
  };

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

        <motion.div className="flex flex-wrap justify-center gap-6">
          <motion.a
            onClick={(e) => {
              e.preventDefault();
              handleDownloadClick('iOS App Store');
            }}
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors relative overflow-hidden group cursor-pointer"
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
            onClick={(e) => {
              e.preventDefault();
              handleDownloadClick('Google Play Store');
            }}
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors relative overflow-hidden group cursor-pointer"
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
      </div>  {/* Add this line to close the max-w-7xl container div */}
      
            {/* Modal */}
            <AnimatePresence>
              {isModalOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsModalOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center z-40"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-white rounded-2xl p-8 shadow-2xl z-50 max-w-md w-[90%] sm:w-full mx-auto text-center relative"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                      >
                        <X className="w-6 h-6" />
                      </button>
                      <h3 className="text-3xl font-bold mb-4">Coming Soon!</h3>
                      <p className="text-gray-600 mb-6 text-lg">
                        The MedTrack app for {modalPlatform} is currently under development. 
                        We're working hard to bring you the best medication management experience!
                      </p>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="w-full max-w-xs mx-auto bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
                      >
                        Got it!
                      </button>
                    </motion.div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </section>
        );
      };

export default Download;