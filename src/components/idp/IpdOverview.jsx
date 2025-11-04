import React from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { RiDeleteBin6Line, RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { LuClipboardList } from "react-icons/lu";
import { MdLocalOffer } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";

const IpdOverview = () => {
  const billingData = [
    {
      title: "IPD PAYMENT/BILLING",
      icon: <FaBed size={20} />,
      percent: 86.11,
      paid: 1842.0,
      total: 2139.1,
    },
    {
      title: "PHARMACY PAYMENT/BILLING",
      icon: "bi-capsule",
      percent: 100,
      paid: 199.5,
      total: 199.5,
    },
    {
      title: "PATHOLOGY PAYMENT/BILLING",
      icon: "bi-beaker",
      percent: 100,
      paid: 184.08,
      total: 184.08,
    },
    {
      title: "RADIOLOGY PAYMENT/BILLING",
      icon: "bi-ear",
      percent: 100,
      paid: 198.0,
      total: 198.0,
    },
    {
      title: "BLOOD BANK PAYMENT/BILLING",
      icon: "bi-droplet",
      percent: 100,
      paid: 121.0,
      total: 121.0,
    },
    {
      title: "AMBULANCE PAYMENT/BILLING",
      icon: "bi-truck",
      percent: 100,
      paid: 172.5,
      total: 172.5,
    },
  ];
  return (
    <div className="row overview-tab">
      <div className="col-12 col-lg-6">
        <div className="tab-header justify-content-between d-flex border-bottom p-2 mb-4">
          <div>
            <h4 className="fw-bold">Stuart Wood (580)</h4>
          </div>
          <div className="">
            <Link to="#" className="me-3 cursor-pointer">
              <AiOutlineProfile size={20} />
            </Link>
            <Link to="#" className="me-3 cursor-pointer">
              <RiEdit2Fill size={20} />
            </Link>
            <Link to="#" className="cursor-pointer text-danger"></Link>
            <Link className="me-3 cursor-pointer">
              <LuClipboardList size={20} />
            </Link>
            <Link className="me-3 cursor-pointer">
              <RiDeleteBin6Line size={20} />
            </Link>
          </div>
        </div>
        <div className="row border-bottom pb-6">
          <div className="col-lg-4">
            <div className="overflosw-hidden">
              <img className="rounded" src="https://placehold.co/50x50" alt="" width="100%" height="auto" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-between">
              <div>
                <b className=" d-block pb-3">Gender:</b>
                <b className=" d-block pb-3">Age:</b>
                <b className=" d-block pb-3">Guardian Name:</b>
                <b className=" d-block pb-3">Phone:</b>
                <b className=" d-block pb-3">TPA:</b>
                <b className=" d-block pb-3">TPA ID:</b>
                <b className=" d-block pb-3">TPA Validity:</b>
                <b className=" d-block pb-3">Barcode:</b>
                <b className=" d-block pb-3">QR Code:</b>
              </div>
              <div>
                <small className="d-block pb-3">Male</small>
                <small className="d-block pb-3">13 Year, 4 Month, 8 Day</small>
                <small className="d-block pb-3">mansoor shaikh</small>
                <small className="d-block pb-3">9875678765</small>
              </div>
            </div>
          </div>
        </div>
        <div className="row border-bottom pt-4">
          <div className="col-lg-7">
            <div className="d-flex justify-content-between">
              <div>
                <b className="d-block pb-3">Case ID:</b>
                <b className="d-block pb-3">IPD No:</b>
                <b className="d-block pb-3">Admission Date:</b>
                <b className="d-block pb-3">Bed:</b>
              </div>
              <div className="">
                <small className="d-block pb-3">7460</small>
                <small className="d-block pb-3"> IPDN113</small>
                <small className="d-block pb-3">11/04/2025 11:04 AM</small>
                <small className="d-block pb-3">
                  {" "}
                  FF - 130 - AC (Normal) - 1st Floor
                </small>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className=" rounded p-2">
              <div>Grafh ui</div>              
            </div>
          </div>
        </div>
        <div className="row border-bottom pt-4 ">
          <div className="card mb-4 shadow-sm border-0">
            <div className="card-body">
              <h6 className="fw-bold mb-3">
                <i className="bi bi-tag me-2"></i> Current Vitals:
              </h6>
              <div className="row align-items-center mb-2">
                <div className="col-md-4">
                  <strong>Height</strong>
                  <p className="mb-0">150 Centimeters</p>
                </div>
                <div className="col-md-4">
                  <span className="badge bg-success">Normal</span>
                </div>
                <div className="col-md-4 text-end">
                  <small>10/08/2025 12:39 PM</small>
                </div>
              </div>

              <div className="row align-items-center mb-2">
                <div className="col-md-4">
                  <strong>Weight</strong>
                  <p className="mb-0">75 Kilograms</p>
                </div>
                <div className="col-md-4">
                  <span className="badge bg-success">Normal</span>
                </div>
                <div className="col-md-4 text-end">
                  <small>10/14/2025 09:00 PM</small>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-md-4">
                  <strong>BMI</strong>
                </div>
                <div className="col-md-4">
                  <span className="badge bg-success">33.33</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-4 border-0 shadow-sm">
            <div className="card-body">
              <h6 className="fw-bold mb-2">
                <i className="bi bi-tag me-2"></i> Known Allergies
              </h6>
              <ul className="mb-0">
                <li>Dust</li>
              </ul>
            </div>
          </div>

          <div className="card mb-4 border-0 shadow-sm">
            <div className="card-body">
              <h6 className="fw-bold mb-2">
                <i className="bi bi-tag me-2"></i> Finding
              </h6>
              <p className="mb-0">
                <strong>Rosacea Rosacea</strong> (roe-ZAY-she-uh) is a common
                skin condition that causes blushing or flushing and visible
                blood vessels in your face. It may also produce small,
                pus-filled bumps. These signs and symptoms may flare up for
                weeks to months and then go away for a while.
              </p>
            </div>
          </div>

          <div className="card mb-4 border-0 shadow-sm">
            <div className="card-body">
              <h6 className="fw-bold mb-2">
                <i className="bi bi-tag me-2"></i> Symptoms
              </h6>
              <ul>
                <li>
                  <strong>Cramps and injuries</strong>
                  <p className="mb-0">
                    Muscle pain: Muscle spasms, cramps and injuries can all
                    cause muscle pain. Some infections or tumors may also lead
                    to muscle pain. Tendon and ligament pain: Ligaments and
                    tendons are strong bands of tissue that connect your joints
                    and bones. Sprains, strains and overuse injuries can lead to
                    tendon or ligament pain.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="card mb-4 border-0 shadow-sm">
            <div className="card-body">
              <h6 className="fw-bold mb-2">CONSULTANT DOCTOR</h6>
              <div className="d-flex align-items-center mt-2">
                <img
                  src="https://placehold.co/35"
                  alt="doctor"
                  className="rounded-circle me-2"
                />
                <span>Reyan Jain (9011)</span>
              </div>
            </div>
          </div>

          <div className="card mb-4 border-0 shadow-sm">
            <div className="card-body">
              <h6 className="fw-bold mb-3">NURSE NOTES</h6>

              <span className="badge bg-primary mb-3">10/10/2025 12:36 PM</span>

              <div className="position-relative ps-4 border-start border-4 border-secondary">
                <div className="nurse-note">
                
                </div>

                <div className="card bg-light border-0 mb-3">
                  <div className="card-body">
                    <h6 className="text-primary mb-2">April Clinton (9020)</h6>
                    <p className="mb-1">
                      <strong>Note</strong>
                    </p>
                    <p className="mb-2">Daily Routine Check up</p>
                    <p className="mb-1">
                      <strong>Comment</strong>
                    </p>
                    <p className="mb-0">Daily Routine Check up</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h6 className="fw-bold mb-3">TIMELINE</h6>
              <span className="badge bg-primary mb-3">10/08/2025 09:30 PM</span>
              <div className="position-relative ps-4 border-start border-2 border-secondary">
                <div className="position-absolute top-0 start-0 translate-middle bg-white border rounded-circle p-2">
                  <i className="bi bi-chat-dots text-primary"></i>
                </div>

                <div className="card bg-light border-0">
                  <div className="card-body">
                    <h6 className="text-primary mb-2">
                      Daily Routine Check up
                    </h6>
                    <p className="mb-0">Daily Routine Check up</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-lg-6">
        
          <div className="row g-4">
            {billingData.map((item, index) => (
              <div key={index} className="col-md-6">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="fw-bold mb-0">
                      <i className={`bi ${item.icon} me-2`}></i>
                      {item.title}
                    </h6>
                  </div>

                  <div className="d-flex justify-content-between align-items-center small text-muted mb-1">
                    <span className="fw-semibold text-dark">
                      {item.percent.toFixed(2)}%
                    </span>
                    <span className="fw-semibold text-dark">
                      ${item.paid.toFixed(2)}/${item.total.toFixed(2)}
                    </span>
                  </div>

                  <div className="progress" style={{ height: "6px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row pt-4 table-section">
            <div>
              <h6>Medication</h6>
              <table class="table pb-4">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Medicine Name</th>
                    <th>Dose</th>
                    <th>Time</th>
                    <th>Remark</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10/10/2025</td>
                    <td>WORMSTOP</td>
                    <td>1 (Micrometer (oi))</td>
                    <td>12:36 PM</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>10/10/2025</td>
                    <td>Inhalers</td>
                    <td>1 (HVL)</td>
                    <td>06:30 PM</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-5">
              <h6>Prescriptton</h6>
              <table class="table">
                <thead>
                  <tr>
                    <th>Prescription No</th>
                    <th>Date</th>
                    <th>Prescribe By</th>
                    <th>Generated By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>IPDP402</td>
                    <td>10/04/2025</td>
                    <td>Reyan Jain (9011)</td>
                    <td>Super Admin (9001)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-5">
              <h6> Consultant Register</h6>
              <table class="table">
                <thead>
                  <tr>
                    <th>Applied Date</th>
                    <th>Consultant Doctor</th>
                    <th>Instruction</th>
                    <th>Instruction Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10/10/2025 12:37 PM</td>
                    <td>Reyan Jain (9011)</td>
                    <td>Daily Routine Check up</td>
                    <td>10/09/2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-5">
              <h6>Lab Investigation</h6>
              <table class="table">
                <thead>
                  <tr>
                    <th>Test Name</th>
                    <th>Lab</th>
                    <th>Sample Collected</th>
                    <th>Expected Date</th>
                    <th>Approved By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Chest X-rays (c)</td>
                    <td>Pathology</td>
                    <td>
                      Belina Turner (9005)
                      <br />
                      <small>Pathology Center: In-House Pathology Lab</small>
                      <br />
                      10/08/2025
                    </td>
                    <td>10/09/2025</td>
                    <td>
                      Belina Turner (9005)
                      <br />
                      10/10/2025
                    </td>
                  </tr>
                  <tr>
                    <td>Functional MRI (RI) (FMRI)</td>
                    <td>Radiology</td>
                    <td>
                      John Hook (9006)
                      <br />
                      <small>Radiology Center: In-House Radiology Lab</small>
                      <br />
                      10/22/2025
                    </td>
                    <td>10/23/2025</td>
                    <td>
                      John Hook (9006)
                      <br />
                      10/24/2025
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-5">
                <h6>Operation</h6>
                <table className="table">
                    <thead>
                         <tr>
                            <th>Reference No</th>
                            <th>Operation Date</th>
                            <th>Operation Name	</th>
                            <th>Operation Category</th>
                            <th>OT Technician</th>
                        </tr>
                    </thead>
                   <tbody>
                    <tr>
                        <td>OTREF395</td>
                        <td>10/12/2025 12:37 PM</td>
                        <td>Cataract extraction ophthalmological procedures</td>
                        <td>Ophthalmology</td>
                        <td>Peter</td>
                    </tr>
                   </tbody>
                </table>
            </div>

             <div className="pt-5">
                <h6>Charges</h6>
                <table className="table">
                    <thead>
                         <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Charge Type	</th>
                            <th>Charge Category</th>
                            <th>Qty</th>
                            <th>Amount ($)</th>
                        </tr>
                    </thead>
                   <tbody>
                    <tr >
                        <td>10/15/2025 12:38 PM	</td>
                        <td>ICU</td>
                        <td>IPD</td>
                        <td>Intensive Care Units</td>
                        <td>4 per day</td>
                        <td>2,139.10</td>
                    </tr>
                   </tbody>
                </table>
            </div>

            <div className="pt-5">
                <h6>Payment</h6>
                <table className="table">
                    <thead>
                         <tr>
                            <th>Transaction ID</th>
                            <th>Date</th>
                            <th>Note</th>
                            <th>Payment Mode</th>
                            <th>Paid Amount ($)</th>
                        </tr>
                    </thead>
                   <tbody>
                    <tr >
                        <td>TRANID11372	</td>
                        <td>10/16/2025 12:38 PM</td>
                        <td></td>
                        <td>Transfer to Bank Account</td>
                        <td>1842.00</td>                        
                    </tr>
                   </tbody>
                </table>
            </div>
            
            <div className="pt-5">
                <h6>Live Consultation</h6>
                <table className="table">
                    <thead>
                         <tr>
                            <th>Consultation Title</th>
                            <th>Date</th>
                            <th>reated By</th>
                            <th>Created For</th>
                            <th>Patient</th>
                        </tr>
                    </thead>
                   <tbody>
                    <tr >
                        <td>Fever Discussion	</td>
                        <td>10/10/2025 02:30 PM</td>
                        <td>Self</td>
                        <td>Sonia Bush (Doctor: 9002)</td>
                        <td>Georgia Wareham (1155)</td>                        
                    </tr>
                    <tr>
                        <td>Online consult for IPDN112</td>
                        <td>10/05/2025 11:15 AM</td>
                        <td>Self</td>
                        <td>Reyan Jain (Doctor: 9011)</td>
                        <td>Georgia Wareham (1155</td>
                    </tr>
                   </tbody>
                </table>
            </div>

            <div className="pt-5">
                <h6>Treatment History</h6>
                <table className="table">
                    <thead>
                         <tr>
                            <th>IPD No</th>
                            <th>Symptoms</th>
                            <th>Consultant</th>
                            <th>Bed</th>
                            
                        </tr>
                    </thead>
                   <tbody>
                    <tr >
                        <td>IPDN112</td>
                        <td>
                            Cramps and injuries
                            Muscle pain: Muscle spasms, cramps and injuries can all cause muscle pain.
                        </td>
                        <td>Reyan Jain (9011)</td>
                        <td>SF - 137-ICU-2nd Floor</td>
                    </tr>
                   </tbody>
                </table>
            </div>

            <div className="pt-5">
                <h6>Bed History</h6>
                <table className="table">
                    <thead>
                         <tr>
                            <th>Bed Group</th>
                            <th>Bed</th>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>Active Bed</th>
                        </tr>
                    </thead>
                   <tbody>
                    <tr >
                        <td>ICU</td>
                        <td>SF - 137</td>
                        <td>10/05/2025 11:15 AM</td>
                        <td></td>
                        <td>Yes</td>
                    </tr>
                   </tbody>
                </table>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default IpdOverview;
