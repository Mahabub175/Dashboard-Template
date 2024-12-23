"use client";

import { useState } from "react";
import { Table } from "antd";
import { columns, tableData } from "@/assets/data/tableData";

const EmployeeTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
  };

  return (
    <div className="bg-white mt-10">
      <Table
        rowSelection={rowSelection}
        dataSource={tableData}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default EmployeeTable;
