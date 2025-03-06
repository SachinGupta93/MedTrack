import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
            Legal
          </span>
          <h1 className="text-4xl font-bold mt-6 mb-4">
            Privacy
            <span className="heading-gradient block">
              Policy
            </span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we collect, use, and protect your data.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="prose prose-lg">
            <p className="text-lg text-neutral-600 mb-8">
              Last updated: March 15, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-neutral-600">
                VISTORA TRAYANA LLP ("we," "our," or "us") operates the MedTrack application (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information Collection</h2>
              <p className="text-neutral-600">
                We collect several different types of information for various purposes to provide and improve our Service to you:
              </p>
              <ul className="list-disc ml-6 mt-4 text-neutral-600">
                <li>Personal Data: Name, email address, phone number</li>
                <li>Health Data: Medication information, schedules</li>
                <li>Usage Data: App interaction, features used</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Use of Data</h2>
              <p className="text-neutral-600">
                We use the collected data for various purposes:
              </p>
              <ul className="list-disc ml-6 mt-4 text-neutral-600">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-neutral-600">
                The security of your data is important to us. We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
              <p className="text-neutral-600">
                You have certain rights regarding your personal data:
              </p>
              <ul className="list-disc ml-6 mt-4 text-neutral-600">
                <li>Right to access your data</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to delete your data</li>
                <li>Right to restrict processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
              <p className="text-neutral-600">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none mt-4 text-neutral-600">
                <li>Email: support@medtrack.co.in</li>
                <li>Address: VISTORA TRAYANA LLP, Chilkanagar, Uppal, Hyderabad, Telangana 500039</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;