import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";
import { format } from "date-fns";
import AttendanceModal from "./AttendanceModal"; // Ensure correct path
import CalendarModal from "./calendarModal";
import { Button } from "@/components/ui/button";

const AttendanceCard = ({ data }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [notification, setNotification] = useState("");
  const { totalPresent, totalAbsent, totalLeave, attendanceDetails } = data;

  const handleShowCalendar = () => {
    setShowCalendarModal(true);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowAttendanceModal(true);
    setNotification(`Selected date: ${format(new Date(date), "MMMM d, yyyy")}`);
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  const closeAttendanceModal = () => {
    setShowAttendanceModal(false);
  };

  const closeCalendarModal = () => {
    setShowCalendarModal(false);
  };

  return (
    <motion.div
      className="rounded-xl  bg-white/50 shadow-2xl p-6 max-w-3xl w-full  "
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-2xl font-semibold ">Company Attendance Summary</h2>
        <Button onClick={handleShowCalendar} className="">
          <FaCalendarAlt className="mr-2" />
          Calendar
        </Button>
      </div>

      {/* Notification Pop-up */}
      {notification && (
        <div className="bg-blue-100 text-blue-800 p-3 rounded-md mb-4">
          {notification}
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="flex items-center justify-between p-4 bg-green-100 rounded-lg">
          <FaCheckCircle className="text-green-600 text-3xl" />
          <div>
            <p className="text-lg font-medium text-gray-700">Present</p>
            <p className="text-2xl font-semibold text-green-600">
              {totalPresent}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-red-100 rounded-lg">
          <FaTimesCircle className="text-red-600 text-3xl" />
          <div>
            <p className="text-lg font-medium text-gray-700">Absent</p>
            <p className="text-2xl font-semibold text-red-600">{totalAbsent}</p>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-yellow-100 rounded-lg">
          <FaCalendarAlt className="text-yellow-600 text-3xl" />
          <div>
            <p className="text-lg font-medium text-gray-700">Leave</p>
            <p className="text-2xl font-semibold text-yellow-600">
              {totalLeave}
            </p>
          </div>
        </div>
      </div>

      <div>
        <Button
          onClick={() => setShowAttendanceModal(true)}
          className="flex items-center justify-center px-4 py-2  rounded-md shadow-md  transition"
        >
          Show More Details
          <FaArrowRight className="ml-2" />
        </Button>
      </div>

      {showAttendanceModal && (
        <AttendanceModal
          isOpen={showAttendanceModal}
          closeModal={closeAttendanceModal}
          selectedDate={selectedDate}
          attendanceDetails={attendanceDetails.filter(
            (att) =>
              format(new Date(att.date), "yyyy-MM-dd") ===
              format(new Date(selectedDate), "yyyy-MM-dd")
          )}
        />
      )}

      {/* Calendar Modal */}
      <CalendarModal
        isOpen={showCalendarModal}
        closeModal={closeCalendarModal}
        onDateClick={handleDateClick}
      />
    </motion.div>
  );
};

export default AttendanceCard;
