import { FaCheckDouble } from "react-icons/fa";
import DatePickerComponent from "../DatePickerComponent";
import TimePeecker from "../TimePeecker";

const IpdMedicationModal = ({ handleCloseModal }) => {
  return (
    <form className="form-outer">
      <div className="modal-content">
        <div className="modal-header py-2">
          <h5 className="modal-title">Add Medication Dose</h5>
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
                  <label className="form-label">Date<span>*</span></label>
                  <DatePickerComponent
                    className="form-control bg-light"
                    aria-label="Default select example"
                    defaultValue=""
                    name="gender"
                    type="date"
                    id="date"
                  />
                </div>
                <div className="mb-4">
                    <label className="form-label">Medicine Category<span>*</span></label>
                  <select
                    className="form-select bg-light"
                    aria-label="Default select example"
                    defaultValue=""
                    name="time"
                    id="time"
                    type="time"
                    >
                    <option value="Select">Select</option>
                    <option value="Syrup">Syrup</option>
                    <option value="Capsule">Capsule</option>
                    <option value="Injection">Injection</option>
                    <option value="Ointment">Ointment</option>
                    <option value="Cream">Cream</option>
                    <option value="Surgical">Surgical</option>
                    <option value="Drops">Drops</option>
                    <option value="Inhalers">Inhalers</option>
                    <option value="Implants / Patches ">Implants / Patches </option>
                    <option value="Liquid">Liquid</option>
                    <option value="Preparations">Preparations</option>
                    <option value="Diaper">Diaper</option>
                    <option value="Tablet">Tablet</option>
                  </select>
                </div>
                <div className="mb-4">
                    <label className="form-label">Dosage<span>*</span></label>
                  <select
                    className="form-select bg-light"
                    aria-label="Default select example"
                    defaultValue=""
                    name="dosage"
                    id="dosage"
                    type="text"
                    >
                        <option value="Select">Select</option>
                        <option value="1/2 HVL">1/2 HVL</option>
                        <option value="1 KHz">1 KHz</option>
                  </select>
                </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="mb-4">
                  <label className="form-label">
                   Time
                    <span>*</span>
                  </label>
                  <TimePeecker
                    className="form-control bg-light"
                    aria-label="Default select example"
                    defaultValue=""
                    name="time"
                    id="time"
                    type="time"
                  />
                </div>
                <div className="mb-4">
                   <label className="form-label">
                    Medicine Name 
                    <span>*</span>
                  </label>
                  <select className="form-select bg-light"
                    aria-label="Default select example"
                    defaultValue=""
                    name="select"
                    id="select"
                    type="select"
                    >
                    <option value="Select">Select</option>
                    <option value="AMOXIL">AMOXIL</option>
                    <option value="AMOXIL SF">AMOXIL SF</option>
                    <option value="AUSTELL-PARACETAMOL">AUSTELL-PARACETAMOL</option>
                    <option value="BETAMOX SF">BETAMOX SF</option>
                    <option value="LILLY-FLUOXETINE">LILLY-FLUOXETINE</option>
                    <option value="MOXYMAX SF">MOXYMAX SF</option>
                    <option value="ZALOXY">ZALOXY</option>
                    <option value="ZOXIL S">ZOXIL S</option>
                    <option value="Amlodipine">Amlodipine</option>
                  </select>
                </div>
            </div>
            <div className="col-12">
                <div className="mb-5">
                    <label className="form-label">Remarks<span>*</span></label>
                    <textarea className="form-control bg-light" name="remarks" id="remarks" type="text" rows="1"></textarea>
                </div>
            </div>
            <div className="border-bottom"></div>
            <div className="text-end mt-5 save-btn">
              <button className="btn btn-primary">
                <FaCheckDouble size={20} className="pe-2" />
                Save</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default IpdMedicationModal;
