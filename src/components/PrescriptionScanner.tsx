import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Search, Clock, Calendar, Bell, Stethoscope, Phone, MapPin } from 'lucide-react';

const PrescriptionScanner = () => {
  const scannerControls = useAnimationControls();
  const detailsControls = useAnimationControls();
  const reminderControls = useAnimationControls();
  const scanlineControls = useAnimationControls();

  React.useEffect(() => {
    const sequence = async () => {
      // Start with prescription fade in
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Start scanner movement
      scannerControls.start({
        x: [null, 200, 200, -100],
        y: [null, 0, 200, 200],
        transition: { 
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }
      });

      // Start scanline after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      scanlineControls.start({
        top: ["0%", "100%"],
        opacity: [0.5, 0],
        transition: { 
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }
      });

      // Start medicine details after scanner reaches middle
      await new Promise(resolve => setTimeout(resolve, 2000));
      detailsControls.start({
        opacity: [0, 1, 1, 0],
        y: [20, 0, 0, -20],
        transition: { 
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }
      });

      // Start reminder card last
      await new Promise(resolve => setTimeout(resolve, 1500));
      reminderControls.start({
        opacity: [0, 1, 1, 0],
        x: [100, 0, 0, -100],
        transition: { 
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }
      });
    };

    sequence();
  }, [scannerControls, detailsControls, reminderControls, scanlineControls]);

  return (
    <div className="relative w-full max-w-2xl mx-auto h-[500px] my-12">
      {/* Prescription Paper */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-white rounded-lg shadow-xl p-6 border-2 border-neutral-200 flex flex-col"
      >
        <div className="flex-1 space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between border-b pb-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-8 h-8 text-neutral-400" />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-semibold text-primary">Dr. Sarah Johnson</div>
                <div className="text-xs text-neutral-500">MD, Cardiologist</div>
                <div className="text-xs text-neutral-500">License: MED-2024-1234</div>
              </div>
            </div>
            <div className="text-xs text-neutral-500 space-y-1">
              <div className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>123 Medical Center Ave</span>
              </div>
              <div className="text-right">Date: {new Date().toLocaleDateString()}</div>
            </div>
          </div>

          {/* Patient Info */}
          <div className="border-b pb-2">
            <div className="text-xs text-neutral-500">Patient Details:</div>
            <div className="text-sm">John Smith, Age: 45, ID: PT-98765</div>
          </div>
          
          {/* Prescription Items */}
          <div className="space-y-3">
            <div className="text-xs font-medium text-neutral-500">Rx</div>
            {[
              {
                med: "Amoxicillin 500mg",
                dosage: "1 tablet",
                freq: "3 times daily",
                duration: "7 days"
              },
              {
                med: "Ibuprofen 400mg",
                dosage: "1 tablet",
                freq: "as needed",
                duration: "5 days"
              },
              {
                med: "Omeprazole 20mg",
                dosage: "1 capsule",
                freq: "once daily",
                duration: "30 days"
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 text-sm">
                <div className="w-8">{i + 1}.</div>
                <div className="flex-1 space-y-1">
                  <div className="font-medium">{item.med}</div>
                  <div className="text-xs text-neutral-500">
                    {item.dosage} - {item.freq} - for {item.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t space-y-2">
          <div className="text-xs text-neutral-500">Next Follow-up: 2 weeks</div>
          <div className="text-xs text-neutral-500">Digital Signature: Dr.SJohnson-2024</div>
        </div>
      </motion.div>

      {/* Magnifying Glass */}
      <motion.div
        initial={{ x: -100, y: 0 }}
        animate={scannerControls}
        className="absolute z-10"
      >
        <div className="relative">
          <Search className="w-16 h-16 text-secondary" />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-secondary/20 rounded-full"
          />
        </div>
      </motion.div>

      {/* Floating Medicine Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={detailsControls}
        className="absolute right-0 top-1/4 bg-white p-4 rounded-lg shadow-lg border-2 border-secondary/20 w-64"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-secondary">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Medicine Details</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="font-medium">Amoxicillin 500mg</div>
            <div className="text-neutral-500">Take 1 tablet</div>
            <div className="text-neutral-500">3 times daily with meals</div>
            <div className="text-neutral-500">Duration: 7 days</div>
          </div>
        </div>
      </motion.div>

      {/* Reminder Card */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={reminderControls}
        className="absolute left-0 bottom-1/4 bg-white p-4 rounded-lg shadow-lg border-2 border-primary/20 w-64"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-primary">
            <Bell className="w-4 h-4" />
            <span className="text-sm font-medium">Reminder Set</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-neutral-400" />
              <span>Daily at 8:00 AM, 2:00 PM, 8:00 PM</span>
            </div>
            <div className="text-neutral-500">Starting today</div>
            <div className="text-neutral-500">7 days duration</div>
          </div>
        </div>
      </motion.div>

      {/* Scanning Effect */}
      <motion.div
        initial={{ top: 0, opacity: 0 }}
        animate={scanlineControls}
        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-secondary via-secondary/50 to-transparent"
      />
    </div>
  );
};

export default PrescriptionScanner;