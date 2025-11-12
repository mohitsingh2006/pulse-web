
const OverviewPatientDetailModal = ( {handleCloseModal} ) => {
    return(
          <form className="form-outer">
      <div className="modal-content">
        <div className="modal-header py-2">
          <h5 className="modal-title">Patient Details</h5>
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
                <span>Rachel Priest (1162)</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Gender</b>{" "}
                <span>Female</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Phone</b>{" "}
                <span>90980678776</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Address</b>{" "}
                <span>Mr . 45 CA</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Blood Group</b>{" "}
                <span>A+</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Known Allergies</b>{" "}
                <span>Dust allergies</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Case</b>{" "}
                <span></span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Casualty</b>{" "}
                <span>Yes</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">TPA</b>{" "}
                <span>Star Health Insurance</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Star Health Insurance</b>{" "}
                <p>Sonia Bush (9002)</p>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Previous Medical Issue</b>{" "}
                <p></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Guardian Name</b>{" "}
                <span>Albert Priest</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Marital Status</b>{" "}
                <span>married</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Email</b>{" "}
                <span className="">Email</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Age</b>{" "}
                <span className="">26 Year, 6 Month, 1 Day</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Shift</b>{" "}
                <span>Morning</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Symptoms</b>{" "}
                <span className="d-block">Atopic dermatitis (Eczema) Atopic dermatitis usually develops in early childhood and is more common in people who have a family history of the condition.</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Admission Date</b>{" "}
                <span>11/10/2025 11:15 AM</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Reference</b>{" "}
                <span></span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Bed Group</b>{" "}
                <span>Private Ward-3rd Floor</span>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <b className="add-datail">Bed Number</b>{" "}
                <span>TF - 104</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    )
}
export default OverviewPatientDetailModal;