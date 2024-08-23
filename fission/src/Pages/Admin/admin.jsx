import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaCogs,
  FaUsers,
  FaRegUserCircle,
} from "react-icons/fa";
import { BsTextIndentLeft, BsTextIndentRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { Tooltip } from "antd"; // Import Tooltip

import Dashboard from "./Dashboard/dashboard";
import Project from "./Project/project";
import Setting from "./Setting/setting";
import Employee from "./Employee/employee";


export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tabs = [
    { name: "dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "users", label: "Users", icon: <FaUsers /> },
    { name: "projects", label: "Projects", icon: <FaCogs /> },
    { name: "settings", label: "Settings", icon: <FaCogs /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "users":
        return <Employee/>;
      case "projects":
        return <Project />;
      case "settings":
        return <Setting />;
      default:
        return <Dashboard />;
    }
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    console.log("Logged out");
  };

  return (
    <div className="flex h-screen">
      <motion.div
        className={`shadow-sm bg-[ #F8F8FF] dark:bg-gray-900 border-r-2 border-[#FDA33C] h-full px-2 py-8 relative`}
        initial={{ width: "0%" }}
        animate={{ width: collapsed ? "5rem" : "18rem" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-center items-center mb-8 mt-3">
          <img
            src="https://fissionfox.com/assets/images/logos/logo.png"
            alt="Fission Fox"
            className={`transition-all duration-300 ${
              collapsed ? "w-10 h-10" : "w-56 h-14"
            }`}
          />
        </div>

        <button
          className="absolute top-5 right-5 text-2xl"
          onClick={toggleCollapse}
        >
          {collapsed ? <BsTextIndentLeft /> : <BsTextIndentRight />}
        </button>

        <ul className="flex flex-col gap-6 mt-10">
          {tabs.map((tab) => (
            <li key={tab.name}>
              <Tooltip title={collapsed ? tab.label : ""} placement="right">
                <motion.button
                  className={`flex rounded-3xl font-semibold items-center gap-4 text-lg w-full text-left py-3 px-4 ${
                    activeTab === tab.name ? "bg-[#FDA33C]" : ""
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-semibold">{tab.icon}</span>
                  {!collapsed && <span>{tab.label}</span>}
                </motion.button>
              </Tooltip>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-2">
          <Tooltip title={collapsed ? "Profile" : ""} placement="right">
            <button
              className="flex justify-center items-center gap-4 text-2xl w-full text-left py-3 px-4"
              onClick={handleProfileClick}
            >
              <span>
                <FaRegUserCircle />
              </span>
              {!collapsed && <span>Profile</span>}
            </button>
          </Tooltip>

          {isDropdownOpen && (
            <div
              className={`absolute bottom-16 bg-white shadow-lg rounded-md w-full ${
                collapsed ? "left-14 bottom-20" : "left-20"
              }`}
            >
              <button
                className="flex justify-center items-center gap-4 text-red-600 text-lg w-full text-left py-2 px-4 hover:bg-red-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </motion.div>

      <div className="flex-1 p-10">{renderContent()}</div>
    </div>
  );
}
