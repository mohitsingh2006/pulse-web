import { Link } from "react-router-dom";
import Layout from "../../_layout";
import SettingSidebar from "../../components/setting/SettingSidebar";
import React, { useEffect, useRef, useState } from "react";
import { PiNotePencilDuotone } from "react-icons/pi";
import EditNotificationModal from "./setting-modals/EditNotificationModal";
import { Modal } from "bootstrap";
import { CheckmarkIcon } from "react-hot-toast";
import { FaCheckDouble } from "react-icons/fa";



const SystemNotificationSetting = () => {
    const [showEditNotificationModal, setShowEditNotificationModal] = useState(false);
    const EditNotificationModalRef = useRef(null);
    const EditNotificationModalInstance = useRef(null);
    
    useEffect(() => {
        if (EditNotificationModalInstance.current) {
            if (showEditNotificationModal) {
            EditNotificationModalInstance.current.show();
            } else {
            EditNotificationModalInstance.current.hide();
            }
        }
    
        }, [showEditNotificationModal]);
        
        // 1. Initialize the Bootstrap Modal instance when the component mounts
        useEffect(() => {
            
            if (EditNotificationModalRef.current) {
            EditNotificationModalInstance.current = new Modal(EditNotificationModalRef.current, {});
            }
        
        }, []);
  return (
    <Layout>
      <main className="setting-page">
        <div className="row p-3">
          <div className="col-12 col-lg-2">
            <SettingSidebar />
          </div>
          <div className="col-10 col-lg-10">
            <div className="bg-white graph-card p-3">
              <div className="">
                <h5>System Notification Setting</h5>
              </div>
              <div className="border-bottom"></div>
              <table className="table my-4">
                <thead>
                  <tr>
                    <th scope="col">Event</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Option</th>
                    <th scope="col">Staff Message</th>
                    <th scope="col">Patient Message</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Appointment Created</td>
                    <td>New Appointment Created</td>
                    <td>
                      <div className="d-flex flex-column">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="email1"
                          />
                          <label className="form-check-label">Enabled</label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="sms1"
                          />
                          <label className="form-check-label">Staff</label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="app1"
                          />
                          <label className="form-check-label">Patient</label>
                        </div>
                      </div>
                    </td>
                    <td className="small">
                        Appointment has been created for Patient: . Appointment Date:  With Doctor Name: .
                    </td>
                    <td className="">
                      Dear your appointment has been created with Doctor:   {""}. <br />
                      <Link
                        to="#"
                        onClick={() => {
                          setShowEditNotificationModal(true);
                        }}
                      >
                        <PiNotePencilDuotone
                          className="pencil-icon"
                          size={18}
                        />
                      </Link>
                    </td>
                  </tr>
                   <tr>
                    <td>Appointment Approved</td>
                    <td>Appointment Status</td>
                    <td>
                        <div className="form-check mb-1">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Enabled</label>
                        </div>

                        <div className="form-check mb-1">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Staff</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Patient</label>
                        </div>
                    </td>
                    <td>
                       Patient: appointment status is with Doctor: Date:.
                    </td>
                    <td>
                       Dear your appointment status is Date: with Doctor.  <br />
                      <Link
                        to="#"
                        onClick={() => {
                          setShowEditNotificationModal(true);
                        }}
                      >
                        <PiNotePencilDuotone
                          className="pencil-icon"
                          size={18}
                        />
                      </Link>
                    </td>
                   </tr>
                   <tr>
                    <td>OPD Visit Created</td>
                    <td>New OPD Visit Created</td>
                    <td>
                        <div className="form-check mb-1">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Enabled</label>
                        </div>

                        <div className="form-check mb-1">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Staff</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Patient</label>
                        </div>
                    </td>
                    <td>
                       OPD Visit has been created for patient: with doctor: Patient Symptoms Details are and any known allergies: .
                    </td>
                    <td>
                      Dear: your OPD visit has been created. Your Symptoms Details are and any known allergies:. <br />
                      <Link
                        to="#"
                        onClick={() => {
                          setShowEditNotificationModal(true);
                        }}
                      >
                        <PiNotePencilDuotone
                          className="pencil-icon"
                          size={18}
                        />
                      </Link>
                    </td>
                   </tr>
                    <tr>
                    <td>Notification OPD Prescription Created</td>
                    <td>New OPD Prescription Created</td>
                    <td>
                        <div className="form-check mb-1">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Enabled</label>
                        </div>

                        <div className="form-check mb-1">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Staff</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Patient</label>
                        </div>
                    </td>
                    <td>
                       New OPD prescription has been created for Patient: Checkup ID: . Prescription prescribe by. Prescription Details. (1) Finding Description: (2) Medicine Details: (3) Radiology Test:(4) Pathology Test:
                    </td>
                    <td>
                      Dear Checkup ID: your OPD prescription has been created. Please Check your finding details prescribe by. Please Check prescription details. (1) Medicines Details: (2) Radiology Test: (3) Pathology Test: <br />                      <Link
                        to="#"
                        onClick={() => {
                          setShowEditNotificationModal(true);
                        }}
                      >
                        <PiNotePencilDuotone
                          className="pencil-icon"
                          size={18}
                        />
                      </Link>
                    </td>
                   </tr>
                </tbody>
              </table>
              <div className="border-bottom"></div>
                <div className="text-end mt-4 save-btn">
                    <button className="btn btn-primary">
                        <FaCheckDouble size={20} className="pe-2" />
                    Save</button>
                </div>
            </div>
          </div>
        </div>
        <div
            className="modal fade create-appointment-modal"
            ref={EditNotificationModalRef}
            onHide={() => setShowEditNotificationModal(false)}
            data-bs-backdrop="static"
            dataBsKeyboard="false"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-xl">
              <EditNotificationModal 
                handleCloseModal={() => setShowEditNotificationModal(false)}
              />
            </div>
          </div>
      </main>
    </Layout>
  );
};
export default SystemNotificationSetting;
