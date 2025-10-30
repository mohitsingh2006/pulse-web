import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

import { LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";
import TableHeader from "../components/TableHeader";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CreatePatient from "../components/CreatePatient";
import axiosInstance from "../axiosInstance";
import PageLoader from "../components/PageLoader";
import toast from "react-hot-toast";
import Layout from "../_layout";
import EmptyState from "../components/EmptyState";

const Patient = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const [showCreatePatientModal, setShowCreatePatientModal] = useState(false);
  const [patients, setPatient] = useState([]);
  const [loadingObj, setLoadingObj] = useState({
    pageLoading: true,
  });

  const modalRef = useRef(null);
  const modalInstance = useRef(null);


 

  const fetchPatient = async () => {
    try {
      const response = await axiosInstance.get(`${API_URL}patients/details`);

      if (response.status === 200) {
        setPatient(response.data.patients);
        setLoadingObj({ ...loadingObj, pageLoading: false });
      }
    } catch (err) {     
      toast.error(err.message);
      setLoadingObj({ ...loadingObj, pageLoading: false });
    }
  };



  useEffect(() => {
    if (modalInstance.current) {
      if (showCreatePatientModal) {
        modalInstance.current.show();
      } else {
        modalInstance.current.hide();
      }
    }
  }, [showCreatePatientModal]);

  // 1. Initialize the Bootstrap Modal instance when the component mounts
  useEffect(() => {
    if (modalRef.current) {
      modalInstance.current = new Modal(modalRef.current, {});
    }
    
	

    fetchPatient();
  }, []);
  return (
    <Layout>     
        <main className="px-4 pb-5 patient-page">
          <div className="row mt-5">
            <div className="col-12">
              <div className="bg-white graph-card p-4">
                <TableHeader
                  heading={"Patient List"}
                  primaryBtnText={"Add New Patient"}
                  primaryBtnClick={() => setShowCreatePatientModal(true)}
                  secontryBtnText={"Import Excel"}
                  secontryBtnClick={() => console.log("click secondry btn")}
                />

                <div className="mt-4">
                  {loadingObj.pageLoading && (
                    <PageLoader width={40} height={40} />
                  )}

                  {loadingObj.pageLoading === false && patients.length === 0 &&
                    <EmptyState 
                        message="No patients found."
                    />
                  } 

                  {patients.length > 0 && loadingObj.pageLoading === false && (
                    <table className="table ">
                      <thead>
                        <tr>
                          <th scope="col">PATIENT</th>
                          <th scope="col">Age</th>
                          <th scope="col">Blood Group</th>
                          <th scope="col">Gender</th>
                          <th scope="col">Guardian Name</th>
                          <th scope="col">Dead</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {patients.map((patient, i) => {
                          return (
                            <tr key={patient.id}>
                              <td>
                                <div className="d-flex align-items-center gap-3">
                                  <div className="user-image d-flex align-items-center justify-content-center">
                                    <LuUser />
                                  </div>
                                  <div className="user-info">
                                    <h5>{patient.name}</h5>
                                    <span>{patient.phone}</span>
                                  </div>
                                </div>
                              </td>
                              <td>{patient.age}</td>
                              <td>{patient.blood_group ? patient.blood_group : 'N/A'}</td>
                              <td>{patient.gender}</td>
                              <td>{patient.guardian_name}</td>
                              <td>
                                <span className="badge badge-pill success-badge-bg">
                                  {patient.insurance ? "Yes" : "No"}
                                </span>
                              </td>
                              <td>
                              <Dropdown>
                                <Dropdown.Toggle className="btn btn-primary shadow-none btn-sm" variant="danger" id="dropdown-basic">
                                  Action
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                                  <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                  {/* <Dropdown.Item href="#/action-3">Radiology</Dropdown.Item>
                                  <Dropdown.Item href="#/action-3">Pathology</Dropdown.Item>
                                  <Dropdown.Item href="#/action-3">Pharmacy</Dropdown.Item> */}
                                </Dropdown.Menu>
                              </Dropdown>                                
                              </td>
                            </tr>
                          );
                        })}                        
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            ref={modalRef}
            onHide={() => setShowCreatePatientModal(false)}
            data-bs-backdrop="static"
            databskeyboard="false"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-xl">
              <CreatePatient
                handleCloseModal={() => setShowCreatePatientModal(false)}
                fetchPatient={fetchPatient}
              />
            </div>
          </div>
        </main>
    </Layout>
  );
};
export default Patient;
