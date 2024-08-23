import React from 'react';
import { Modal, Table, Input } from 'antd';
import { format } from 'date-fns';
import { useState } from 'react';

const AttendanceModal = ({ isOpen, closeModal, selectedDate, attendanceDetails }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter attendance details based on the search term
  const filteredDetails = attendanceDetails.filter(att => 
    att.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name), // Sorting
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => (
        <span
          className={
            text === 'present' 
              ? 'text-green-500' 
              : text === 'absent' 
              ? 'text-red-500' 
              : 'text-yellow-500'
          }
        >
          {text.charAt(0).toUpperCase() + text.slice(1)}
        </span>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date) => format(new Date(date), 'MMMM d, yyyy'),
      sorter: (a, b) => new Date(a.date) - new Date(b.date), // Sorting by date
    },
  ];

  return (
    <Modal
      title={`Attendance Details for ${selectedDate}`}
      visible={isOpen}
      onCancel={closeModal}
      footer={null}
      width={600}
    >
      <Input
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: 16 }} // Add some margin
      />
      <Table
        dataSource={filteredDetails} // Use filtered data for the table
        columns={columns}
        rowKey="name"
        pagination={false}
      />
    </Modal>
  );
};

export default AttendanceModal;
