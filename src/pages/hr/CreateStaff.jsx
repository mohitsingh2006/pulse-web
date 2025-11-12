import { FaCheckDouble } from "react-icons/fa6";
import Layout from "../../_layout";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../../axiosInstance";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import FormError from "../../components/FormError";

const CreateStaff = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const [roles, setRole] = useState([]);
  const [departments, setDepartment] = useState([]);
  const [designations, setDesignation] = useState([]);
  const [specialists, setSpecialist] = useState([]);

  const [loadingObj, setLoadingObj] = useState({
    pageLoading: true,
  });

  const role = [
    { id: 1, role_name: "Admin" },
    { id: 2, role_name: "HR" },
  ];

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });


  const onSubmit = async (data) => {
      console.log(data);
      try {
        const toastId = toast.loading("Please wait...");

        const formData = new FormData();

        
      Object.keys(data).forEach((key) => {
        if (key === "Photo" && data.Photo) {
          formData.append("Photo", data.Photo); 
        } else if (key === "specialist" && Array.isArray(data.specialist)) {
           formData.append(`specialist`, data.specialist[0].value);

          data.specialist.forEach((item, index) => {
            //formData.append(`specialist[${index}]`, item.value);            
          });
        } else {
          formData.append(key, data[key]);
        }
      });

    
      const response = await axiosInstance.post(`${API_URL}staff/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201 || response.data.message) {
         toast.success(response.data.message, {
          id: toastId,
        });
        //reset();
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

  const roleFetch = async () => {
    try {
      const response = await axiosInstance.get(`${API_URL}masters/roles`);
      if (response.status === 200) {
        setRole(response.data.data);
      }

      const responseI = await axiosInstance.get(
        `${API_URL}masters/departments`
      );
      if (responseI.status === 200) {
        setDepartment(responseI.data.data);
      }

      const responseII = await axiosInstance.get(
        `${API_URL}masters/specialists`
      );
      if (responseII.status === 200) {
        if (responseII.data && responseII.data.data.length > 0) {
          const specialistOptions = responseII.data.data.map((item) => ({
            value: item.id,
            label: item.specialist_name,
          }));

          setSpecialist(specialistOptions);
        }
      }

      const responseIV = await axiosInstance.get(
        `${API_URL}masters/designations`
      );
      if (responseIV.status === 200) {
        setDesignation(responseIV.data.data);
      }

      setLoadingObj({ ...loadingObj, pageLoading: false });
    } catch (error) {
      toast.error(error.message);
      setLoadingObj({ ...loadingObj, pageLoading: false });
    }
  };

  useEffect(() => {
    roleFetch();
  }, []);

  return (
    <Layout>
      <main className="px-4 pb-5 appointment-page position-relative">
        {loadingObj.pageLoading && <div className="screen-overlay"></div>}

        <div className="row form-outer">
          <form className="form-outer" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-12">
              <div className="bg-white graph-card p-4">
                <div className="d-flex justify-content-between align-content-center table-header">
                  <div className="d-flex align-content-center">
                    <h4>Basic Information</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="row g-3 ">
                    <div className="col-md-3">
                      <label className="form-label">
                        Staff ID
                        <span>*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control bg-light ${
                          errors.staff_id && "is-invalid"
                        }`}
                        placeholder="Staff ID"
                        id="staff_id"
                        name="staff_id"
                        {...register("staff_id", {
                          required: "Staff ID field is requried.",
                        })}
                      />
                      {errors.staff_id && (
                        <FormError error={errors.staff_id.message} />
                      )}
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">
                        Role
                        <span>*</span>
                      </label>
                      <select
                        className={`form-select  shadow-none ${
                          errors.role && "is-invalid"
                        }`}
                        defaultValue={""}
                        id="role"
                        name="role"
                        {...register("role", {
                          required: "Role field is requried.",
                        })}
                      >
                        <option value={""}>Select Role</option>
                        {roles.length > 0 &&
                          roles.map((role, index) => (
                            <option key={index} value={role.role_name}>
                              {role.role_name}
                            </option>
                          ))}
                      </select>
                      {errors.role && <FormError error={errors.role.message} />}
                    </div>

                    <div className="col-md-3">
                      <label className="form-label">Designation</label>
                      <select
                        className="form-select "
                        id="designation"
                        name="designation"
                        {...register("designation", {
                          required: false,
                        })}
                      >
                        <option>Select Designation</option>
                        {designations.length > 0 &&
                          designations.map((data, index) => (
                            <option key={index} value={data.designation_name}>
                              {data.designation_name}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="col-md-3">
                      <label className="form-label">Department</label>
                      <select
                        className="form-select "
                        id="department"
                        name="department"
                        {...register("department", {
                          required: false,
                        })}
                      >
                        <option>Select Department</option>
                        {departments.length > 0 &&
                          departments.map((data, index) => (
                            <option key={index} value={data.department_name}>
                              {data.department_name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Specialist</label>
                     <Controller
                      name="specialist"
                      control={control}
                      rules={{
                        required: false,
                      }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          isMulti
                          options={specialists}
                          placeholder="Select Specialist"
                          classNamePrefix="select"
                          className={`basic-multi-select bg-light ${
                            errors.specialists ? "border border-danger rounded" : ""
                          }`}
                          onChange={(selected) => field.onChange(selected)}
                        />
                      )}
                    />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">
                        First Name
                        <span>*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control bg-light ${
                          errors.first_name && "is-invalid"
                        }`}
                        placeholder="Enter first name"
                        name="first_name"
                        id="first_name"
                        {...register("first_name", {
                          required: "First Name is required.",
                        })}
                      />
                      {errors.first_name && (
                        <FormError error={errors.first_name.message} />
                      )}
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder="Enter last name"
                        name="last_name"
                        id="last_name"
                        {...register("last_name", {
                          required: "Last Name is required.",
                        })}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">
                        Father Name
                        <span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder="Enter father name"
                        name="father_name"
                        id="father_name"
                        defaultValue={""}
                        {...register("father_name", {
                          required: false,
                        })}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Mother Name</label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder="Enter mother name"
                        name="mother_name"
                        id="mother_name"
                        {...register("mother_name", {
                          required: "Mother name is required.",
                        })}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">
                        Gender
                        <span>*</span>
                      </label>
                      <select
                        className={`form-select  ${
                          errors.gender && "is-invalid"
                        }`}
                        name="gender"
                        id="gender"
                        defaultValue={""}
                        {...register("gender", {
                          required: "Gender selection is required.",
                        })}
                      >
                        <option value={""}>Select Gender</option>
                        <option value={"Male"}>Male</option>
                        <option value={"Female"}>Female</option>
                      </select>
                      {errors.gender && (
                        <FormError error={errors.gender.message} />
                      )}
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Marital Status</label>
                      <select 
                        className="form-select "
                        defaultValue={''}
                        name="marital_status"
                        id="marital_status"
                        {...register("marital_status", {
                          required: "Gender selection is required.",
                        })}
                        >
                        <option value={''}>Select</option>
                        <option>Single</option>
                        <option>Married</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Blood Group</label>
                      <select 
                        className="form-select "
                        defaultValue={""}
                        name="blood_group"
                        id="blood_group"
                        {...register("blood_group", {
                          required: "Gender selection is required.",
                        })}
                      >
                        <option value={""}>Select</option>
                        <option value={"A+"}>A+</option>
                        <option value={"B+"}>B+</option>
                        <option value={"O+"}>O+</option>
                        <option value={"AB+"}>AB+</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">
                        Date of Birth
                        <span>*</span>
                      </label>
                      <input
                        type="date"
                        className={`form-control bg-light ${
                          errors.date_of_birth && "is-invalid"
                        }`}
                        name="date_of_birth"
                        id="date_of_birth"
                        {...register("date_of_birth", {
                          required: "Date Of Birth is required.",
                        })}
                      />
                      {errors.date_of_birth && (
                        <FormError error={errors.date_of_birth.message} />
                      )}
                    </div>

                    <div className="col-md-3">
                      <label className="form-label">Date of Joining</label>
                      <input
                        type="date"
                        className="form-control bg-light"
                        name="date_of_joining"
                        id="date_of_joining"
                        {...register("date_of_joining", {
                          required: false,
                        })}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Phone</label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder="Enter phone number"
                        name="phone"
                        id="phone"
                        {...register("phone", {
                          required: false,
                        })}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Emergency Contact</label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder="Enter emergency contact"
                        name="emergency_contact"
                        id="emergency_contact"
                        {...register("emergency_contact", {
                          required: false,
                        })}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className={`form-control bg-light ${
                          errors.email && "is-invalid"
                        }`}
                        placeholder="Enter email"
                        id="email"
                        name="email"
                        {...register("email", {
                          required: "Email is required.",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Please enter a valid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <FormError error={errors.email.message} />
                      )}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Current Address</label>
                      <textarea
                        className="form-control bg-light"
                        rows="2"
                        placeholder="Enter current address"
                        name="current_address"
                        id="current_address"
                        {...register("current_address", {
                          required: false,
                        })}
                      ></textarea>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Permanent Address</label>
                      <textarea
                        className="form-control bg-light"
                        rows="2"
                        placeholder="Enter permanent address"
                        name="permanent_address"
                        id="permanent_address"
                        {...register("permanent_address", {
                          required: false,
                        })}
                      ></textarea>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Qualification</label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder="Enter qualification"
                        name="qualification"
                        id="qualification"
                        {...register("qualification", {
                          required: false,
                        })}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Work Experience</label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder="Enter experience"
                        name="work_experience"
                        id="work_experience"
                        {...register("work_experience", {
                          required: false,
                        })}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Specialization</label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder="Enter specialization"
                        name="specialization"
                        id="specialization"
                        {...register("specialization", {
                          required: false,
                        })}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Note</label>
                      <textarea
                        className="form-control bg-light"
                        rows="1"
                        placeholder="Write a note"
                        name="note"
                        id="note"
                        {...register("note", {
                          required: false,
                        })}
                      ></textarea>
                    </div>
                    
                    <div className="col-md-3">
                      <label className="form-label">Photo</label>
                      <input
                        type="file"
                        className="form-control bg-light"
                        name="Photo"
                        id="Photo"
                        {...register("Photo", {
                          required: false,
                        })}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Pan Number</label>
                      <input
                        className="form-control bg-light"
                        placeholder="Write a Pan Number"
                        type="text"
                        name="pan_number"
                        id="pan_number"
                        {...register("pan_number", {
                          required: false,
                        })}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">
                        National Identification Number
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder="Write a Identification Number"
                        name="identification_number"
                        id="identification_number"
                        {...register("identification_number", {
                          required: false,
                        })}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">
                        Local Identification Number
                      </label>
                      <input
                      type="text"
                        className="form-control bg-light"
                        placeholder="Write a Local Identification Number"
                        name="local_identification_number"
                        id="local_identification_number"
                        {...register("local_identification_number", {
                          required: false,
                        })}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-content-center table-header my-4">
                  <div className="d-flex align-content-center">
                    <h4>Add More Details (Payroll)</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label className="form-label">EPF No</label>
                    <input
                      type="text"
                      className="form-control bg-light"
                      name="epf_no"
                      id="epf_no"
                      {...register("epf_no", {
                        required: false,
                      })}
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Basic Salary</label>
                    <input type="text" className="form-control bg-light" />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Contract Type</label>
                    <select
                      defaultValue={''}
                      className="form-select  1875rem"
                      name="contract_type"
                      id="contract_type"
                      {...register("contract_type", {
                        required: false,
                      })}
                    >
                      <option value={''}>Select</option>
                      <option>Permanent</option>
                      <option>Contract</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Work Location</label>
                    <input
                      type="text"
                      className="form-control bg-light"
                      name="work_location"
                      id="work_location"
                      {...register("work_location", {
                        required: false,
                      })}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between align-content-center table-header my-4 ">
                  <div className="d-flex align-content-center">
                    <h4>Social Media Links</h4>
                  </div>
                </div>
                <div className="row g-3 ">
                  <div className="col-md-3">
                    <label className="form-label">Facebook URL</label>
                    <input
                      type="text"
                      className="form-control bg-light"
                      name="facebook_url"
                      id="facebook_url"
                      {...register("facebook_url", {
                        required: false,
                      })}
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Twitter URL</label>
                    <input
                      type="text"
                      className="form-control bg-light"
                      name="twitter_url"
                      id="twitter_url"
                      {...register("twitter_url", {
                        required: false,
                      })}
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">LinkedIn URL</label>
                    <input
                      type="text"
                      className="form-control bg-light"
                      name="work_location"
                      id="linkedin_url"
                      {...register("linkedin_url", {
                        required: false,
                      })}
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Instagram URL</label>
                    <input
                      type="text"
                      className="form-control bg-light"
                      name="instagram_url"
                      id="instagram_url"
                      {...register("instagram_url", {
                        required: false,
                      })}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between align-content-center table-header my-4 ">
                  <div className="d-flex align-content-center">
                    <h4>Upload Documents</h4>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Resume</label>
                    <input
                      type="file"
                      className="form-control bg-light"
                      name="resume"
                      id="resume"                     
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Joining Letter</label>
                    <input
                      type="file"
                      className="form-control bg-light"
                      name="joining_letter"
                      id="joining_letter"                    
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Resignation Letter</label>
                    <input type="file" className="form-control bg-light" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Other Documents</label>
                    <input
                      type="file"
                      className="form-control bg-light"
                      name="other_document"
                      id="other_document"
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12">
                    <div className="text-end">
                      <button className="btn btn-primary px-4">
                        {" "}
                        <FaCheckDouble size={20} className="pe-2" />
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
};
export default CreateStaff;
