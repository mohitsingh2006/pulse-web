import { useForm, Controller } from "react-hook-form";
import FormError from "./FormError";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { GoTrash } from "react-icons/go";
import toast from "react-hot-toast";
import axiosInstance from "../axiosInstance";

const CreatePatient = ({ handleCloseModal, fetchPatient }) => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
  });

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const createPatientFrm = async (data) => {
    if(data.length  === 0) {
      console.log('Data can not be blank')
    }

    try {
      const toastId = toast.loading("Please wait...");

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("guardian_name", data.guardian_name);
      formData.append("gender", data.gender);
      formData.append("date_of_birth", data.date_of_birth);
      //formData.append("year", data.year);
      //formData.append("month", data.month);
      formData.append("photo", data.file);
      formData.append("blood_group", data.blood_group);
      formData.append("marital_status", data.marital_status);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("address", data.address);
      formData.append("remark", data.remark);
      formData.append("known_allergies", data.known_allergies);
      formData.append("tpa", data.tpa);
      formData.append("tpa_id", data.tpa_id);
      formData.append("tpa_validity", data.tpa_validity);
      formData.append("national", data.national);
      formData.append("alternate_number", data.alternate_number);


      const response = await axiosInstance.post(`${API_URL}patients`, formData,{
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201 || response.data.message) {
         toast.success(response.data.message, {
          id: toastId,
        });
        reset();
        handleCloseModal(false)
        fetchPatient();
      }      
    } catch (err) {
      toast.dismissAll();
      if (err.status === 400) {
        toast.error(err.response.data.message);
      } else {
        toast.error(err.message);
        //reset();
      }
    }
  };

  return (
    <form className="form-outer" onSubmit={handleSubmit(createPatientFrm)}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="staticBackdropLabel">
            Add Patient
          </h5>
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
                <label className="form-label">
                  Name
                  <span>*</span>
                </label>
                <input
                  type="text"
                  className={`form-control bg-light ${
                    errors.name && "is-invalid"
                  }`}
                  placeholder=""
                  name="name"
                  id="name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />

                {errors.name && <FormError error={errors.name.message} />}
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="mb-4">
                <label className="form-label">Guardian Name</label>
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder=""
                  name="guardian_name"
                  id="guardian_name"
                  {...register("guardian_name", {
                    required: false,
                  })}
                />
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-12 col-lg-5">
                  <div className="mb-4">
                    <label className="form-label">Gender</label>
                    <select
                      className="form-select bg-light"
                      aria-label="Default select example"
                      defaultValue=""
                      name="gender"
                      id="gender"
                      {...register("gender", {
                        required: false,
                      })}
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="mb-4">
                    <label htmlFor="date_of_birth" className="form-label">
                      Date of Birth <span>*</span>
                    </label>

                    <Controller
                      control={control}
                      name="date_of_birth"
                      rules={{ required: "Date of Birth is required" }} 
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
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="mb-4">
                    <label className="form-label">Blood Group</label>
                    <select
                      name="blood_group"
                      className="form-control bg-light"
                      defaultValue=""
                      autoComplete="off"
                      id="blood_group"
                      {...register("blood_group", {
                        required: false,
                      })}
                    >
                      <option value="">Select</option>
                      <option value="B+">B+</option>
                      <option value="A+">A+</option>
                      <option value="AB">AB-</option>
                      <option value="AB+">AB+</option>
                      <option value="O">O-</option>
                      <option value="A">A-</option>
                      <option value="B">B-</option>
                      <option value="O+">O+</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="mb-4">
                    <label className="form-label">Marital Status</label>
                    <select
                      name="marital_status"
                      className="form-control bg-light"
                      defaultValue=""
                      autoComplete="off"
                      id="marital_status"
                      {...register("marital_status", {
                        required: false,
                      })}
                    >
                      <option value="">Select</option>
                      <option value="single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Widowed">Widowed</option>
                      <option value="Separated">Separated</option>
                      <option value="Not Specified">Not Specified</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <div className="mb-4">
                <label className="form-label">
                  Phone <span>*</span>
                </label>
                <input
                  type="number"
                  className={`form-control bg-light ${
                    errors.phone && "is-invalid"
                  }`}
                  placeholder=""
                  maxLength={10}
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Phone number must be exactly 10 digits",
                    },
                  })}
                  onInput={(e) => {
                    // only allow numeric characters
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                />

                {errors.phone && <FormError error={errors.phone.message} />}
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="mb-4">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className={`form-control bg-light ${
                    errors.email && "is-invalid"
                  }`}
                  placeholder=""
                  name="email"
                  id="email"
                  {...register("email", {
                    required: false,
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && <FormError error={errors.email.message} />}
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="mb-4">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder=""
                  name="address"
                  id="address"
                  {...register("address", {
                    required: false,
                  })}
                />
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="mb-4">
                <label className="form-label">Remarks</label>
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder=""
                  name="remark"
                  id="remark"
                  {...register("remark", {
                    required: false,
                  })}
                />
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="mb-4">
                <label className="form-label">Any Known Allergies</label>
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder=""
                  name="known_allergies"
                  id="known_allergies"
                  {...register("known_allergies", {
                    required: false,
                  })}
                />
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="mb-4">
                <label className="form-label">TPA</label>
                <select
                  className="form-control bg-light"
                  defaultValue=""
                  name="tpa"
                  id="tpa"
                  {...register("tpa", {
                    required: false,
                  })}
                >
                  <option value="">Select</option>
                  <option value="Health Life Insurance">
                    Health Life Insurance
                  </option>
                  <option value="Star Health Insurance">
                    Star Health Insurance
                  </option>
                  <option value="IDBI Federal">IDBI Federal</option>
                  <option value="CGHS">CGHS</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="mb-4">
                <label className="form-label">TPA ID</label>
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder=""
                  name="tpa_id"
                  id="tpa_id"
                  {...register("tpa_id", {
                    required: false,
                  })}
                />
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="mb-4">
                <label className="form-label">TPA Validity</label>
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder=""
                  name="tpa_validity"
                  id="tpa_validity"
                  {...register("tpa_validity", {
                    required: false,
                  })}
                />
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="mb-4">
                <label className="form-label">
                  National Identification Number
                </label>
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder=""
                  name="national"
                  id="national"
                  {...register("national", {
                    required: false,
                  })}
                />
              </div>
            </div>

            <div className="col-12">
              <div className="mb-4">
                <label className="form-label">Alternate Number</label>
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder=""
                  name="alternate_number"
                  id="alternate_number"
                  {...register("alternate_number", {
                    required: false,
                  })}
                />
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="mb-4">
                <label className="form-label">Patient Photo</label>
                <label
                  style={{ backgroundImage: `url(${preview})` }}
                  htmlFor="file-upload"
                  className="file-uploader position-relative  d-flex align-items-center justify-content-center"
                >
                  {preview === null ? (
                    <span>Choose a file</span>
                  ) : (
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        setFile(null);
                        setPreview(null);
                      }}
                      className="delete-image shadow-lg d-flex align-items-center justify-content-center"
                    >
                      <GoTrash color="#ffffff" size={22} />
                    </div>
                  )}
                </label>

                <input
                  className="opacity-0"
                  type="file"
                  id="file-upload"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="submit"
            className={`btn btn-primary shadow-none ${
              !isValid || isSubmitting ? "disabled opacity-75" : ""
            }`}
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  aria-hidden="true"
                ></span>
                Submitting...
              </>
            ) : (
              "Create Patient"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreatePatient;
