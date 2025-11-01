import { GoPlus } from "react-icons/go";
import DatePickerComponent from "./DatePickerComponent";
import AsyncSelect from "react-select/async";

const CreateIdpModal = (handleCloseModal) => {
  const debouncedLoadOptions = () => {};
  return (
    <form className="form-outer">
      <div className="modal-content">
        <div className="modal-header py-2">
          <div className="d-flex gap-3 align-items-center">
            <div style={{ width: "350px" }}>
              <AsyncSelect
                cacheOptions
                loadOptions={debouncedLoadOptions}
                defaultOptions={false}
                placeholder="Type at least 2 letters..."
              />
            </div>
            <div>
              <button
                type="button"
                class="btn btn-secondary shadow-none py-2 px-3"
                onClick={handleCloseModal}
              >
                <GoPlus size={22} />
                Add Paient
              </button>
            </div>
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            onClick={handleCloseModal}
          ></button>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="row">
                <div className="col-12 col-lg-4">
                  <div className="mb-4">
                    <label className="form-label">Symptoms Type</label>
                    <select
                      name="symptoms_type"
                      id="symptoms_type"
                      className="form-select bg-light"
                    >
                      <option value="">Select</option>
                      <option value="Eating or weight problems">
                        Eating or weight problems
                      </option>
                      <option value="Emotional problems">
                        Emotional problems
                      </option>
                      <option value="Muscle or joint problems">
                        Muscle or joint problems
                      </option>
                      <option value="Skin problems">Skin problems</option>
                      <option value="Bladder problems">Bladder problems</option>
                      <option value="Stomach  problems">
                        Stomach problems
                      </option>
                      <option value="Lung problems">Lung problems</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="mb-4">
                    <label className="form-label">Symptoms Title</label>
                    <select
                      name="symptoms_title"
                      id="symptoms_title"
                      className="form-select bg-light"
                    >
                      <option value={""}>Select</option>
                      <option value="Cramps and injuries">
                        Cramps and injuries
                      </option>
                      <option value=" Atopic dermatitis (Eczema)">
                        Atopic dermatitis (Eczema)
                      </option>
                      <option value=" Bladder leakage">Bladder leakage</option>
                      <option value=" Constant or severe abdominal pain.">
                        Constant or severe abdominal pain.
                      </option>
                      <option value=" Asthma">Asthma</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="mb-4">
                    <label className="form-label">Symptoms Description</label>
                    <textarea
                      className="form-control bg-light"
                      name="symptoms_description"
                      id="symptoms_description"
                      rows="2"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label">Note</label>
                <textarea
                  className="form-control bg-light"
                  name="note"
                  id="note"
                  rows="2"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="form-label">Previous Medical Issue</label>
                <input
                  className="form-control bg-light"
                  type="text"
                  name="previous_medical_issue"
                  id="previous_medical_issue"
                />
              </div>
            </div>
            <div class="col-lg-12">
              <div class="row g-3">
                <div class="col-12">
                  <label class="form-label">
                    Admission Date <span class="text-danger">*</span>
                  </label>
                  <DatePickerComponent type="date" class="form-control" />
                </div>

                <div class="col-md-6">
                  <label class="form-label">Case</label>
                  <input type="text" class="form-control" />
                </div>

                <div class="col-md-6">
                  <label class="form-label">TPA</label>
                  <input type="text" class="form-control" />
                </div>

                <div class="col-md-6">
                  <label class="form-label">Casualty</label>
                  <select class="form-select">
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                </div>

                <div class="col-md-6">
                  <label class="form-label">Old Patient</label>
                  <select class="form-select">
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                </div>

                <div class="col-md-6">
                  <label class="form-label">
                    Credit Limit ($) <span class="text-danger">*</span>
                  </label>
                  <input type="number" class="form-control" value="20000" />
                </div>

                <div class="col-md-6">
                  <label class="form-label">Reference</label>
                  <input type="text" class="form-control" />
                </div>

                <div class="col-md-12">
                  <label class="form-label">
                    Consultant Doctor <span class="text-danger">*</span>
                  </label>
                  <select class="form-select">
                    <option value="Select">Select</option>
                    <option value="Amit  Singh (9009)">Amit  Singh (9009)</option>
                    <option value="Reyan Jain (9011)">Reyan Jain (9011)</option>
                    <option value="Sansa Gomez (9008)">Sansa Gomez (9008)</option>
                    <option value="Sonia Bush (9002)">Sonia Bush (9002)</option>
                    <option value="Sonia Bush (9002)">Sonia Bush (9002)</option>
                  </select>
                </div>

                <div class="col-md-6">
                  <label class="form-labels">Bed Group</label>
                  <select class="form-select">
                    <option value="Select">Select</option>
                    <option value="VIP Ward - Ground  Floor">VIP Ward - Ground  Floor</option>
                    <option value="Private Ward - 3rd Floor">Private Ward - 3rd Floor</option>
                    <option value="General Ward Male - 3rd Floor">General Ward Male - 3rd Floor</option>
                    <option value="ICU - 2nd Floor">ICU - 2nd Floor</option>
                    <option value="NICU - 2nd Floor">NICU - 2nd Floor</option>
                    <option value="AC (Normal) - 1st Floor">AC (Normal) - 1st Floor</option>
                    <option value="Non AC - 4th Floor">Non AC - 4th Floor</option>
                  </select>
                </div>

                <div class="col-md-6">
                  <label class="form-labels">
                    Bed Number <span class="text-danger">*</span>
                  </label>
                  <select class="form-select">
                    <option>Select</option>
                    <option value="TF - 104">TF - 104</option>
                    <option value="TF - 107">TF - 107</option>
                  </select>
                </div>

                <div class="col-12">
                  <label class="form-labels">
                    Live Consultation
                  </label>
                  <select class="form-select">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-bottom"></div>
      <div className="text-end mt-5 save-btn">
        <button className="btn btn-primary">Save</button>
      </div>
    </form>
  );
};
export default CreateIdpModal;
