import AsyncSelect from "react-select/async";
import debounce from "lodash.debounce";
import { useCallback } from "react";
import axiosInstance from "../axiosInstance";
import { GoPlus } from "react-icons/go";
import DatePickerComponent from "./DatePickerComponent";
function CreateOpdModal({ handleCloseModal, handlePatientModal }) {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  // API function (fetch data when called)
  const fetchOptions = async (inputValue) => {
    if (inputValue.length < 2) return []; // only trigger after 2 characters

    try {
      const response = await axiosInstance.get(
        `${API_URL}patients/search_patients?name=${inputValue}`
      );
      console.log(response);
      if (response.status === 200) {
        return response.data.map((item) => ({
          value: item.id,
          label: item.name,
        }));
      }
    } catch (error) {
      console.error("Error fetching:", error);
      return [];
    }
  };

  // Debounce the API call by 500ms
  const debouncedLoadOptions = useCallback(
    debounce((inputValue, callback) => {
      fetchOptions(inputValue).then(callback);
    }, 500),
    []
  );

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
                onClick={handlePatientModal}
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
            <div class="col-12 col-lg-4">
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
                  <option value="Emotional problems">Emotional problems</option>
                  <option value="Muscle or joint problems">
                    Muscle or joint problems
                  </option>
                  <option value="Skin problems">Skin problems</option>
                  <option value="Bladder problems">Bladder problems</option>
                  <option value="Stomach  problems">Stomach problems</option>
                  <option value="Lung problems">Lung problems</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-lg-4">
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
            <div class="col-12 col-lg-4">
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
            <div className="col-12 col-lg-6">
              <div className="mb-4">
                <label className="form-label">Note</label>
                <textarea
                  className="form-control bg-light"
                  name="note"
                  id="note"
                  rows="2"
                ></textarea>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="mb-4">
                <label className="form-label">Any Known Allergies</label>
                <textarea
                  className="form-control bg-light"
                  name="any_known_allergies"
                  id="any_known_allergies"
                  rows="2"
                ></textarea>
              </div>
            </div>
            <div className="col-12">
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
          </div>
          <div class="row">
            <div className="col-12 col-lg-6">
              <div class="mb-4">
                <label class="form-label">
                  Admission Date <span>*</span>
                </label>
                <DatePickerComponent type="date" className="form-control" />
              </div>
              <div className="mb-4">
                <label className="form-label">Casualty</label>
                <input
                  type="text"
                  class="form-control"
                  id="casualty"
                  name="casualty"
                  placeholder="No"
                />
              </div>
              <div className="mb-4">
                <label className="form-label">Reference</label>
                <input class="form-control" id="reference" name="Reference" />
              </div>

              <div className="mb-4">
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="apply_tpa"
                  />
                  <label class="form-check-label">Apply TPA</label>
                </div>
              </div>
              <div className="mb-4">
                <label class="form-label">
                  Charge <span>*</span>
                </label>
                <select
                  type="text"
                  class="form-control"
                  id="charge"
                  name="charge"
                  placeholder=""
                >
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>

              <div className="mb-4">
                <label class="form-label">
                  Applied Charge ($)<span>*</span>
                </label>
                <input class="form-control" id="reference" name="Reference" />
              </div>

              <div class="mb-4">
                <label class="form-label">Tax</label>
                <div class="input-group">
                  <input
                    type="number"
                    class="form-control bg-light"
                    id="tax"
                    placeholder=""
                  />
                  <span class="input-group-text bg-light border-start-0">
                    %
                  </span>
                </div>
              </div>
              <div class="mb-3">
                <label for="paymentMode" class="form-label">
                  Payment Mode
                </label>
                <select id="paymentMode" class="form-select bg-light">
                  <option value="">Select mode</option>
                  <option value="Cash">Cash</option>
                  <option value="Cheque">Cheque</option>
                  <option value="Transfer to Bank Account">Transfer to Bank Account</option>
                  <option class="UPI">UPI</option>
                  <option value="t Card">Credit Card</option>
                  <option value="Online">Online</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label class="form-label">Live Consultation</label>
                  <select class="form-select" id="live_consultation" name="live_consultation">
                    <option value="No">No</option>
                    <option>Yes</option>
                  </select>
              </div>
            </div>
              
            <div className="col-12 col-lg-6">
              <div className="mb-4">
                  <label class="form-label">Case</label>
                  <input type="text" class="form-control" id="case" name="case" />
              </div>

              <div className="mb-4">
                <label class="form-labels">Old Patient</label>
                <select class="form-select">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>

              <div className="mb-4">
                <label class="form-label">
                  Consultant Doctor <span>*</span>
                </label>
                <select class="form-select">
                  <option value="Select">Select</option>
                  <option value="Amit  Singh (9009)">
                    Amit Singh (9009)
                  </option>
                  <option value="Reyan Jain (9011)">Reyan Jain (9011)</option>
                  <option value="Sansa Gomez (9008)">
                    Sansa Gomez (9008)
                  </option>
                  <option value="Sonia Bush (9002)">Sonia Bush (9002)</option>
                  <option value="Sonia Bush (9002)">Sonia Bush (9002)</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label">Charge Category<span>*</span>
                </label>
                  <select name="" id="" className="form-select">
                    <option value="Select">Select</option>
                    <option value="OPD Consultation Fees ">OPD Consultation Fees </option>
                    <option value="OPD Consultation Fees ">OPD Consultation Fees </option>
                    <option value="OPD Insurance">OPD Insurance</option>
                    <option value="Blood pressure check "> Blood pressure check </option>
                    <option value="Eye check">Eye check</option>
                    <option value="Cholesterol level check">Cholesterol level check</option>
                    <option value="Sterilization and Cleaning Equipment">Sterilization and Cleaning Equipment</option>
                    <option value="Oxygen cylinder">Oxygen cylinder</option>
                    <option value="Fire extinguisher">Fire extinguisher</option>
                    <option value="Operation Services">Operation Services </option>
                    <option value="Other Charges">Other Charges</option>
                  </select>
              </div>          
              <div className="mb-4">
                <label className="form-label">Standard Charge ($)</label>
                <input
                  className="form-control bg-light"
                  type="text"
                  name=""
                  id=""
                />
            </div>
              <div className="mb-4">
                <label className="form-label">Discount</label>
                <div class="input-group">
                  <input type="number" class="form-control" id="discount" placeholder="Enter discount" />
                  <span class="input-group-text">%</span>
                </div>
              </div>

              <div className="mb-4">
                  <label className="form-label">Amount ($)<span>*</span></label>
                  <input
                    className="form-control bg-light"
                    type="text"
                    name=""
                    id=""
                  />
              </div>

              <div className="mb-4">
                <label className="form-label">Paid Amount ($)<span>*</span></label>
                  <input
                    className="form-control bg-light"
                    type="text"
                    name=""
                    id=""
                  />
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* <div className="border-bottom"></div>
      <div className="text-end mt-5 save-btn">
        <button className="btn btn-primary">Save</button>
      </div> */}
    </form>
  );
}

export default CreateOpdModal;
