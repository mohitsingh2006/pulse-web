import { Link } from "react-router-dom";
import DatePickerComponent from "../DatePickerComponent";

const AppointmentDetailModal = ({ handleCloseModal }) => {
  return (
    <form className="form-outer">
      <div className="modal-content">
        <div className="modal-header py-2">
          <h5 className="modal-title">Appointment Details</h5>
          <div className="d-flex gap-3 align-items-center"></div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            onClick={handleCloseModal}
          ></button>
        </div>
        <div className="modal-body">
          <div class="row mb-3"></div>
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="d-flex justify-content-between pb-2 pb-2">
                <b className="d-inline add-datail">Patient Name</b>{" "}
                <span class="text-secondary">Harpreet Varkey (884)</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Age</b>{" "}
                <span className="text-secondary">0 Year, 0 Month, 0 Day</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Email</b>{" "}
                <span className="text-secondary">harpreet14@gmail.com</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Phone</b>{" "}
                <span className="text-secondary">9522545121</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Gender</b>{" "}
                <span className="text-secondary">Male</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Doctor</b>{" "}
                <span className="text-secondary">Sansa Gomez (9008)</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Department</b>{" "}
                <span className="text-secondary">Gynecology</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Live Consultation</b>{" "}
                <span className="text-secondary">No</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Payment Note</b>{" "}
                <span className="text-secondary"></span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Message</b>{" "}
                <p className="text-secondary"></p>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Alternate Address</b>{" "}
                <p className="text-secondary"></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Appointment No</b>{" "}
                <span className="text-secondary">APPNO7495</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Appointment S.No.</b>{" "}
                <span className="text-secondary"></span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Appointment Date</b>{" "}
                <span className="text-secondary">10/30/2025 01:30 PM</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Appointment Priority</b>{" "}
                <span className="text-secondary">Normal</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Shift</b>{" "}
                <span className="text-secondary">Morning</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Slot</b>{" "}
                <span className="text-secondary">10:00 AM - 12:30 PM</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Amount</b>{" "}
                <span className="text-secondary">147.60</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Payment Mode</b>{" "}
                <span className="text-secondary">Cash</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Transaction ID</b>{" "}
                <span className="text-secondary">TRANID11370</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Source</b>{" "}
                <span className="text-secondary">Offline</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Collected By</b>{" "}
                <span className="text-secondary"> Super Admin (9001)</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Status</b>{" "}
                <span className="text-secondary badge badge-pill success-badge-bg">
                  Approved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AppointmentDetailModal;
