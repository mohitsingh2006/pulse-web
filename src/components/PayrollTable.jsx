import React from "react";
import { FaEdit, FaSyncAlt } from "react-icons/fa";

const PayrollTable = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered align-middle text-center table-hover">
        <thead className="table-light">
          <tr className="text-center align-middle">
            <th>#</th>
            <th>Staff ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="fw-semibold">{item.staffId}</td>
                <td className="text-start">{item.name}</td>
                <td>{item.role}</td>
                <td>{item.department || "-"}</td>
                <td>{item.designation || "-"}</td>
                <td>{item.phone}</td>
                <td>
                  <span
                    className={`badge px-3 py-2 rounded-pill fw-semibold ${
                      item.status === "Paid"
                        ? "bg-success-subtle text-success border border-success-subtle"
                        : item.status === "Generated"
                        ? "bg-warning-subtle text-warning border border-warning-subtle"
                        : "bg-danger-subtle text-danger border border-danger-subtle"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                {/* ✅ Action Column */}
                <td>
                  {item.status === "Not Generated" ? (
                    <button className="btn btn-sm btn-danger d-flex align-items-center gap-2">
                      <FaSyncAlt /> Generate Payroll
                    </button>
                  ) : (
                    <div className="d-flex justify-content-center gap-2">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        title="Regenerate Payroll"
                      >
                        <FaSyncAlt />
                      </button>
                      <button
                        className="btn btn-sm btn-outline-success"
                        title="Edit Payroll"
                      >
                        <FaEdit />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center py-4 text-muted">
                No payroll records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PayrollTable;
