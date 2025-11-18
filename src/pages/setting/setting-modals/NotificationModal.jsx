import DatePickerComponent from "../../../components/DatePickerComponent"

const NotificationModal = ({handleCloseModal}) => {
    return(
        <form className="form-outer">
      <div className="modal-content">
        <div className="modal-header py-2">
          <h5 className="modal-title">Template</h5>
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
            <form action="">
                <div className="col-12">
                    <div>
                        <h6>OPD Patient Registration</h6>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Subject </label>
                        <input className="form-control" type="text" placeholder="OPD Patient" />
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Template Id </label>
                        <input className="form-control" type="text" placeholder="" />
                    </div>
                    <div className="mb-5">
                        <label className="form-label">Template </label>
                        <textarea className="form-control" rows="4" name="template" id="template" placeholder="Dear your OPD Registration at Smart Hospital is successful on date with Patient Id  and OPD No"></textarea>
                    </div>
                </div>
            </form>
            <div className="border-bottom"></div>
            <div className="text-end mt-4 save-btn">
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    )
}
export default NotificationModal