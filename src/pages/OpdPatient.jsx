import { LuUser } from "react-icons/lu";
import Layout from "../_layout";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Modal, Dropdown } from "bootstrap";
import CreateOpdModal from "../components/CreateOpdModal";
import CreatePatient from "../components/CreatePatient";
import { CiSearch } from "react-icons/ci";

const OpdPatient = () => {
  // 1. Initialize the Bootstrap Modal instance when the component mounts
  const [showCreatePatientModal, setShowCreatePatientModal] = useState(false);
  const modalRef = useRef(null);
  const modalInstance = useRef(null);

  const [showCreateOpdModal, setShowCreateOpdModal] = useState(false);
  const opdModalRef = useRef(null);
  const opdModalInstance = useRef(null);

  console.log(showCreatePatientModal)
  useEffect(() => {
    if (modalInstance.current) {
      if (showCreatePatientModal) {
        modalInstance.current.show();
      } else {
        modalInstance.current.hide();
      }
    }

    if (opdModalInstance.current) {
      if (showCreateOpdModal) {
        opdModalInstance.current.show();
      } else {
        opdModalInstance.current.hide();
      }
    }
  }, [showCreateOpdModal, showCreatePatientModal]);

  // 1. Initialize the Bootstrap Modal instance when the component mounts
  useEffect(() => {
    if (modalRef.current) {
      modalInstance.current = new Modal(modalRef.current, {});
    }

    if (opdModalRef.current) {
      opdModalInstance.current = new Modal(opdModalRef.current, {});
    }
  }, []);

  return (
    <Layout>
      <main className="px-3 pb-5 appointment-page">
        <div className="row">
          <div className="col-12">
            <div className="bg-white nav-pills-outer mb-4 d-flex justify-content-between py-2 shadow-sm">
              <ul className="nav nav-pills ps-2" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link shadow-none active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Today OPD
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link shadow-none"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Upcoming OPD
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link shadow-none"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Old OPD
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link shadow-none"
                    id="pills-view-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-view"
                    type="button"
                    role="tab"
                    aria-controls="pills-view"
                    aria-selected="false"
                  >
                    Patient View
                  </button>
                </li>
              </ul>
              <div className="d-flex align-items-center gap-3 pe-3 ">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setShowCreateOpdModal(true)}
                >
                  <GoPlus size={22} /> Add Patient
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-4">
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
            </div>
          </div>
          <div className="col-12">
            <div className="bg-white graph-card p-4">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="mt-4">
                    <table className="table ">
                      <thead>
                        <tr>
                          <th scope="col">Patient Name</th>
                          <th scope="col">OPD No</th>
                          <th scope="col">Case ID</th>
                          <th scope="col">Appointment Date</th>
                          <th scope="col">Generated By</th>
                          <th scope="col">Consultant</th>
                          <th scope="col">Reference</th>
                          <th scope="col">Symptoms</th>
                          <th scope="col">Is Antenatal</th>
                          <th scope="col">Previous Medical Issue</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <div className="mt-4">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Patient Name</th>
                          <th scope="col">OPD No</th>
                          <th scope="col">Case ID</th>
                          <th scope="col">Appointment Date</th>
                          <th scope="col">Generated By</th>
                          <th scope="col">Consultant</th>
                          <th scope="col">Reference</th>
                          <th scope="col">Symptoms</th>
                          <th scope="col">Is Antenatal</th>
                          <th scope="col">Previous Medical Issue</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Harpreet Varkey</td>
                          <td>
                            <Link to="">OPDN7431</Link>
                          </td>
                          <td>7459</td>
                          <td>10/30/2025 01:30 PM</td>
                          <td>Sansa Gomez (9008)</td>
                          <td></td>
                          <td>Constant or severe abdominal pain.</td>
                          <td>No</td>
                          <td></td>
                          <td></td>
                          <td className="show-btn"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <div className="mt-4">
                    <table className="table ">
                      <thead>
                        <tr>
                          <th scope="col">Patient Name</th>
                          <th scope="col">OPD No</th>
                          <th scope="col">Case ID</th>
                          <th scope="col">Appointment Date</th>
                          <th scope="col">Generated By</th>
                          <th scope="col">Consultant</th>
                          <th scope="col">Reference</th>
                          <th scope="col">Symptoms</th>
                          <th scope="col">Is Antenatal</th>
                          <th scope="col">Previous Medical Issue</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Jane Smith</td>
                          <td>OPD-1023</td>
                          <td>CASE-4587</td>
                          <td>2025-10-18</td>
                          <td>Admin User</td>
                          <td>Dr. Michael Brown</td>
                          <td>Referred by Dr. Lee</td>
                          <td>Fever, Headache</td>
                          <td>No</td>
                          <td>Diabetes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-view"
                  role="tabpanel"
                  aria-labelledby="pills-view-tab"
                >
                  <div className="mt-4">
                    <table className="table ">
                      <thead>
                        <tr>
                          <th scope="col">Patient Name</th>
                          <th scope="col">Patient ID</th>
                          <th scope="col">Guardian Name</th>
                          <th scope="col">Gender</th>
                          <th scope="col">Generated By</th>
                          <th scope="col">Consultant</th>
                          <th scope="col">Last Visit</th>
                          <th scope="col">Is Antenatal</th>
                          <th scope="col">Total Recheckup</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center gap-3">
                              <div className="d-flex user-image align-items-center justify-content-center">
                                <LuUser />
                              </div>
                              <div className="user-info">
                                <h5>Harpreet Varkey</h5>
                                <span>9522545121</span>
                              </div>
                            </div>
                          </td>
                          <td>1155</td>
                          <td>David Wareham</td>
                          <td>Female</td>
                          <td>Super Admin (9001)</td>
                          <td>Amit Singh (9009)</td>
                          <td>10/10/2025 12:00 PM</td>
                          <td>No</td>
                          <td>3</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center gap-3">
                              <div className="d-flex user-image align-items-center justify-content-center">
                                <LuUser />
                              </div>
                              <div className="user-info">
                                <h5>Harpreet Varkey</h5>
                                <span>9522545121</span>
                              </div>
                            </div>
                          </td>
                          <td>1155</td>
                          <td>David Wareham</td>
                          <td>Female</td>
                          <td>Super Admin (9001)</td>
                          <td>Amit Singh (9009)</td>
                          <td>10/10/2025 12:00 PM</td>
                          <td>No</td>
                          <td>3</td>
                        </tr>

                        <tr>
                          <td>
                            <div className="d-flex align-items-center gap-3">
                              <div className="d-flex user-image align-items-center justify-content-center">
                                <LuUser />
                              </div>
                              <div className="user-info">
                                <h5>Harpreet Varkey</h5>
                                <span>9522545121</span>
                              </div>
                            </div>
                          </td>
                          <td>1155</td>
                          <td>David Wareham</td>
                          <td>Female</td>
                          <td>Super Admin (9001)</td>
                          <td>Amit Singh (9009)</td>
                          <td>10/10/2025 12:00 PM</td>
                          <td>No</td>
                          <td>3</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center gap-3">
                              <div className="d-flex user-image align-items-center justify-content-center">
                                <LuUser />
                              </div>
                              <div className="user-info">
                                <h5>Harpreet Varkey</h5>
                                <span>9522545121</span>
                              </div>
                            </div>
                          </td>
                          <td>1155</td>
                          <td>David Wareham</td>
                          <td>Female</td>
                          <td>Super Admin (9001)</td>
                          <td>Amit Singh (9009)</td>
                          <td>10/10/2025 12:00 PM</td>
                          <td>No</td>
                          <td>3</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center gap-3">
                              <div className="d-flex user-image align-items-center justify-content-center">
                                <LuUser />
                              </div>
                              <div className="user-info">
                                <h5>Harpreet Varkey</h5>
                                <span>9522545121</span>
                              </div>
                            </div>
                          </td>
                          <td>1155</td>
                          <td>David Wareham</td>
                          <td>Female</td>
                          <td>Super Admin (9001)</td>
                          <td>Amit Singh (9009)</td>
                          <td>10/10/2025 12:00 PM</td>
                          <td>No</td>
                          <td>3</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Opd modal */}
        <div
          className="modal fade create-appointment-modal"
          ref={opdModalRef}
          onHide={() => setShowCreateOpdModal(false)}
          data-bs-backdrop="static"
          dataBsKeyboard="false"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-xl">
            <CreateOpdModal
              handleCloseModal={() => setShowCreateOpdModal(false)}
              handlePatientModal={() => setShowCreatePatientModal(true)}
            />
          </div>
        </div>

        {/* Patient modal */}
        <div
          className="modal fade"
          ref={modalRef}
          onHide={() => setShowCreatePatientModal(false)}
          data-bs-backdrop="static"
          dataBsKeyboard="false"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-xl">
            <CreatePatient
              handleCloseModal={() => setShowCreatePatientModal(false)}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default OpdPatient;
