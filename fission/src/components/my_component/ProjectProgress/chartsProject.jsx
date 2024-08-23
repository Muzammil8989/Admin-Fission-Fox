import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Typography, Box } from "@mui/material";

const pieData = [
  { name: "Successful", value: 2 },
  { name: "Pending", value: 2 },
  { name: "Late", value: 1 },
];

const COLORS = ["#82ca9d", "#ffc658", "#ff6b6b"];

function ProjectChart() {
  return (
    <div className="w-1/2  bg-white/50 ml-6 shadow-2xl">
    <Box sx={{ padding: 3, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Project Progress Overview
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Box>
    </div>
  );
}

export default ProjectChart;
