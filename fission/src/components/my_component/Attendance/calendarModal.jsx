// CalendarModal.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { Calendar } from '@/components/ui/calendar'; // Import your custom calendar component

const CalendarModal = ({ isOpen, closeModal, onDateClick }) => {
  if (!isOpen) return null;

  const handleDayClick = (date) => {
    onDateClick(date); // Call the function to handle date click
    closeModal(); // Close the modal after selecting a date
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
      <motion.div
        className="bg-white dark:bg-slate-600 rounded-xl shadow-lg p-6 max-w-lg w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Select a Date</h3>
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>

        {/* Custom Calendar Component */}
        <Calendar onDayClick={handleDayClick} showOutsideDays className="p-3" />
      </motion.div>
    </div>
  );
};

export default CalendarModal;
