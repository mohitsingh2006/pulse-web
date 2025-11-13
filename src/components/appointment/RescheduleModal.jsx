import DatePickerComponent from "../DatePickerComponent";

const RescheduleModal = ({handleCloseModal}) => {
    return(
        <form className="form-outer">
            <div className="modal-content">
                <div className="modal-header py-2">
                    <h5 className="modal-title">Reschedule</h5>
                    <div className="d-flex gap-3 align-items-center"></div>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        onClick={handleCloseModal}
                    ></button>
                </div>
                <div className="modal-body">
                    <div className="row py-2">
                        <div className="col-12 col-lg-3">
                            <div className="mb-4">
                                <label className="form-label">Doctor<span>*</span></label>
                                <select 
                                    className="form-select"
                                    aria-label="Default select example"
                                    defaultValue=""
                                    id="doctor"
                                    name="doctor"
                                   >
                                    <option value="Select">Select</option>
                                    <option value="Select"></option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Slot<span>*</span></label>
                                <select 
                                    className="form-select"
                                    aria-label="Default select example"
                                    defaultValue=""
                                    id="slot"
                                    name="slot"
                                   >
                                    <option value="Select">Select</option>
                                    <option value="Select"></option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="mb-4">
                                <label className="form-label">Doctor Fees ($) <span>*</span></label>
                                <input className="form-control" type="text" id="doctor_fees" name="doctor_fees" />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Appointment Priority</label>
                                <select 
                                    className="form-select"
                                    aria-label="Default select example"
                                    defaultValue=""
                                    id="appointment_priority"
                                    name="appointment_priority"
                                   >
                                    <option value="Select">Select</option>
                                    <option value="Normal">Normal</option>
                                    <option value="">Urgent</option>
                                    <option value="">Very Urgent</option>
                                    <option value="">Low</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="mb-4">
                                <label className="form-label">Shift<span>*</span></label>
                                <select className="form-select" type="text" id="Shift" name="Shift">
                                    <option value="Select"></option>
                                    <option value="Morning">Morning</option>
                                    <option value="Evening">Evening</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Discount Percentage</label>
                                <input className="form-control" type="text" id="discount_percentage" name="discount_percentage" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="mb-4">
                                <label className="form-label">Appointment Date<span>*</span></label>
                                <DatePickerComponent 
                                    className="form-control" type="date" id="date" name="date" 
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Status<span>*</span></label>
                                <select className="form-select" type="text" id="Shift" name="Shift">
                                    <option value="Select">Select</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Approved">Approved</option>
                                    <option value="cancel">cancel</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="mb-4">
                                <label className="form-label">Live Consultant (On Video Conference)<span>*</span></label>
                                 <select className="form-select" type="text" id="Shift" name="Shift">
                                    <option value="Select">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-4">
                                <label className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    name="Message"
                                    id="Message"
                                    rows="1"
                                ></textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-4">
                                <label className="form-label">Alternate Address</label>
                                <textarea
                                    className="form-control"
                                    name="Message"
                                    id="Message"
                                    rows="1"
                                ></textarea>
                            </div>
                        </div>
                        <div className="border-bottom mb-4"></div>
                        <div className="text-end">
                            <button className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default RescheduleModal
;

