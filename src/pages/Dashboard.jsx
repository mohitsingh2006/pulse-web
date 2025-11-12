import { useState } from "react";
import { IoWarningOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";
import { LuCircleCheckBig } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { FiUserPlus } from "react-icons/fi";
import { HiOutlineCalendar } from "react-icons/hi2";
import { FaRegFileLines } from "react-icons/fa6";
import { RiCapsuleLine } from "react-icons/ri";
import { IoMdBed } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { LuUser } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { LuActivity } from "react-icons/lu";
import { FiDollarSign } from "react-icons/fi";


import { Link } from "react-router-dom";
import TableHeader from "../components/TableHeader";
import Layout from "../_layout";

const Dashboard = () => {
  const [isToggleDangerMsg, setIsToggleDangerMsg] = useState(true);
  
  
  return (
    <Layout>      
        <main className="px-3 pb-5 dashboard">
          <div className="welcome-card px-4 py-4">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <div className="heading px-2">
                  <h3>Welcome back, Dr. Johson</h3>
                  <p>Here what happeninng your hospital today</p>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="text-end text-white px-2">
                  <span>Today Date</span>
                  <p>Friday, September 12 , 2025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-12">
              <div
                className={`alert alert-danger gap-3 d-flex align-items-start fade ${
                  isToggleDangerMsg ? "show" : "d-none"
                }`}
              >
                <IoWarningOutline size={25} />
                <div className="d-flex justify-content-between w-100">
                  <div className="message">
                    <h4 className="alert-heading mb-0">Well done!</h4>
                    <span>A simple danger alert—check it out!</span>
                  </div>

                  <div className="d-flex align-align-items-center time-info">
                    <span>5 mintute ago</span>
                    <button
                      onClick={() => setIsToggleDangerMsg(!isToggleDangerMsg)}
                      type="button"
                      className="btn-close ms-2"
                    ></button>
                  </div>
                </div>
              </div>

              <div
                className={`alert alert-light gap-3 d-flex align-items-start fade ${
                  isToggleDangerMsg ? "show" : "d-none"
                }`}
              >
                <RiErrorWarningLine size={25} />
                <div className="d-flex justify-content-between w-100">
                  <div className="message">
                    <h4 className="alert-heading mb-0">system Maintenance</h4>
                    <span>A simple danger alert—check it out!</span>
                  </div>

                  <div className="d-flex align-align-items-center time-info">
                    <span>5 mintute ago</span>
                    <button
                      onClick={() => setIsToggleDangerMsg(!isToggleDangerMsg)}
                      type="button"
                      className="btn-close ms-2"
                    ></button>
                  </div>
                </div>
              </div>

              <div
                className={`alert alert-secondry gap-3 d-flex align-items-start fade ${
                  isToggleDangerMsg ? "show" : "d-none"
                }`}
              >
                <LuCircleCheckBig size={25} />
                <div className="d-flex justify-content-between w-100">
                  <div className="message">
                    <h4 className="alert-heading mb-0">Well done!</h4>
                    <span>A simple danger alert—check it out!</span>
                  </div>

                  <div className="d-flex align-align-items-center time-info">
                    <span>5 mintute ago</span>
                    <button
                      onClick={() => setIsToggleDangerMsg(!isToggleDangerMsg)}
                      type="button"
                      className="btn-close ms-2"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-xl-3">
              <div className="stats-card mb-4 bg-white p-4 d-flex justify-content-between align-items-center">
                <div className="content">
                  <p>Total patients</p>
                  <h4>2,847</h4>
                  <div className="offer mt-2">
                    <span>+12%</span> <small>form last month</small>
                  </div>
                </div>
                <div className="icon-outer text-white d-flex justify-content-center align-items-center">
                  <GoPeople size={25} />
                </div>
              </div>
            </div>

            <div className="col-12 col-xl-3">
              <div className="stats-card mb-4 bg-white p-4 d-flex justify-content-between align-items-center">
                <div className="content">
                  <p>Total patients</p>
                  <h4>2,847</h4>
                  <div className="offer mt-2">
                    <span>+12%</span> <small>form last month</small>
                  </div>
                </div>
                <div className="icon-outer bg-secondary text-white d-flex justify-content-center align-items-center">
                  <GoPeople size={25} />
                </div>
              </div>
            </div>

            <div className="col-12 col-xl-3">
              <div className="stats-card mb-4 bg-white p-4 d-flex justify-content-between align-items-center">
                <div className="content">
                  <p>Total patients</p>
                  <h4>2,847</h4>
                  <div className="offer mt-2">
                    <span>+12%</span> <small>form last month</small>
                  </div>
                </div>
                <div className="icon-outer text-white d-flex justify-content-center align-items-center">
                  <GoPeople size={25} />
                </div>
              </div>
            </div>

            <div className="col-12 col-xl-3">
              <div className="stats-card mb-4 bg-white p-4 d-flex justify-content-between align-items-center">
                <div className="content">
                  <p>Total patients</p>
                  <h4>2,847</h4>
                  <div className="offer mt-2">
                    <span>+12%</span> <small>form last month</small>
                  </div>
                </div>
                <div className="icon-outer bg-dark text-white d-flex justify-content-center align-items-center">
                  <GoPeople size={25} />
                </div>
              </div>
            </div>

            <div className="col-12 col-xl-3">
              <div className="stats-card mb-4 bg-white p-4 d-flex justify-content-between align-items-center">
                <div className="content">
                  <p>Total patients</p>
                  <h4>2,847</h4>
                  <div className="offer mt-2">
                    <span>+12%</span> <small>form last month</small>
                  </div>
                </div>
                <div className="icon-outer bg-dark text-white d-flex justify-content-center align-items-center">
                  <GoPeople size={25} />
                </div>
              </div>
            </div>

            <div className="col-12 col-xl-3">
              <div className="stats-card mb-4 bg-white p-4 d-flex justify-content-between align-items-center">
                <div className="content">
                  <p>Total patients</p>
                  <h4>2,847</h4>
                  <div className="offer mt-2">
                    <span>+12%</span> <small>form last month</small>
                  </div>
                </div>
                <div className="icon-outer text-white d-flex justify-content-center align-items-center">
                  <GoPeople size={25} />
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-3">
              <div className="stats-card mb-4 bg-white p-4 d-flex justify-content-between align-items-center">
                <div className="content">
                  <p>Total patients</p>
                  <h4>2,847</h4>
                  <div className="offer mt-2">
                    <span>+12%</span> <small>form last month</small>
                  </div>
                </div>
                <div className="icon-outer bg-dark text-white d-flex justify-content-center align-items-center">
                  <GoPeople size={25} />
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-3">
              <div className="stats-card mb-4 bg-white p-4 d-flex justify-content-between align-items-center">
                <div className="content">
                  <p>Total patients</p>
                  <h4>2,847</h4>
                  <div className="offer mt-2">
                    <span>+12%</span> <small>form last month</small>
                  </div>
                </div>
                <div className="icon-outer text-white d-flex justify-content-center align-items-center">
                  <GoPeople size={25} />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-xl-8">
              <div className="bg-white graph-card p-4">
                <div className="graph-header d-flex align-items-center justify-content-between">
                  <div>
                    <h4>Revenue Overview</h4>
                    <p>Monthly revenue trends</p>
                  </div>
                  <div>
                    <select className="form-select" defaultValue="">
                      <option value="">Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>

                <div className="graph">
                  <img src="images/graph.jpg" width="100%" alt="graph" />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12 col-lg-6">
                    <div className="bg-white graph-card p-4 
                    ">
                        <div className="graph-header d-flex align-items-center justify-content-between mb-3">
                            <div>
                                <h5>Patient Flow</h5>
                            </div>
                            <div>
                               <LuActivity color="#4b5563" size={25} />
                            </div>
                        </div>

                        <div className="row g-0 flow-row align-items-center mb-3">
                            <div className="col-12 col-lg-4">
                                <div className="d-flex align-items-center">
                                    <div className="circle secondary-bg"></div>
                                    <div className="title">Emaergency</div>
                                </div>
                                
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="d-flex justify-content-end">
                                    <div className="progress-bar secondary-bg" style={{ width:"40%" }}></div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-2">
                                <div className="progress-number text-end">40</div>
                            </div>
                        </div>

                        <div className="row g-0 flow-row align-items-center mb-3">
                            <div className="col-12 col-lg-4">
                                <div className="d-flex align-items-center">
                                    <div className="circle" style={{ backgroundColor:"#3b82f6" }}></div>
                                    <div className="title">Cardiology</div>
                                </div>
                                
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="d-flex justify-content-end">
                                    <div className="circle" ></div>
                                    <div className="progress-bar" style={{ width:"20%",backgroundColor:"#3b82f6" }}></div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-2">
                                <div className="progress-number text-end">20</div>
                            </div>
                        </div>

                        <div className="row g-0 flow-row align-items-center mb-3">
                            <div className="col-12 col-lg-4">
                                <div className="d-flex align-items-center">
                                    <div className="circle" style={{ backgroundColor:"#22c55e" }}></div>
                                    <div className="title">Paralogy</div>
                                </div>
                                
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="d-flex justify-content-end">
                                    <div className="circle" ></div>
                                    <div className="progress-bar" style={{ width:"60%",backgroundColor:"#22c55e" }}></div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-2">
                                <div className="progress-number text-end">60</div>
                            </div>
                        </div>

                        <div className="row g-0 flow-row align-items-center mb-3">
                            <div className="col-12 col-lg-4">
                                <div className="d-flex align-items-center">
                                    <div className="circle" style={{ backgroundColor:"#eab308" }}></div>
                                    <div className="title">Orthology</div>
                                </div>
                                
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="d-flex justify-content-end">
                                    <div className="circle" ></div>
                                    <div className="progress-bar" style={{ width:"10%",backgroundColor:"#eab308" }}></div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-2">
                                <div className="progress-number text-end">10</div>
                            </div>
                        </div>

                        <div className="row g-0 flow-row align-items-center mb-3">
                            <div className="col-12 col-lg-4">
                                <div className="d-flex align-items-center">
                                    <div className="circle" style={{ backgroundColor:"#a855f7" }}></div>
                                    <div className="title">Numerology</div>
                                </div>
                                
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="d-flex justify-content-end">
                                    <div className="circle" ></div>
                                    <div className="progress-bar" style={{ width:"90%",backgroundColor:"#a855f7" }}></div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-2">
                                <div className="progress-number text-end">90</div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="bg-white graph-card p-4">
                        <div className="graph-header d-flex align-items-center justify-content-between mb-4">
                            <div>
                                <h5>Department Revenue</h5>
                            </div>
                            <div>
                               <FiDollarSign color="#4b5563" size={25} />
                            </div>
                        </div>

                        <div className="department-card mb-4">
                            <div className="d-flex justify-content-between mb-1">
                                <div className="title">Surgery</div>
                                <div className="price">$89,450</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="100" aria-valuemin="0" ariavaluemax="100"></div>
                            </div>
                        </div>
                        <div className="department-card mb-4">
                            <div className="d-flex justify-content-between mb-1">
                                <div className="title">Surgery</div>
                                <div className="price">$89,450</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="100" aria-valuemin="0" ariavaluemax="100"></div>
                            </div>
                        </div>
                        <div className="department-card mb-4">
                            <div className="d-flex justify-content-between mb-1">
                                <div className="title">Surgery</div>
                                <div className="price">$89,450</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="100" aria-valuemin="0" ariavaluemax="100"></div>
                            </div>
                        </div>
                        <div className="department-card mb-4">
                            <div className="d-flex justify-content-between mb-1">
                                <div className="title">Surgery</div>
                                <div className="price">$89,450</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="100" aria-valuemin="0" ariavaluemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-xl-4">
              <div className="bg-white graph-card p-4">
                <div className="graph-header mb-4">
                  <h4>Quick Action</h4>
                  <p>Frequently used operations</p>
                </div>
                <div className="small-card text-white secondary-bg p-3 mb-3 d-flex align-items-center gap-3">
                  <div className="icon-outer">
                    <FiUserPlus size={24} />
                  </div>
                  <div className="content">
                    <h5>New Patient</h5>
                    <p>Register a new patient</p>
                  </div>
                </div>

                <div className="small-card text-white bg-secondary p-3 mb-3 d-flex align-items-center gap-3">
                  <div className="icon-outer">
                    <HiOutlineCalendar size={24} />
                  </div>
                  <div className="content">
                    <h5>New Patient</h5>
                    <p>Register a new patient</p>
                  </div>
                </div>

                <div className="small-card text-white primary-bg p-3 mb-3 d-flex align-items-center gap-3">
                  <div className="icon-outer">
                    <FaRegFileLines size={24} />
                  </div>
                  <div className="content">
                    <h5>New Patient</h5>
                    <p>Register a new patient</p>
                  </div>
                </div>
                <div className="small-card text-white secondary-black p-3 mb-3 d-flex align-items-center gap-3">
                  <div className="icon-outer">
                    <RiCapsuleLine size={24} />
                  </div>
                  <div className="content">
                    <h5>New Patient</h5>
                    <p>Register a new patient</p>
                  </div>
                </div>
                <div className="small-card text-white quaternary-bg p-3 mb-3 d-flex align-items-center gap-3">
                  <div className="icon-outer">
                    <IoMdBed size={24} />
                  </div>
                  <div className="content">
                    <h5>New Patient</h5>
                    <p>Register a new patient</p>
                  </div>
                </div>

                <div className="small-card text-white secondary-bg p-3 mb-3 d-flex align-items-center gap-3">
                  <div className="icon-outer">
                    <GoPlus size={24} />
                  </div>
                  <div className="content">
                    <h5>New Patient</h5>
                    <p>Register a new patient</p>
                  </div>
                </div>
                <div className="small-card  bg-small-card p-3 mb-3 d-flex align-items-center justify-content-between gap-3">
                  <div className="content">
                    <h5>Need Help?</h5>
                    <p>Access user guide and support</p>
                  </div>
                  <div>
                    <button className="btn btn-outline-danger">
                      Get Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <div className="bg-white graph p-4">
               
                <TableHeader 
                    heading={"Today's Appointments"}
                    shortDes={"Manage and track patient appointments"}
                    primaryBtnText={"New Appointment"}
                    primaryBtnClick={()=>console.log("primary btn click")}
                    secontryBtnText={"View All"}
                    secontryBtnClick={()=>console.log("secondry btn click")}
                />

                <div className="mt-4">
                  <table className="table ">
                    <thead>
                      <tr>
                        <th scope="col">PATIENT</th>
                        <th scope="col">Doctor</th>
                        <th scope="col">Time</th>
                        <th scope="col">Department</th>
                        <th scope="col">Location</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <div className="user-image d-flex align-items-center justify-content-center">
                              <LuUser />
                            </div>
                            <div className="user-info">
                              <h5>Jone Smith</h5>
                              <span>+1 (555) 123-4567</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="doctor-name">Dr. Mohit Singh</div>
                        </td>
                        <td>
                          <div className="time d-flex align-items-center gap-1">
                            <IoMdTime color="#979393" /> 9:00 AM
                          </div>
                        </td>
                        <td>Category</td>
                        <td>
                          <div className="location d-flex align-items-center gap-1">
                            <CiLocationOn color="#979393" size={20} /> Room 201
                          </div>
                        </td>
                        <td>
                          {/* <span className="badge badge-pill info-badge-bg">scheduled</span> */}
                          {/* <span className="badge badge-pill warning-badge-bg">scheduled</span> */}
                          <span className="badge badge-pill success-badge-bg">
                            scheduled
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link className="view-btn" to={"#"}>
                              View
                            </Link>
                            <Link className="edit-btn" to={"#"}>
                              Edit
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <div className="user-image d-flex align-items-center justify-content-center">
                              <LuUser />
                            </div>
                            <div className="user-info">
                              <h5>Jone Smith</h5>
                              <span>+1 (555) 123-4567</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="doctor-name">Dr. Mohit Singh</div>
                        </td>
                        <td>
                          <div className="time d-flex align-items-center gap-1">
                            <IoMdTime color="#979393" /> 9:00 AM
                          </div>
                        </td>
                        <td>Category</td>
                        <td>
                          <div className="location d-flex align-items-center gap-1">
                            <CiLocationOn color="#979393" size={20} /> Room 201
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-pill warning-badge-bg">
                            in-progres
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link className="view-btn" to={"#"}>
                              View
                            </Link>
                            <Link className="edit-btn" to={"#"}>
                              Edit
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <div className="user-image d-flex align-items-center justify-content-center">
                              <LuUser />
                            </div>
                            <div className="user-info">
                              <h5>Jone Smith</h5>
                              <span>+1 (555) 123-4567</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="doctor-name">Dr. Mohit Singh</div>
                        </td>
                        <td>
                          <div className="time d-flex align-items-center gap-1">
                            <IoMdTime color="#979393" /> 9:00 AM
                          </div>
                        </td>
                        <td>Category</td>
                        <td>
                          <div className="location d-flex align-items-center gap-1">
                            <CiLocationOn color="#979393" size={20} /> Room 201
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-pill info-badge-bg">
                            scheduled
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link className="view-btn" to={"#"}>
                              View
                            </Link>
                            <Link className="edit-btn" to={"#"}>
                              Edit
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <div className="user-image d-flex align-items-center justify-content-center">
                              <LuUser />
                            </div>
                            <div className="user-info">
                              <h5>Jone Smith</h5>
                              <span>+1 (555) 123-4567</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="doctor-name">Dr. Mohit Singh</div>
                        </td>
                        <td>
                          <div className="time d-flex align-items-center gap-1">
                            <IoMdTime color="#979393" /> 9:00 AM
                          </div>
                        </td>
                        <td>Category</td>
                        <td>
                          <div className="location d-flex align-items-center gap-1">
                            <CiLocationOn color="#979393" size={20} /> Room 201
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-pill warning-badge-bg">
                            in-progess
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link className="view-btn" to={"#"}>
                              View
                            </Link>
                            <Link className="edit-btn" to={"#"}>
                              Edit
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <div className="user-image d-flex align-items-center justify-content-center">
                              <LuUser />
                            </div>
                            <div className="user-info">
                              <h5>Jone Smith</h5>
                              <span>+1 (555) 123-4567</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="doctor-name">Dr. Mohit Singh</div>
                        </td>
                        <td>
                          <div className="time d-flex align-items-center gap-1">
                            <IoMdTime color="#979393" /> 9:00 AM
                          </div>
                        </td>
                        <td>Category</td>
                        <td>
                          <div className="location d-flex align-items-center gap-1">
                            <CiLocationOn color="#979393" size={20} /> Room 201
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-pill info-badge-bg">
                            in-progess
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link className="view-btn" to={"#"}>
                              View
                            </Link>
                            <Link className="edit-btn" to={"#"}>
                              Edit
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
    </Layout>
  );
};

export default Dashboard;
