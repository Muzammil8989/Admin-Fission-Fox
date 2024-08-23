import React from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Employee() {
  const columns = [
    { name: "Employee ID", label: "Employee ID" },
    { name: "Name", label: "Name" },
    { name: "City", label: "City" },
    { name: "Date of Joining", label: "Date of Joining" },
    { name: "Work Type", label: "Work Type" },
    { name: "Salary", label: "Salary" },
    { name: "Project Allotment", label: "Project Allotment" },
    { name: "Successful Projects", label: "Successful Projects" },
    { name: "Failed Projects", label: "Failed Projects" },
    { name: "Pending Projects", label: "Pending Projects" },
  ];

  const data = [
    {
      "Employee ID": 1,
      "Name": "Joe James",
      "City": "Yonkers",
      "Date of Joining": "2022-01-15",
      "Work Type": "EMR",
      "Salary": "$70,000",
      "Project Allotment": "Project A",
      "Successful Projects": 5,
      "Failed Projects": 1,
      "Pending Projects": 2,
    },
    {
      "Employee ID": 2,
      "Name": "John Walsh",
      "City": "Hartford",
      "Date of Joining": "2022-02-10",
      "Work Type": "Stack Developer",
      "Salary": "$85,000",
      "Project Allotment": "Project B",
      "Successful Projects": 3,
      "Failed Projects": 0,
      "Pending Projects": 1,
    },
    // Add more employee data as needed
  ];

  const options = {
    filterType: 'checkbox',
    selectableRows: 'none',
    elevation: 0,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20],
    onRowClick: (rowData, rowMeta) => {
      console.log('Row clicked:', rowData, rowMeta);
    },
  };

  const getMuiTheme = () => createTheme({
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
    },
    palette: {
       background: {
           paper: '#1e293b',
           default: '#0f172a',
       },
       mode: 'dark',
    },
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employee Information</h1>
      <ThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </div>
  );
}

export default Employee;
