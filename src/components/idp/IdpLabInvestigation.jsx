import React, { useEffect, useRef, useState } from "react";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import { PiPlus } from "react-icons/pi";
import { PiPlusBold } from "react-icons/pi";
import IpdMedicationModal from "./IpdMedicationModal";
import { Modal } from "bootstrap";
import { CiSearch } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";

const IdpLabInvestigation = () => {
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
    <div className="ipd-Lab-invetigation">
      <div className="card">
        <div className="border-bottom">
            <h6 className="fw-bold mb-3">Lab Investigation</h6>
        </div>
            <div className="mb-3 d-flex gap-3 search-box pt-4">
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
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Test Name</th>
                  <th>Lab</th>
                  <th>Sample Collected</th>    
                  <th>Expected Date</th>  
                  <th>Approved By</th>    
                  <th>Action</th>       
                </tr>
              </thead>
              <tbody>
               <tr>
                <td>
                Magnetic resonance imaging<br />
                <small className="text-muted">(MR)</small>
              </td>
              <td>Radiology</td>
              <td>
                John Hook (9006)<br />
                <small className="text-muted">Radiology Center : In-House Radiology Lab</small><br />
                <small>11/12/2025</small>
              </td>
              <td>11/14/2025</td>
              <td>
                John Hook (9006)<br />
                <small>11/15/2025</small>
              </td>
              <td className="text-center">
                <button className="btn shadow-none">
                 <BiMenu size={22}/>
                </button>
              </td>
               </tr>
            <tr>
              <td>
                Resting 12-lead EKG<br />
                <small className="text-muted">(RLE)</small>
              </td>
              <td>Radiology</td>
              <td>
                John Hook (9006)<br />
                <small className="text-muted">Radiology Center : In-House Radiology Lab</small><br />
                <small>11/12/2025</small>
              </td>
              <td>11/14/2025</td>
              <td>
                John Hook (9006)<br />
                <small>11/14/2025</small>
              </td>
              <td className="text-center">
                <button className="btn shadow-none">
                 <BiMenu size={22}/>
                </button>
              </td>
            </tr>
             <tr>
              <td>
                Abdomen X-rays<br />
                <small className="text-muted">(AX)</small>
              </td>
              <td>Pathology</td>
              <td>
                Belina Turner (9005)<br />
                <small className="text-muted">Pathology Center : In-House Pathology Lab</small><br />
                <small>11/08/2025</small>
              </td>
              <td>11/09/2025</td>
              <td>
                Belina Turner (9005)<br />
                <small>11/11/2025</small>
              </td>
              <td className="text-center">
                <button className="btn shadow-none">
                  <BiMenu size={22}/>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Chest X-rays<br />
                <small className="text-muted">(c)</small>
              </td>
              <td>Pathology</td>
              <td>
                Belina Turner (9005)<br />
                <small className="text-muted">Pathology Center : In-House Pathology Lab</small><br />
                <small>11/08/2025</small>
              </td>
              <td>11/09/2025</td>
              <td>
                Belina Turner (9005)<br />
                <small>11/10/2025</small>
              </td>
              <td className="text-center">
                <button className="btn shadow-none">
                 <BiMenu size={22}/>
                </button>
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

export default IdpLabInvestigation;
