import React, { useState, useEffect, useRef } from "react";
import { IoListOutline } from "react-icons/io5";
import Layout from "../../_layout";
import LeaveRequestTable from "../../components/LeaveRequestTable";
import CreateLeaveModal from "../../components/CreateLeaveModal";
import CreateRequestModal from "../../components/CreateRequestModal";
import { Modal } from "bootstrap";
import { Link } from "react-router-dom";
import { FaEllipsis } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import CreateMenuModal from "../../components/CreateMenuModal";

const ApproveLeave = () => {

// Menu Modal
  const [showMenuModal, setMenuModal] = useState(false);
  const menuModalRef = useRef(null);
  const menuModalInstance = useRef(null);

//Add  Request Leave Modal
  const [showAddRequestModal, setShowAddRequestModal] = useState(false);
  const addRequestModalRef = useRef(null);
  const addRequestModalInstance = useRef(null);

  const leaveData = [
    {
      staff: "Jason Abbot (Admin - 9017)	",
      leaveType: "Maternity Leave",
      leaveDate: "10/16/2025 - 10/20/2025",
      days: 5,
      applyDate: "10/15/2025",
      status: "Pending By Super Admin (9001)",
      status: "Status Date"
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
   
    //Leave Request Modal
    useEffect(() => {
      console.log('JJJ');
      
      if (menuModalInstance.current) {
        if (showMenuModal) {
          menuModalInstance.current.show();
        } else {
          menuModalInstance.current.hide();
        }
      }


      if (addRequestModalInstance.current) {
        if (showAddRequestModal) {
          addRequestModalInstance.current.show();
        } else {
          addRequestModalInstance.current.hide();
        }
      }
  
    }, [showAddRequestModal,showMenuModal]);

  useEffect(() => {
       if (menuModalRef.current) {
        menuModalInstance.current = new Modal(menuModalRef.current, {});
      }

      
      if (addRequestModalRef.current) {
        addRequestModalInstance.current = new Modal(addRequestModalRef.current, {});
      }
  
    }, []);

  
  const [data, setData] = useState([]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
  return (
    <Layout>
      <main className="px-3 pb-5 appointment-page">
        <div className="row ">
          <div className="col-12">
            <div className="bg-white graph-card p-4">
              <div className="d-flex justify-content-between align-content-center table-header mb-4 ">
                <div className="d-flex align-content-center">
                  <h4>Approve Leave Request</h4>
                </div>

                <div>
                  <div className="d-flex align-content-center ">
                    <div className="d-flex gap-2">
                      <button className="btn btn-primary"
                      onClick={() => {setShowAddRequestModal(true);}}
                      > 
                        <IoListOutline size={20} /> Add Leave Request
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3 d-flex gap-3 search-box">
                <div className="position-relative">
                  <span className="input-group-text bg-white"></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search...."
                  />
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12">
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
                            <th>Status Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td className="fw-semibold">Jason  Abbot (Admin - 9017)</td>
                            <td>Maternity Leave</td>
                            <td>10/16/2025 - 10/20/2025</td>
                            <td>5</td>
                            <td>10/15/2025</td>
                             <td>Pending By Super Admin (9001)	</td>
                            <td>09/03/2025</td>
                            <td>
                                 <div className="d-flex justify-content-center gap-2">
                                  <button className="btn btn-sm btn-outline-secondary" title="More Options"
                                  onClick={() => {setMenuModal(true);}}
                                  >
                                    <IoMenu />
                                  </button>
                                  <button className="btn btn-sm btn-outline-danger" title="Delete" 
                                  >
                                    <FaTrashAlt />
                                  </button>
                              </div>
                            </td>
                          </tr>

                           <tr>
                            <td>2</td>
                            <td className="fw-semibold">Super Admin  (9001))</td>
                            <td>Sick Leave</td>
                            <td>10/16/2025 - 10/20/2025	</td>
                            <td>5</td>
                            <td>10/15/2025</td>
                             <td>Pending By Super Admin (9001)</td>
                            <td>09/03/2025</td>
                            <td>
                                 <div className="d-flex justify-content-center gap-2">
                                  <button className="btn btn-sm btn-outline-secondary" title="More Options">
                                    <IoMenu />
                                  </button>
                                  <button className="btn btn-sm btn-outline-danger" title="Delete">
                                    <FaTrashAlt />
                                  </button>
                              </div>
                            </td>
                          </tr>

                           <tr>
                            <td>3</td>
                            <td className="fw-semibold">Harry Grant (Pharmacist - 9012)	</td>
                            <td>Casual Leave</td>
                            <td>110/27/2025 - 10/30/2025</td>
                            <td>5</td>
                            <td>10/26/2025</td>
                             <td>Pending By Super Admin (9001)</td>
                            <td>09/03/2025</td>
                            <td>
                                  <div className="d-flex justify-content-center gap-2">
                                  <button className="btn btn-sm btn-outline-secondary" title="More Options">
                                    <IoMenu />
                                  </button>
                                  <button className="btn btn-sm btn-outline-danger" title="Delete">
                                    <FaTrashAlt />
                                  </button>
                              </div>
                            </td>
                          </tr>

                           <tr>
                            <td>4</td>
                            <td className="fw-semibold">John Hook (Radiologist - 9006)	</td>
                            <td>Privilege Leave	</td>
                            <td>10/06/2025 - 10/10/2025	</td>
                            <td>5</td>
                            <td>10/05/2025</td>
                             <td>Pending By Super Admin (9001)</td>
                            <td>09/03/2025</td>
                            <td>
                                <div className="d-flex justify-content-center gap-2">
                                  <button className="btn btn-sm btn-outline-secondary" title="More Options">
                                    <IoMenu />
                                  </button>
                                  <button className="btn btn-sm btn-outline-danger" title="Delete">
                                    <FaTrashAlt />
                                  </button>
                              </div>
                            </td>
                          </tr>

                          
                        </tbody>
                      </table>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

         
          {/* Add Request Modal */}
           <div
            className="modal fade create-appointment-modal"
            ref={addRequestModalRef}
            onHide={() => setShowAddRequestModal(false)}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-xl">
              <CreateRequestModal 
                handleCloseModal={() => setShowAddRequestModal(false)}
              />
            </div>
          </div>

           <div
            className="modal fade create-appointment-modal"
            ref={menuModalRef}
            onHide={() => setMenuModal(false)}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-xl">
              <CreateMenuModal 
                handleCloseModal={() => setMenuModal(false)}
              />
            </div>
          </div>
      </main>
    </Layout>
  );
};
export default ApproveLeave;
