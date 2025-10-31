import AsyncSelect from "react-select/async";
import debounce from "lodash.debounce";
import { useCallback } from "react";
import axiosInstance from "../axiosInstance";
import { GoPlus } from "react-icons/go";

function CreateOpdModal({ handleCloseModal,handlePatientModal }) {
    const API_URL = import.meta.env.VITE_API_BASE_URL;

  // API function (fetch data when called)
  const fetchOptions = async (inputValue) => {
    if (inputValue.length < 2) return []; // only trigger after 2 characters

    try {
      const response = await axiosInstance.get(`${API_URL}patients/search_patients?name=${inputValue}`);
      console.log(response)
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
    <div className="modal-content">
      <div className="modal-header py-2">
          <div className="d-flex gap-3 align-items-center">
            <div className="form-outer" style={{ width:"350px" }}>
                <AsyncSelect
                  cacheOptions
                  loadOptions={debouncedLoadOptions}
                  defaultOptions={false}
                  placeholder="Type at least 2 letters..."
                />
            </div>
            <div>
                <button type="button"class="btn btn-secondary shadow-none py-2 px-3" onClick={handlePatientModal}>
                  <GoPlus size={22}/>
                  Add Paient</button>
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
        <form className="form-outer">
          <div className="row">
            <div className="col-12 col-lg-8">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="d-flex align-items-center gap-3 pe-3 ">
                            <div>
                               <label className="form-label">Symptoms Type</label>
                                 <select
                                  className="form-select bg-light shadow-none"
                                  aria-label="Default select example"
                                  defaultValue=""
                                >
                                <option value="">Select</option>
                                <option value="1">Eating or weight problems</option>
                                <option value="2">Emotional problems</option>
                                <option value="3">Muscle or joint problems</option>
                                <option value="4">Skin Problem</option>                                
                              </select>
                            </div>
                            <div>
                                <label className="form-label">Symptoms Title</label>
                                 <select
                                  className="form-select bg-light shadow-none"
                                  aria-label="Default select example"
                                  defaultValue=""
                                  type="select"
                                >
                                <option value="">Select</option>
                                <option value="1"></option>                          
                              </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div>
                            <label className="form-label">Symptoms Description</label>
                            <textarea class="form-control bg-light" rows="2"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-4">
                <div className="border">d</div>
            </div>
          </div>
        </form>
      </div>
      {/* <div className="modal-footer">
        <button type="button" className="btn btn-primary shadow-none">
          Create Opd
        </button>
      </div> */}
    </div>
  )
}

export default CreateOpdModal
