import { LuUser } from "react-icons/lu";
import { FaCheckDouble } from "react-icons/fa6";
import Layout from "../../_layout";
import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const CreateStaff = () => {
 

  
  

  // 1. Initialize the Bootstrap Modal instance when the component mounts
 

  return (
    <Layout>
      <main className=" px-4 pb-5 appointment-page">
        <div className="row mt-5 ">
            <div className="col-12">
                <div className="bg-white graph-card p-4">
                    <div className="d-flex justify-content-between align-content-center table-header ">
                        <div className="d-flex align-content-center">
                            <h4>Basic Information</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row g-3">
                            <div className="col-md-3">
                                <label className="form-label">Staff ID</label>
                                <input type="text" className="form-control" placeholder="Auto-generated" disabled />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Role</label>
                                <select className="form-select">
                                    <option>Select Role</option>
                                    <option>Admin</option>
                                    <option>Doctor</option>
                                    <option>Nurse</option>
                                    <option>HR</option>
                                    <option>Receptionist</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Designation</label>
                                <input type="text" className="form-control" placeholder="Enter designation" />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Department</label>
                                <select className="form-select">
                                    <option>Select Department</option>
                                    <option>Cardiology</option>
                                    <option>Orthopedics</option>
                                    <option>HR</option>
                                    <option>Accounts</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">First Name *</label>
                                <input type="text" className="form-control" placeholder="Enter first name" />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Last Name *</label>
                                <input type="text" className="form-control" placeholder="Enter last name" />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Father Name</label>
                                <input type="text" className="form-control" placeholder="Enter father name" />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Mother Name</label>
                                <input type="text" className="form-control" placeholder="Enter mother name" />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Gender</label>
                                <select className="form-select">
                                    <option>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Marital Status</label>
                                <select className="form-select">
                                    <option>Select</option>
                                    <option>Single</option>
                                    <option>Married</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Blood Group</label>
                                <select className="form-select">
                                    <option>Select</option>
                                    <option>A+</option>
                                    <option>B+</option>
                                    <option>O+</option>
                                    <option>AB+</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Date of Joining</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Phone</label>
                                <input type="text" className="form-control" placeholder="Enter phone number" />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Emergency Contact</label>
                                <input type="text" className="form-control" placeholder="Enter emergency contact" />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Current Address</label>
                                <textarea className="form-control" rows="2" placeholder="Enter current address"></textarea>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Permanent Address</label>
                                <textarea className="form-control" rows="2" placeholder="Enter permanent address"></textarea>
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Qualification</label>
                                <input type="text" className="form-control" placeholder="Enter qualification" />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Work Experience</label>
                                <input type="text" className="form-control" placeholder="Enter experience" />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Specialisation</label>
                                <input type="text" className="form-control" placeholder="Enter specialisation" />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Photo</label>
                                <input type="file" className="form-control" />
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
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Basic Salary</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Contract Type</label>
                            <select className="form-select">
                                <option>Select</option>
                                <option>Permanent</option>
                                <option>Contract</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Work Location</label>
                            <input type="text" className="form-control" />
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
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Twitter URL</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">LinkedIn URL</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Instagram URL</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-content-center table-header my-4 ">
                        <div className="d-flex align-content-center">
                            <h4>Social Media Links</h4>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-md-6">
                        <label className="form-label">Resume</label>
                        <input type="file" className="form-control" />
                        </div>
                        <div className="col-md-6">
                        <label className="form-label">Joining Letter</label>
                        <input type="file" className="form-control" />
                        </div>
                        <div className="col-md-6">
                        <label className="form-label">Resignation Letter</label>
                        <input type="file" className="form-control" />
                        </div>
                        <div className="col-md-6">
                        <label className="form-label">Other Documents</label>
                        <input type="file" className="form-control" />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <div className="text-end">
                                <button className="btn btn-primary px-4"> <FaCheckDouble size={20} className="pe-2" />Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </Layout>
  );
};
export default CreateStaff;
