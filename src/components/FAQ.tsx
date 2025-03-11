import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is MedTrack?",
    answer: "MedTrack is a comprehensive medication management platform that helps users track their medications, set reminders, and maintain their health records. It combines smart technology with user-friendly design to ensure medication adherence."
  },
  {
    question: "How do I get started with MedTrack?",
    answer: "Getting started is easy! Once the app launches, simply download it from your app store, create an account, and start adding your medications. You can set up personalized reminders and track your medication schedule right away."
  },
  {
    question: "Is my health data secure?",
    answer: "Yes, absolutely! We take data security very seriously. All your health information is encrypted and stored securely following industry-standard protocols. We comply with healthcare data protection regulations to ensure your privacy."
  },
  {
    question: "Can I manage medications for multiple people?",
    answer: "Yes! MedTrack allows you to create and manage multiple profiles, making it perfect for caregivers who need to track medications for family members or patients."
  },
  {
    question: "What devices is MedTrack compatible with?",
    answer: "MedTrack will be available on both iOS and Android devices. We're also developing a web interface for easy access from any computer."
  },
  {
    question: "How do the medication reminders work?",
    answer: "MedTrack sends smart notifications based on your medication schedule. You can customize reminder times, frequency, and notification types. The app also tracks whether you've taken your medications and sends follow-up reminders if needed."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-32 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-neutral-600 bg-neutral-100 px-4 py-2 rounded-full">
            Help Center
          </span>
          <h1 className="text-4xl font-bold mt-6 mb-4">
            Frequently Asked
            <span className="heading-gradient block">
              Questions
            </span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Find answers to common questions about MedTrack and how it can help you manage your medications better.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary" />
                  )}
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: openIndex === index ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-neutral-600">{faq.answer}</p>
                </motion.div>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;