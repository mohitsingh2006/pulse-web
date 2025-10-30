import { LuUser } from "react-icons/lu";
import Layout from "../../_layout";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { IoListOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import TableHeader from "../../components/TableHeader";
import StaffCard from "../../components/StaffCard";
import React, { useEffect, useRef, useState } from "react";
import DatePickerComponent from "../../components/DatePickerComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import PayrollTable from "../../components/PayrollTable";


const StaffAttendance = () => {
  
 const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const payrollData = [
    { staffId: "9001", name: "Super Admin", role: "Super Admin", department: "", designation: "", phone: "9686576776", status: "Not Generated" },
    { staffId: "9002", name: "Sonia Bush", role: "Doctor", department: "OT", designation: "Doctor", phone: "96464644341", status: "Paid" },
    { staffId: "9008", name: "Sansa Gomez", role: "Doctor", department: "Gynecology", designation: "Doctor", phone: "965456454", status: "Paid" },
    { staffId: "9005", name: "Belina Turner", role: "Pathologist", department: "Pathology", designation: "Pathologist", phone: "6465465465", status: "Paid" },
    { staffId: "9006", name: "John Hook", role: "Radiologist", department: "Radiology", designation: "Radiologist", phone: "9464644564", status: "Paid" },
    { staffId: "9003", name: "Brad Frost", role: "Accountant", department: "Finance", designation: "Accountant", phone: "5454464644", status: "Generated" },
    { staffId: "9010", name: "Natasha Romanoff", role: "Nurse", department: "Nursing", designation: "Nurse", phone: "676745667", status: "Paid" },
    { staffId: "9011", name: "Reyan Jain", role: "Doctor", department: "Doctor Dept", designation: "Doctor", phone: "852963741", status: "Generated" },
    { staffId: "9017", name: "Jason Abbot", role: "Admin", department: "Admin", designation: "Admin", phone: "4785963210", status: "Not Generated" },
  ];
  

  return (
    <Layout>
      <main className=" px-4 pb-5 appointment-page">
        <div className="row mt-5 ">
            <div className="col-12">
                <div className="bg-white graph-card p-4">
                    <div className="d-flex justify-content-between align-content-center table-header ">
                        <div className="d-flex align-content-center">
                            <h4>Payroll</h4>
                        </div>
                    </div>
                    <div className="row g-3 my-4 align-items-end">
                        <div className="col-md-4">
                            <div className="mb-3">
                            <label htmlFor="staffRole" className="form-label fw-semibold text-dark">
                                Select Role
                            </label>
                            <select className="form-select shadow-sm" id="staffRole">
                                <option selected disabled>Choose role</option>
                                <option value="1">Admin</option>
                                <option value="2">Manager</option>
                                <option value="3">HR</option>
                                <option value="4">Staff</option>
                            </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                            <DatePickerComponent
                                label="Month"
                                value={selectedDate}
                                onChange={handleDateSelect}
                                placeholder="Select event date"
                            />
                            </div>
                        </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                                <label htmlFor="staffRole" className="form-label fw-semibold text-dark">
                               Year
                            </label>
                             <select className="form-select shadow-sm" id="staffRole">
                                <option selected disabled>Choose role</option>
                                <option value="1">2024</option>
                                <option value="2">2025</option>
                               
                            </select>
                            </div>
                        </div>
                         <div className="col-md-12 d-flex justify-content-end">
                            <button className="btn btn-primary">Search</button>
                         </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                              <PayrollTable data={payrollData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </Layout>
  );
};
export default StaffAttendance;
