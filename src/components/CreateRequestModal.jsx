import React from "react";

const CreateRequestModal = ({ handleCloseModal }) => {
  return (
    <form className="form-outer">
      <div className="modal-content">
        <div className="modal-header py-2">
          <h5 className="modal-title">Add Details</h5>
          <div className="d-flex gap-3 align-items-center"></div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            onClick={handleCloseModal}
          ></button>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="mb-4">
                <label className="form-label">
                  Role
                  <span>*</span>
                </label>
                <select
                  className="form-select bg-light"
                  aria-label="Default select example"
                  defaultValue=""
                  name="role"
                  type="select"
                >
                  <option value="">Select</option>
                  <option value="Admin">Admin</option>
                  <option value="Accountant">Accountant</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Pharmacist">Pharmacist</option>
                  <option value="Pathologist">Pathologist</option>
                  <option value="Radiologist">Radiologist</option>
                  <option value="Super Admin">Super Admin</option>
                  <option value="Receptionist">Receptionist</option>
                  <option value="Nurse">Nurse</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="form-label">
                  Apply Date
                  <span>*</span>
                </label>
                <input
                  className="form-select bg-light"
                  aria-label="Default select example"
                  defaultValue=""
                  name="date"
                  type="date"
                ></input>
              </div>
              <div className="mb-4">
                <label className="form-label">
                  Leave From Date
                  <span>*</span>
                </label>
                <input
                  className="form-select bg-light"
                  aria-label="Default select example"
                  defaultValue=""
                  name="date"
                  type="date"
                ></input>
              </div>
              <div className="mb-4">
                <label className="form-label">Reason</label>
                <textarea
                  className="form-control bg-light"
                  id="message"
                  name=""
                  typeof="text"
                  rows="3"
                  placeholder=""
                >
                </textarea>
              </div>
              <div className="mb-5">
                <label className="form-label">Attach Document</label>
                <textarea
                  className="form-control bg-light"
                  id="message"
                  rows="1"
                  placeholder=""
                ></textarea>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="mb-4">
                <label className="form-label">
                  Name
                  <span>*</span>
                </label>
                <select
                  className="form-select bg-light"
                  aria-label="Default select example"
                  defaultValue=""
                  name="name"
                  type="text"
                >
                  <option value="">Select</option>
                  <option value="">Amit jain</option>
                </select>
              </div>
             <div  className="mb-4">
                <label className="form-label">
                  Leave Type 
                  <span>*</span>
                </label>
                <select
                  className="form-select bg-light"
                  aria-label="Default select example"
                  defaultValue=""
                  name=""
                  type="text"
                >
                  <option value="">Select</option>
                  <option value="">Casual Leave (7)</option>
                  <option value="">Privilege Leave  (11)</option>
                  <option value="">Sick Leave (12)</option>
                  <option value="">Maternity Leave (10)</option>
                  <option value="">Paternity Leave. (10)</option>
                  <option value="">Fever Leave (15)</option>
                </select>
                  
              </div>
              <div className="mb-4">
                <label className="form-label">
                  Leave To Date
                  <span>*</span>
                </label>
                <input
                  className="form-select bg-light"
                  aria-label="Default select example"
                  defaultValue=""
                  name="date"
                  type="date"
                >
                </input>
              </div>
              <div className="mb-4">
                <label className="form-label">Note</label>
                <textarea
                  className="form-control bg-light"
                  id="message"
                  rows="3"
                  placeholder=""
                ></textarea>
              </div>
             <div class="mb-5">
              <label class="form-label">Status</label>
              <div class="d-flex align-items-center gap-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="status"
                    id="pending"
                    value="Pending"
                    
                  />
                  <label class="form-check-label" for="pending">
                    Pending
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="status"
                    id="approved"
                    value="Approved"
                  />
                  <label class="form-check-label" for="approved">
                    Approved
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="status"
                    id="disapprove"
                    value="Disapprove"
                  />
                  <label class="form-check-label" for="disapprove">
                    Disapprove
                  </label>
                </div>
              </div>
            </div>
            </div>
            <div className="border-bottom"></div>
            <div className="text-end save-btn mt-4">
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default CreateRequestModal;
