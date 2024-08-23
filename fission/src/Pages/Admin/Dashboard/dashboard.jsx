import React, { useState } from "react";
import { Tooltip } from "antd";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../../../components/ui/dropdown-menu";
import { FaChevronDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import AttendanceCard from "@/components/my_component/Attendance/AttendanceCard";
import ProjectProgress from "@/components/my_component/ProjectProgress/ProjectProgress";
import { Calendar } from "@/components/ui/calendar"; // Your custom calendar component
import dayjs from "dayjs"; // Import dayjs for date formatting
import ProjectChart from "@/components/my_component/ProjectProgress/chartsProject";

import { attendanceData } from "../../../Dummy_data/attendanceData";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(dayjs()); // Initialize with current date
  const [error, setError] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const summaryData = {
    totalPresent: attendanceData.filter((item) => item.status === "present").length,
    totalAbsent: attendanceData.filter((item) => item.status === "absent").length,
    totalLeave: attendanceData.filter((item) => item.status === "leave").length,
    attendanceDetails: attendanceData,
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    // Perform search logic here
  };

  const handleDateChange = (date) => {
    if (date) {
      setSelectedDate(dayjs(date)); // Set selected date
      setError(false); // Reset error if date is valid
      setIsCalendarOpen(false); // Close the calendar after selecting a date
    } else {
      setSelectedDate(null);
      setError(true); // Set error if date is invalid
    }
  };

  return (
    <div>
      <div className="text-3xl font-bold mb-6">Dashboard</div>

      <div className="flex justify-center items-center mt-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="relative">
              <Button
                className="px-8 py-4 bg-transparent rounded text-[#FDA33C]"
                onClick={() => setIsCalendarOpen(!isCalendarOpen)} // Toggle calendar visibility
              >
                {selectedDate.format("dddd D MMMM")} {/* Display the selected date */}
              </Button>
              <FaChevronDown className="absolute top-1/2 right-1 -translate-y-1/2 text-[#FDA33C]/80" />
              {error && (
                <Tooltip
                  title="Please select a valid date!"
                  placement="bottom"
                  arrow
                />
              )}
            </div>
          </DropdownMenuTrigger>
          {isCalendarOpen && (
            <DropdownMenuContent className="p-4">
              <Calendar
                onDateClick={handleDateChange} // Pass the date change handler
                value={selectedDate.toDate()} // Pass the selected date as a native Date object
                mode="single"
              />
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      </div>
      <ProjectProgress />
      <div className="flex w-full ">
      
      <AttendanceCard data={summaryData} />

      <ProjectChart />
      </div>
    </div>
  );
};

export default Dashboard;
