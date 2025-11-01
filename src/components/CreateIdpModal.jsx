import DatePickerComponent from "./DatePickerComponent"

const CreateIdpModal = (handleCloseModal) => {
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
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="mb-4">
                  <label className="form-label">
                   Apply Datekkhkhkk
                    <span>*</span>
                  </label>
                  <DatePickerComponent
                    className="form-select bg-light"
                    aria-label="Default select example"
                    defaultValue=""
                    name="gender"
                    type="date"
                  />
                </div>
                <div  className="mb-4">
                  <label className="form-label">
                    Leave From Date
                    <span>*</span>
                  </label>
                  <DatePickerComponent
                    className="form-select bg-light"
                    aria-label="Default select example"
                    defaultValue=""
                    name="date"
                    type="date"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div  className="mb-4">
                <label className="form-label">
                  Leave Type
                  <span>*</span>
                </label>
                <select
                  className="form-select bg-light"
                  aria-label="Default select example"
                  defaultValue=""
                  name="date"
                  type="date"
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
              <div>
                <label className="form-label">
                  Leave To Date
                  <span>*</span>
                </label>
                <DatePickerComponent
                  className="form-select bg-light"
                  aria-label="Default select example"
                  defaultValue=""
                  name="date"
                  type="date"
                />
                
              </div>
            </div>
            <div className="mb-4">
                <label className="form-label">Reason</label>
                <textarea className="form-control bg-light" id="message" rows="3" placeholder=""></textarea>
            </div>
            <div className="mb-5">
                <label className="form-label">Attach Document</label>
                  <textarea className="form-control bg-light" id="message" rows="1" placeholder=""></textarea>
            </div>
            <div className="border-bottom"></div>
            <div className="text-end mt-5 save-btn">
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    )
}
export default CreateIdpModal