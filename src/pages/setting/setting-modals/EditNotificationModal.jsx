
const EditNotificationModal = ({handleCloseModal}) => {
    return(
          <form className="form-outer">
      <div className="modal-content">
        <div className="modal-header py-2">
          <h5 className="modal-title">Edit Notification</h5>
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
            <form action="" className="">
                <div className="col-12">
                    <div>
                        <h6>Appointment Approved</h6>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Subject</label>
                        <input className="form-control" type="text" placeholder="Appointment Status" />
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Staff Message</label>
                        <textarea className="form-control" rows="4" nam="template" id="template" placeholder="Patient: appointment status is with Doctor: Date: "></textarea>
                    </div>
                    <div className="mb-5">
                        <label className="form-label">Patient Message</label>
                        <textarea className="form-control" rows="4" name="template" id="template" placeholder="Dear your appointment status is Date: with Doctor"></textarea>
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
export default EditNotificationModal