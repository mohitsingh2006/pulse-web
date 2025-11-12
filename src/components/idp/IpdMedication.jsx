import React, { useEffect, useRef, useState } from "react";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import { PiPlus } from "react-icons/pi";
import { PiPlusBold } from "react-icons/pi";
import IpdMedicationModal from "./IpdMedicationModal";
import { Modal } from "bootstrap";
const IpdMedication = () => {
  const [showIpdMedicationModal, setShowIpdMedicationModal] = useState(false);
    const ipdMedicationModalRef = useRef(null);
    const ipdMedicationModalInstance = useRef(null);

    useEffect(() => {
        if (ipdMedicationModalInstance.current) {
          if (showIpdMedicationModal) {
            ipdMedicationModalInstance.current.show();
          } else {
            ipdMedicationModalInstance.current.hide();
          }
        }
    
      }, [showIpdMedicationModal]);
    
      // 1. Initialize the Bootstrap Modal instance when the component mounts
      useEffect(() => {
        
        if (ipdMedicationModalRef.current) {
          ipdMedicationModalInstance.current = new Modal(ipdMedicationModalRef.current, {});
        }
    
      }, []);
  return (
    <div className="ipd-medication-note">
      <div className="card">
        <div className="card-header bg-white d-flex justify-content-between align-items-center">
          <h6 className="mb-0">Medication</h6>
          <button className="btn btn-primary btn-sm" onClick={() => {setShowIpdMedicationModal(true);}}>
            <PiPlusBold  size={16} className="icon-color"/> Add Medication Dose
          </button>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Date</th>
                  <th>Medicine Name</th>
                  <th>Dose</th>    
                  <th>Action</th>             
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    11/12/2025 <br />
                    <small className="text-muted">(Wed)</small>
                  </td>
                  <td>WORMSTOP</td>
                  <td>
                    <div>Time: 02:17 PM</div>
                    <div>1 ml</div>
                    <div>
                      <small className="text-muted">
                        Created By: Super Admin (9001)
                      </small>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex gap-2 ">
                    <button className="btn btn-primary btn-sm"
                    onClick={() => {setShowIpdMedicationModal(true);}}
                    ><PiPlus className="me-1" size={16} />Add</button>
                    </div>
                  </td>                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
        <div
          className="modal fade create-appointment-modal"
          ref={ipdMedicationModalRef}
          onHide={() => setShowIpdMedicationModal(false)}
          data-bs-backdrop="static"
          dataBsKeyboard="false"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-lg">
            <IpdMedicationModal 
              handleCloseModal={() => setShowIpdMedicationModal(false)}
            />
          </div>
        </div>
    </div>
  );
};

export default IpdMedication;
