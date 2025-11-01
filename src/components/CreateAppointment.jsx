import AsyncSelect from "react-select/async";
import debounce from "lodash.debounce";
import { useCallback } from "react";
import axiosInstance from "../axiosInstance";
import { Controller, useForm } from "react-hook-form";
import FormError from "./FormError";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";

const CreateAppointment = ({ handleCloseModal, handlePatientModal,fetchAppointment }) => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
  });

  // API function (fetch data when called)
  const fetchPatientData = async (inputValue) => {
    if (inputValue.length < 2) return []; // only trigger after 2 characters

    try {
      const response = await axiosInstance.get(
        `${API_URL}patients/search_patients?name=${inputValue}`
      );
      if (response.status === 200) {
        return response.data.data.map((item) => ({
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
      fetchPatientData(inputValue).then(callback);
    }, 500),
    []
  );

  const onSubmit = async(data) => {
    if(data.length  === 0) {
      console.log('Data can not be blank')
    }
    try {
      const toastId = toast.loading("Please wait...");

      
      data.patient_id = data.user.value;

      const response = await axiosInstance.post(`${API_URL}appointments/create_appointment`, JSON.stringify(data));

      if (response.status === 201 || response.data.message) {
         toast.success(response.data.message, {
          id: toastId,
        });
        reset();
        handleCloseModal(false)
        fetchAppointment();
      }      
    } catch (err) {
      toast.dismissAll();
      if (err.status === 400) {
        toast.error(err.response.data.message);
      } else {
        toast.error(err.message);
        reset();
      }
    }
  };

  

  return (
    <div className="modal-content">
      <div className="modal-header py-2">
        <div className="d-flex gap-3 align-items-center">
          <div className="form-outer" style={{ width: "350px" }}>
            <Controller
              name="user"
              control={control}
              rules={{ required: "User is required" }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <AsyncSelect
                    {...field}
                    cacheOptions
                    defaultOptions
                    loadOptions={debouncedLoadOptions}
                    onChange={(selectedOption) =>
                      field.onChange(selectedOption)
                    }
                    value={field.value}
                    placeholder="Select user..."
                  />
                  {error && (
                    <small className="text-white">{error.message}</small>
                  )}
                </>
              )}
            />
          </div>
          <div>
            <button
              type="button"
              class="btn btn-secondary shadow-none py-2"
              onClick={handlePatientModal}
            >
              Add New Paient
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
      <form className="form-outer" onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-body">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="row">
                <div className="col-12 col-lg-3">
                  <div className="mb-4">
                    <label className="form-label">
                      Doctor <span>*</span>
                    </label>
                    <select
                      className={`form-select bg-light shadow-none ${
                        errors.doctor_id && "is-invalid"
                      }`}
                      aria-label="Default select example"
                      defaultValue=""
                      name="doctor_id"
                      id="doctor_id"
                      {...register("doctor_id",{
                        required: "Doctor field is requried.",
                      })}
                    >
                      <option value="">Select</option>
                      <option value="2">Reyan Jain (9011)</option>
                      <option value="3">Sansa Gomez (9008)</option>
                      <option value="4">Sonia Bush (9002)</option>
                    </select>
                    {errors.doctor_id && (
                      <FormError error={errors.doctor_id.message} />
                    )}
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="mb-4">
                    <label className="form-label">
                      Doctor Fees ($) <span>*</span>{" "}
                    </label>
                    <input
                      type="number"
                       className={`form-control bg-light shadow-none ${
                        errors.doctor_fees && "is-invalid"
                      }`}
                      placeholder=""
                      name="doctor_fees"
                      id="doctor_fees"
                      {...register("doctor_fees", {
                        required: "Doctor fees field is requried.",
                        pattern: {
                          value: /^\d+(\.\d{1,2})?$/, 
                          message: "Doctor fees field is numaric.",
                        },
                      })}
                    />
                    {errors.doctor_fees && (
                      <FormError error={errors.doctor_fees.message} />
                    )}
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="mb-4">
                    <label className="form-label">
                      Shift <span>*</span>{" "}
                    </label>
                    <select
                        className={`form-select bg-light shadow-none ${
                        errors.shift && "is-invalid"
                      }`}
                      aria-label="Default select example"
                      defaultValue=""
                      name="shift"
                      id="shift"
                      {...register("shift", {
                        required: "shift  field is requried.",
                      })}
                    >
                      <option value="">Select</option>
                      <option value="Morning">Morning</option>
                      <option value="Evening">Evening</option>
                    </select>
                     {errors.shift && (
                      <FormError error={errors.shift.message} />
                    )}
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="mb-4">
                    <label className="form-label">
                      Appointment Date <span>*</span>
                    </label>
                    <Controller
                      control={control}
                      name="appointment_date"
                      rules={{ required: "Appointment date is required" }} 
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          selected={field.value}
                          onChange={(date) => field.onChange(date)}
                          dateFormat="yyyy-MM-dd"
                          className="form-control"
                          placeholderText="Select Date"
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                          autoComplete="off"
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="mb-4">
                    <label className="form-label">
                      Slot <span>*</span>{" "}
                    </label>
                    <select
                      className={`form-select bg-light shadow-none ${
                        errors.slot && "is-invalid"
                      }`}
                      aria-label="Default select example"
                      defaultValue=""
                      type="number"
                      id="slot"
                      name="slot"
                       {...register("slot", {
                        required: "Slot field is requried.",
                      })}
                    >
                      <option value="">Select</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="12:00 PM">12:00 PM</option>
                    </select>
                     {errors.slot && (
                        <FormError error={errors.slot.message} />
                     )}
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="mb-4">
                    <label className="form-label">
                      Appointment Priority <span>*</span>{" "}
                    </label>
                    <select
                      className={`form-select bg-light shadow-none ${
                          errors.appointment_priority && "is-invalid"
                      }`}
                      aria-label="Default select example"
                      defaultValue=""
                      name="appointment_priority"
                      id="appointment_priority"
                       {...register("appointment_priority", {
                        required: "Appointment priority field is requried.",
                      })}
                    >
                      <option value="Normal">Normal</option>
                      <option value="Urgent">Urgent</option>
                      <option value="Very Urgrnt">Very Urgrnt</option>
                      <option value="Low">Low</option>
                    </select>
                     {errors.appointment_priority && (
                        <FormError error={errors.appointment_priority.message} />
                     )}
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="mb-4">
                    <label className="form-label">
                      Payment Mode <span>*</span>{" "}
                    </label>
                    <select
                      className={`form-select bg-light shadow-none ${
                        errors.payment_mode && "is-invalid"
                      }`}
                      aria-label="Default select example"
                      defaultValue=""
                      type="text"
                      name="payment_mode"
                      id="payment_mode"
                       {...register("payment_mode", {
                        required: "Payment field is requried.",
                      })}
                    >
                      <option value="">Select</option>
                      <option value="Cash">Cash</option>
                      <option value="Cheque">Cheque</option>
                      <option value="UPI">UPI</option>
                      <option value="Online">Online</option>
                    </select>
                     {errors.payment_mode && (
                        <FormError error={errors.payment_mode.message} />
                     )}
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="mb-4">
                    <label className="form-label">
                      Status <span>*</span>{" "}
                    </label>
                    <select
                      className={`form-select bg-light shadow-none ${
                        errors.status && "is-invalid"
                      }`}
                      aria-label="Default select example"
                      defaultValue=""
                      name="status"
                      id="status"
                      {...register("status", {
                        required: "Status field is requried.",
                      })}
                    >
                      <option value="">Select</option>
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Cancel">Cancel</option>
                    </select>
                    {errors.status && (
                        <FormError error={errors.status.message} />
                     )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="mb-4">
                  <label className="form-label">Discount Percentage</label>
                  <input
                    type="number"
                    className={`form-control bg-light shadow-none ${
                        errors.discount_percentage && "is-invalid"
                      }`}
                    placeholder=""
                    name="discount_percentage"
                    id="discount_percentage"
                    {...register("discount_percentage", {
                        required: false,
                        pattern: {
                          value: /^\d+(\.\d{1,2})?$/, 
                          message: "Discount field is numaric.",
                        },
                    })}
                  />
                  {errors.discount_percentage && (
                        <FormError error={errors.discount_percentage.message} />
                     )}
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="mb-4">
                  <label className="form-label">
                    Live Consultant (On Video Conference)
                  </label>
                  <select
                    className="form-select bg-light shadow-none"
                    aria-label="Default select example"
                    defaultValue=""
                    name="live_consultant"
                    id="live_consultant"
                    {...register("live_consultant", {
                        required: false,
                    })}
                  >
                    <option value="">Select</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="mb-4">
                  <label className="form-label">Message</label>
                  <textarea
                    class="form-control bg-light"
                    rows="2"
                    name="message"
                    id="message"
                    {...register("message", {
                        required: false,
                    })}
                  ></textarea>
                </div>
              </div>
              <div className="col-12 col-lg-12">
                <div className="mb-4">
                  <label className="form-label">Alternate Address</label>
                  <textarea
                    className="form-control bg-light"
                    placeholder=""
                    id="alternate_address"
                    name="alternate_address"
                    {...register("alternate_address", {
                        required: false,
                    })}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="submit" className="btn btn-primary shadow-none">
            Create Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAppointment;
