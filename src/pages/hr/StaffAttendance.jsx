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
import StaffAttendanceTable from "../../components/StaffAttendanceTable";


const StaffAttendance = () => {
  
 const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
  

  return (
    <Layout>
      <main className="px-3 pb-5 appointment-page">
        <div className="row ">
            <div className="col-12">
                <div className="bg-white graph-card p-4">
                    <div className="d-flex justify-content-between align-content-center table-header ">
                        <div className="d-flex align-content-center">
                            <h4>Staff Attendance</h4>
                        </div>
                    </div>
                    <div className="row g-3 my-4 align-items-end">
                        <div className="col-md-6">
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
                        <div className="col-md-6">
                            <div className="mb-3">
                            <DatePickerComponent
                                label="Attendance Date"
                                value={selectedDate}
                                onChange={handleDateSelect}
                                placeholder="Select event date"
                            />
                            </div>
                        </div>
                         <div className="col-md-12 d-flex justify-content-end">
                            <button className="btn btn-primary">Search</button>
                         </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <StaffAttendanceTable />
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
