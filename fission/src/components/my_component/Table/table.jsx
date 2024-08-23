import React from "react";
import MUIDataTable from "mui-datatables";

 function Table() {
  const columns = [
    "S.No",
    "User Name",
    "Project Name",
    {
      name: "Status",
      options: {
        customBodyRender: (value) => {
          let color;
          switch (value) {
            case "Success":
              color = "text-green-500"; // Green for success
              break;
            case "Pending":
              color = "text-yellow-500"; // Yellow for pending
              break;
            case "Late":
              color = "text-red-500"; // Red for late
              break;
            default:
              color = "text-gray-500"; // Default color
          }
          return <span className={color}>{value}</span>;
        },
      },
    },
    "Remarks",
    "Days to Complete",
    "Developer", // New column for Developer
    "Tech Stack", // New column for Tech Stack
  ];

  const data = [
    [1, "Alice Johnson", "Project Alpha", "Success", "Completed on time", 30, "John Doe", "MERN"],
    [2, "Bob Smith", "Project Beta", "Pending", "Awaiting client feedback", 15, "Jane Smith", "React"],
    [3, "Charlie Brown", "Project Gamma", "Late", "Delayed due to resource unavailability", 10, "Emily Davis", "MERN"],
    [4, "Diana Prince", "Project Delta", "Success", "Delivered ahead of schedule", 20, "Michael Brown", "React"],
  ];

  const options = {
    filterType: "checkbox",
    selectableRows: "none",
    elevation: 0,
    onRowClick: (rowData, rowMeta) => {
      console.log("Row clicked:", rowData, rowMeta);
    },
  };

  return (
    <div className="bg-transparent py-10 grid place-items-center">
      <div className="w-full">
        <MUIDataTable
          title={"Project Information"}
          className="bg-white shadow-md rounded-lg"
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
}

export default Table;
