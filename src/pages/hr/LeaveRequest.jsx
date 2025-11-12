import Layout from "../../_layout";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { IoListOutline } from "react-icons/io5";
import React, { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";
import LeaveRequestTable from "../../components/LeaveRequestTable";
import { CiFilter, CiSearch } from "react-icons/ci";
import CreateLeaveModal from "../../components/CreateLeaveModal";

const StaffAttendance = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const leaveModalRef = useRef(null);
  const leaveModalInstance = useRef(null);

  const leaveData = [
    {
      staff: "Super Admin (9001)",
      leaveType: "Sick Leave",
      leaveDate: "10/12/2025 - 10/16/2025",
      days: 5,
      applyDate: "10/12/2025",
      status: "Pending",
    },
    {
      staff: "Super Admin (9001)",
      leaveType: "Privilege Leave",
      leaveDate: "09/12/2025 - 09/15/2025",
      days: 4,
      applyDate: "09/10/2025",
      status: "Disapproved",
    },
    {
      staff: "Super Admin (9001)",
      leaveType: "Casual Leave",
      leaveDate: "08/07/2025 - 08/08/2025",
      days: 2,
      applyDate: "08/06/2025",
      status: "Approve By Jason Abbot (9017)",
    },
  ];

  useEffect(() => {
    if (leaveModalInstance.current) {
      if (showLeaveModal) {
        leaveModalInstance.current.show();
      } else {
        leaveModalInstance.current.hide();
      }
    }

  }, [showLeaveModal]);

  // 1. Initialize the Bootstrap Modal instance when the component mounts
  useEffect(() => {
    
    if (leaveModalRef.current) {
      leaveModalInstance.current = new Modal(leaveModalRef.current, {});
    }

  }, []);

  return (
    <Layout>
      <main className="px-3 pb-5 appointment-page">
        <div className="row">
          <div className="col-12">
            <div className="bg-white graph-card p-4">
              <div className="d-flex justify-content-between align-content-center table-header mb-4 ">
                <div className="d-flex align-content-center">
                  <h4>My Leaves</h4>
                </div>

                <div>
                  <div className="d-flex align-content-center ">
                    <div className="d-flex gap-2">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {setShowLeaveModal(true);}}
                      >
                        <GoPlus size={20} /> Apply Leave
                      </button>

                      <Link to="/approveleave" className="btn btn-primary">
                        <IoListOutline size={20} /> Approve Leave Request
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3 d-flex gap-3 search-box">
                <div className="position-relative">
                  <span className="input-group-text bg-white">
                    <CiSearch size={20} />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search...."
                  />
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12">
                  <LeaveRequestTable data={leaveData} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
          <div
            className="modal fade create-appointment-modal"
            ref={leaveModalRef}
            onHide={() => setShowLeaveModal(false)}
            data-bs-backdrop="static"
            dataBsKeyboard="false"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-xl">
              <CreateLeaveModal 
                handleCloseModal={() => setShowLeaveModal(false)}
              />
            </div>
          </div>
      </main>
    </Layout>
  );
};
export default StaffAttendance;
