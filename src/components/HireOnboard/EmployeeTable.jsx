"use client";

import { useState } from "react";
import { Segmented, Table } from "antd";
import { columns, tableData } from "@/assets/data/tableData";
import { GoPlus } from "react-icons/go";
import { CiFilter } from "react-icons/ci";

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
      <div className="py-4 px-5 flex items-center justify-between">
        <div className="hidden lg:block">
          <Segmented
            options={[
              {
                label: (
                  <div className="flex items-center gap-2">
                    <p>All hires</p>
                    <p className="bg-[#FCCE44] px-2 rounded-lg">60</p>
                  </div>
                ),
                value: "all",
              },
              {
                label: (
                  <div className="flex items-center gap-2">
                    <p>Employees</p>
                    <p className="bg-[#FCCE44] px-2 rounded-lg">10</p>
                  </div>
                ),
                value: "employees",
              },
              {
                label: (
                  <div className="flex items-center gap-2">
                    <p>Global Payroll</p>
                    <p className="bg-[#FCCE44] px-2 rounded-lg">20</p>
                  </div>
                ),
                value: "globalPayroll",
              },
              {
                label: (
                  <div className="flex items-center gap-2">
                    <p>Contractors</p>
                    <p className="bg-[#FCCE44] px-2 rounded-lg">20</p>
                  </div>
                ),
                value: "contractors",
              },
              {
                label: (
                  <div className="flex items-center gap-2">
                    <p>Direct Employees</p>
                    <p className="bg-[#FCCE44] px-2 rounded-lg">10</p>
                  </div>
                ),
                value: "directEmployees",
              },
            ]}
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-primary px-5 py-2 rounded-lg font-semibold flex items-center gap-1">
            <span>
              <GoPlus className="text-2xl" />
            </span>
            <span>Add New</span>
          </button>
          <button className="bg-textColor/20 px-5 py-2 rounded-lg font-semibold flex items-center gap-1">
            <span>
              <CiFilter className="text-2xl" />
            </span>
            <span>Filters</span>
          </button>
        </div>
      </div>
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
