
import { FaTrashAlt, FaEllipsisV } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Modal } from "bootstrap";
import CreateDetailsModal from "./CreateDetailsModal";

const LeaveRequestTable = ({ data }) => {

  // Menu Modal
  const [showDetailModal, setShowDetailModal] = useState(false);
  const detailModalRef = useRef(null);
  const detailModalInstance = useRef(null);


    useEffect(() => {
      if (detailModalInstance.current) {
        if (showDetailModal) {
          detailModalInstance.current.show();
        } else {
          detailModalInstance.current.hide();
        }
      }
    }, [showDetailModal]);
  
    // 1. Initialize the Bootstrap Modal instance when the component mounts
    useEffect(() => {
      
      if (detailModalRef.current) {
        detailModalInstance.current = new Modal(detailModalRef.current, {});
      }
  
    }, []);

  // Helper to get badge styling based on status
  const getStatusBadge = (status) => {
    const lowerStatus = status.toLowerCase();

    if (lowerStatus.includes("approve") && !lowerStatus.includes("disapprove")) {
      return "bg-success-subtle text-success border border-success-subtle"; // ✅ Approved
    } else if (lowerStatus.includes("pending")) {
      return "bg-warning-subtle text-warning border border-warning-subtle"; // 🟡 Pending
    } else if (lowerStatus.includes("disapprove")) {
      return "bg-danger-subtle text-danger border border-danger-subtle"; // 🔴 Disapproved
    } else {
      return "bg-secondary-subtle text-secondary border border-secondary-subtle";
    }
  };

  return (
    <div className="table-responsive mt-4">
      <table className="table table-bordered table-hover align-middle text-center">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Staff</th>
            <th>Leave Type</th>
            <th>Leave Date</th>
            <th>Days</th>
            <th>Apply Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="fw-semibold">{item.staff}</td>
                <td>{item.leaveType}</td>
                <td>{item.leaveDate}</td>
                <td>{item.days}</td>
                <td>{item.applyDate}</td>
                <td>
                  <span className={`badge px-3 py-2 rounded-pill fw-semibold ${getStatusBadge(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                
                <td>
                  <div className="d-flex justify-content-center gap-2">
                    <button className="btn btn-sm btn-outline-secondary" title="More Options"
                     onClick={() => {setShowDetailModal(true);}}
                    >
                      <IoMenu />
                    </button>
                    <button className="btn btn-sm btn-outline-danger" title="Delete">
                      <FaTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-muted py-4">
                No leave records found
              </td>
            </tr>
          )}
        </tbody>
      </table>

          <div
            className="modal fade create-appointment-modal"
            ref={detailModalRef}
            onHide={() => setShowDetailModal(false)}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-xl">
              <CreateDetailsModal 
                handleCloseModal={() => setShowDetailModal(false)}
              />
            </div>
          </div>
    </div>
  );
};

export default LeaveRequestTable;
