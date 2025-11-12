const OverviewEditprofileModal = ({handleCloseModal}) => {
    return(
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
           <div class="row mb-3">
            <div class="col-md-6">
              <div className="d-flex justify-content-between">
                <div className="d-inline add-datail">Name:</div>{" "}
                <span class="text-secondary">Jason Abbot (9017)</span>
              </div>
            </div>
            <div class="col-md-6">
              <div className="d-flex justify-content-between">
                <div className="d-inline add-datail">Leave Type:</div>{" "}
                <span class="text-secondary">Maternity Leave</span>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="d-flex justify-content-between">
                <div className="add-datail">Submitted By:</div>{" "}
                <span className="text-secondary">Jason Abbot (9017)</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-between">
                <div className="add-datail">Date:</div>{" "}
                <span className="text-secondary">10/15/2025</span>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-lg-6">
              <div className="d-flex justify-content-between">
                <div className="add-datail">Leave:</div>{" "}
                <span className="text-secondary">
                  10/16/2025 - 10/20/2025 (5 Days)
                </span>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-lg-6">
              <div className="d-flex justify-content-between">
                  <div className="add-datail">Download:</div>
                  <div>
                    {/* <Link to="" className="ms-2 text-decoration-none text-primary">
                      Download File
                    </Link> */}
                  </div>
              </div>
            </div>
          </div>
        
         
        </div>
      </div>
    </form>
    )
}
export default OverviewEditprofileModal