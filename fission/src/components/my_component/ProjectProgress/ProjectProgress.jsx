import React, { useState } from "react";
import { FaCheckCircle, FaHourglassHalf, FaTimesCircle } from "react-icons/fa";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";

const projectsData = {
  successful: [
    { id: 1, title: "Project A", status: "Success" },
    { id: 2, title: "Project B", status: "Success" },
  ],
  pending: [
    { id: 3, title: "Project C", status: "Pending" },
    { id: 4, title: "Project D", status: "Pending" },
  ],
  late: [{ id: 5, title: "Project E", status: "Late" }],
};

function ProjectProgress() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  const openModal = (type) => {
    if (type === "successful") {
      setSelectedProjects(projectsData.successful);
    } else if (type === "pending") {
      setSelectedProjects(projectsData.pending);
    } else if (type === "late") {
      setSelectedProjects(projectsData.late);
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Data for the pie chart
  const pieData = [
    { name: "Successful", value: projectsData.successful.length },
    { name: "Pending", value: projectsData.pending.length },
    { name: "Late", value: projectsData.late.length },
  ];

  // Data for the regression chart (mock data)
  const regressionData = [
    { name: "Week 1", count: 5 },
    { name: "Week 2", count: 10 },
    { name: "Week 3", count: 15 },
    { name: "Week 4", count: 20 },
  ];

  return (
    <div className="p-6 mt-8">
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Successful Projects */}
        <motion.div
          className="bg-green-400 p-4 rounded-lg shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <FaCheckCircle className="mr-2" />
            Successful Projects
          </h2>
          <p className="text-2xl font-bold">{projectsData.successful.length}</p>
          <motion.button
            onClick={() => openModal("successful")}
            className="mt-4 px-4 py-2 bg-white text-green-500 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Show Details
          </motion.button>
        </motion.div>

        {/* Pending Projects */}
        <motion.div
          className="bg-yellow-400 p-4 rounded-lg shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <FaHourglassHalf className="mr-2" />
            Pending Projects
          </h2>
          <p className="text-2xl font-bold">{projectsData.pending.length}</p>
          <motion.button
            onClick={() => openModal("pending")}
            className="mt-4 px-4 py-2 bg-white text-yellow-600 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Show Details
          </motion.button>
        </motion.div>

        {/* Late Projects */}
        <motion.div
          className="bg-red-400 p-4 rounded-lg shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <FaTimesCircle className="mr-2" />
            Late Projects
          </h2>
          <p className="text-2xl font-bold">{projectsData.late.length}</p>
          <motion.button
            onClick={() => openModal("late")}
            className="mt-4 px-4 py-2 bg-white text-red-600 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Show Details
          </motion.button>
        </motion.div>
      </div>

      {/* Modal for Project Details */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
          content: { color: "black" },
        }}
      >
        <AnimatePresence>
          {modalIsOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">Project Details</h2>
              <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2">ID</th>
                    <th className="border border-gray-300 p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedProjects.map((project) => (
                    <tr key={project.id}>
                      <td className="border border-gray-300 p-2">
                        {project.id}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {project.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </div>
  );
}

export default ProjectProgress;
