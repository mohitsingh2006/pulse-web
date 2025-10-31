import { useEffect, useRef, useState } from "react";
import { Modal, Dropdown } from "bootstrap";
import { LuUser } from "react-icons/lu";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CiSearch } from "react-icons/ci";
import CreateAppointment from "../components/CreateAppointment";
import { CiFilter } from "react-icons/ci";
import { MdOutlineCalendarToday } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import CreatePatient from "../components/CreatePatient";
import Layout from "../_layout";
import { Link } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import axiosInstance from "../axiosInstance";
import PageLoader from "../components/PageLoader";

import toast from "react-hot-toast";


const Appointment = () => {
    const API_URL = import.meta.env.VITE_API_BASE_URL;

    const [showCreatePatientModal, setShowCreatePatientModal] = useState(false);
    const modalRef = useRef(null);
    const modalInstance = useRef(null);

    const [showCreateAppointmentModal, setShowCreateAppointmentModal] = useState(false);
    const appointmentModalRef = useRef(null);
    const appointmentModalInstance = useRef(null);

    const [appointments, setAppointment] = useState([]);

    const [loadingObj, setLoadingObj] = useState({
        pageLoading: true,
    });

    const fetchAppointment = async () => {
        try {
            const response = await axiosInstance.get(`${API_URL}appointments/get_appointments`);

            if (response.status === 200) {
                setAppointment(response.data.data);
                setLoadingObj({ ...loadingObj, pageLoading: false });
            }
        } catch (err) {
            toast.error(err.message);
            setLoadingObj({ ...loadingObj, pageLoading: false });
        }
    };


    useEffect(() => {
        if (modalInstance.current) {
            if (showCreatePatientModal) {
                modalInstance.current.show();
            } else {
                modalInstance.current.hide();
            }
        }

        if (appointmentModalInstance.current) {
            if (showCreateAppointmentModal) {
                appointmentModalInstance.current.show();
            } else {
                appointmentModalInstance.current.hide();
            }
        }

    }, [showCreatePatientModal, showCreateAppointmentModal]);

    // 1. Initialize the Bootstrap Modal instance when the component mounts
    useEffect(() => {
        if (modalRef.current) {
            modalInstance.current = new Modal(modalRef.current, {});
        }


        if (appointmentModalRef.current) {
            appointmentModalInstance.current = new Modal(appointmentModalRef.current, {});
        }

        fetchAppointment();
    }, []);

    return (
        <Layout>
            <main className=" px-4 pb-5 appointment-page">
                <div className="row mt-5 ">
                    <div className="col-12">
                        <div className="bg-white nav-pills-outer mb-4 border-bottom d-flex justify-content-between">
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link shadow-none active"
                                        id="pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-home"
                                        aria-selected="true"
                                    >
                                        Today Appointment
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link shadow-none"
                                        id="pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-profile"
                                        aria-selected="false"
                                    >
                                        Upcoming Appointment
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link shadow-none"
                                        id="pills-contact-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-contact"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-contact"
                                        aria-selected="false"
                                    >
                                        Old Appointment
                                    </button>
                                </li>
                            </ul>

                            <div className="d-flex align-items-center gap-3 pe-3 ">
                                <button
                                    type="button"
                                    onClick={() => setShowCreateAppointmentModal(true)}
                                    className="btn btn-primary py-2 shadow-none"
                                >
                                    <GoPlus size={22} />
                                    Add Appointment
                                </button>

                                <Link to="/appointment/schedule" className="btn dr-btn  py-2 shadow-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24"
                                        width="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M17 8C17 10.7615 14.7615 13 12 13C9.2385 13 7 10.7615 7 8C7 5.2385 9.2385 3 12 3C14.7615 3 17 5.2385 17 8ZM16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8ZM8.957 14.4275L8.9625 14.4385L9 14.512H14.8745C14.989 14.295 15.2485 13.949 15.5 14.0065C16.065 14.135 16.634 14.314 17.1805 14.5345L17.197 14.5265L17.2025 14.5375L17.2065 14.545C19.264 15.381 21 16.798 21 18.285V21H3V18.285C3 16.3975 5.798 14.6215 8.5 14.0065C8.7205 13.9565 8.8515 14.2165 8.957 14.4275ZM16.352 15.2915C16.1375 15.2163 15.9206 15.1484 15.7015 15.088L15.4785 15.512H8.3965L8.1895 15.1185L8.0095 15.1725C8.00583 15.2052 8.00317 15.2425 8.0015 15.2845C7.995 15.457 8.008 15.6615 8.0365 15.8695C8.06556 16.0865 8.11239 16.3007 8.1765 16.51C8.52773 16.5516 8.85296 16.716 9.09476 16.9741C9.33655 17.2323 9.47935 17.5675 9.49795 17.9207C9.51654 18.2739 9.40972 18.6223 9.19636 18.9044C8.983 19.1865 8.67683 19.3841 8.3319 19.4624C7.98698 19.5407 7.6255 19.4945 7.31129 19.3321C6.99709 19.1697 6.75038 18.9015 6.61473 18.5749C6.47908 18.2482 6.46321 17.8842 6.56994 17.547C6.67666 17.2098 6.89911 16.9211 7.198 16.732L7.194 16.718C7.12723 16.4843 7.0776 16.246 7.0455 16.005C7.0243 15.8511 7.01028 15.6962 7.0035 15.541C6.3855 15.805 5.809 16.124 5.326 16.476C4.365 17.178 4 17.834 4 18.285V20H20V18.285C20 17.8335 19.635 17.1775 18.674 16.4765C18.2549 16.1753 17.8086 15.9138 17.341 15.6955C17.3205 15.9665 17.2791 16.2354 17.217 16.5H17.5C17.5928 16.5 17.6838 16.5259 17.7628 16.5748C17.8417 16.6236 17.9055 16.6935 17.947 16.7765L18.447 17.7765C18.482 17.846 18.5 17.9225 18.5 18V19C18.5 19.1326 18.4473 19.2598 18.3536 19.3536C18.2598 19.4473 18.1326 19.5 18 19.5H17V18.5H17.5V18.118L17.191 17.5H15.809L15.5 18.118V18.5H16V19.5H15C14.8674 19.5 14.7402 19.4473 14.6464 19.3536C14.5527 19.2598 14.5 19.1326 14.5 19V18C14.5 17.9225 14.518 17.846 14.553 17.7765L15.053 16.7765C15.0945 16.6935 15.1583 16.6236 15.2372 16.5748C15.3162 16.5259 15.4072 16.5 15.5 16.5H16.181L16.1995 16.438C16.2465 16.2775 16.2885 16.078 16.317 15.87C16.345 15.664 16.358 15.4625 16.352 15.2915ZM8.5 18C8.5 18.287 8.269 18.5075 8 18.5075C7.731 18.5075 7.5 18.2875 7.5 18C7.5 17.713 7.731 17.4925 8 17.4925C8.269 17.4925 8.5 17.7125 8.5 18Z"
                                            fill="white"
                                        />
                                        <path
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M17 8C17 10.7615 14.7615 13 12 13C9.2385 13 7 10.7615 7 8C7 5.2385 9.2385 3 12 3C14.7615 3 17 5.2385 17 8ZM16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8ZM8.957 14.4275L8.9625 14.4385L9 14.512H14.8745C14.989 14.295 15.2485 13.949 15.5 14.0065C16.065 14.135 16.634 14.314 17.1805 14.5345L17.197 14.5265L17.2025 14.5375L17.2065 14.545C19.264 15.381 21 16.798 21 18.285V21H3V18.285C3 16.3975 5.798 14.6215 8.5 14.0065C8.7205 13.9565 8.8515 14.2165 8.957 14.4275ZM16.352 15.2915C16.1375 15.2163 15.9206 15.1484 15.7015 15.088L15.4785 15.512H8.3965L8.1895 15.1185L8.0095 15.1725C8.00583 15.2052 8.00317 15.2425 8.0015 15.2845C7.995 15.457 8.008 15.6615 8.0365 15.8695C8.06556 16.0865 8.11239 16.3007 8.1765 16.51C8.52773 16.5516 8.85296 16.716 9.09476 16.9741C9.33655 17.2323 9.47935 17.5675 9.49795 17.9207C9.51654 18.2739 9.40972 18.6223 9.19636 18.9044C8.983 19.1865 8.67683 19.3841 8.3319 19.4624C7.98698 19.5407 7.6255 19.4945 7.31129 19.3321C6.99709 19.1697 6.75038 18.9015 6.61473 18.5749C6.47908 18.2482 6.46321 17.8842 6.56994 17.547C6.67666 17.2098 6.89911 16.9211 7.198 16.732L7.194 16.718C7.12723 16.4843 7.0776 16.246 7.0455 16.005C7.0243 15.8511 7.01028 15.6962 7.0035 15.541C6.3855 15.805 5.809 16.124 5.326 16.476C4.365 17.178 4 17.834 4 18.285V20H20V18.285C20 17.8335 19.635 17.1775 18.674 16.4765C18.2549 16.1753 17.8086 15.9138 17.341 15.6955C17.3205 15.9665 17.2791 16.2354 17.217 16.5H17.5C17.5928 16.5 17.6838 16.5259 17.7628 16.5748C17.8417 16.6236 17.9055 16.6935 17.947 16.7765L18.447 17.7765C18.482 17.846 18.5 17.9225 18.5 18V19C18.5 19.1326 18.4473 19.2598 18.3536 19.3536C18.2598 19.4473 18.1326 19.5 18 19.5H17V18.5H17.5V18.118L17.191 17.5H15.809L15.5 18.118V18.5H16V19.5H15C14.8674 19.5 14.7402 19.4473 14.6464 19.3536C14.5527 19.2598 14.5 19.1326 14.5 19V18C14.5 17.9225 14.518 17.846 14.553 17.7765L15.053 16.7765C15.0945 16.6935 15.1583 16.6236 15.2372 16.5748C15.3162 16.5259 15.4072 16.5 15.5 16.5H16.181L16.1995 16.438C16.2465 16.2775 16.2885 16.078 16.317 15.87C16.345 15.664 16.358 15.4625 16.352 15.2915ZM8.5 18C8.5 18.287 8.269 18.5075 8 18.5075C7.731 18.5075 7.5 18.2875 7.5 18C7.5 17.713 7.731 17.4925 8 17.4925C8.269 17.4925 8.5 17.7125 8.5 18Z"
                                            fill="white"
                                        />
                                    </svg>
                                    Doctor Wise
                                </Link>

                                <Link className="btn py-2 shadow-none queue position-relative" to="/appointment/patientqueue">
                                    <MdOutlineCalendarToday className="queue-icon" />
                                    Queue
                                </Link>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 col-xl-4">
                            <div className="mb-3 d-flex gap-3 search-box">
                                <div className="position-relative">
                                    <span className="input-group-text bg-white">
                                        <CiSearch size={20} />
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search...."
                                    />
                                </div>
                                <div className="filter-icon position-relative px-4">
                                    <span className="">
                                        <CiFilter size={20} />
                                    </span>
                                    <button className="btn shadow-none">Filter</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="bg-white graph-card p-4">
                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-home"
                                    role="tabpanel"
                                    aria-labelledby="pills-home-tab"
                                >
                                    <div className="mt-4">
                                        {loadingObj.pageLoading && (
                                            <PageLoader width={40} height={40} />
                                        )}

                                        {loadingObj.pageLoading === false && appointments.length === 0 &&
                                            <EmptyState
                                                message="No appointments found."
                                            />
                                        }

                                        {appointments.length > 0 && loadingObj.pageLoading === false && (
                                            <table className="table ">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Patient Name</th>
                                                        <th scope="col">Appointment No</th>
                                                        <th scope="col">Appointment Date</th>
                                                        <th scope="col">Gender</th>
                                                        <th scope="col">Doctor</th>
                                                        <th scope="col">Source</th>
                                                        <th scope="col">Priority</th>
                                                        <th scope="col">Live Consultant</th>
                                                        <th scope="col">Fees ($)</th>
                                                        <th scope="col">Discount (%)</th>
                                                        <th scope="col">Paid ($)</th>
                                                        <th scope="col">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {appointments.map((data, i) => {
                                                        return (
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center gap-3">
                                                                        <div className="user-image d-flex align-items-center justify-content-center">
                                                                            <LuUser />
                                                                        </div>
                                                                        <div className="user-info">
                                                                            <h5>{data.Patient.name}</h5>
                                                                            <span>{data.Patient.phone}</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>APPNO7441 </td>
                                                                <td>{data.appointment_date} {data.slot}</td>
                                                                <td>Female</td>
                                                                <td>Sansa Gomez (9008)</td>
                                                                <td>Online</td>
                                                                <td>{data.appointment_priority}</td>
                                                                <td>{data.live_consultant ? 'Yes' : 'No'}</td>
                                                                <td>{data.doctor_fees}</td>
                                                                <td>{data.discount_percentage} (0.00 %)	</td>
                                                                <td>{data.payment_mode}</td>
                                                                <td>{data.status}</td>
                                                            </tr>
                                                        );

                                                    })}
                                                </tbody>
                                            </table>
                                        )}
                                    </div>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="pills-profile"
                                    role="tabpanel"
                                    aria-labelledby="pills-profile-tab"
                                >
                                    <div className="mt-4">
                                        <table className="table ">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Patient Name</th>
                                                    <th scope="col">Appointment No</th>
                                                    <th scope="col">Appointment Date</th>
                                                    <th scope="col">Gender</th>
                                                    <th scope="col">Doctor</th>
                                                    <th scope="col">Source</th>
                                                    <th scope="col">Priority</th>
                                                    <th scope="col">Live Consultant</th>
                                                    <th scope="col">Fees ($)</th>
                                                    <th scope="col">Discount (%)</th>
                                                    <th scope="col">Paid ($)</th>
                                                    <th scope="col">Status</th>
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
                                                                <h5>Olivier Thomas (1)</h5>
                                                                <span>789746464</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>APPNO7441 </td>
                                                    <td>10/15/2025 12:00 PM</td>
                                                    <td>Female</td>
                                                    <td>Sansa Gomez (9008)</td>
                                                    <td>Online</td>
                                                    <td>Normal</td>
                                                    <td>No</td>
                                                    <td>123.00</td>
                                                    <td>0.00 (0.00 %)	</td>
                                                    <td>147.60</td>
                                                    <td>Approved</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="user-image d-flex align-items-center justify-content-center">
                                                                <LuUser />
                                                            </div>
                                                            <div className="user-info">
                                                                <h5>Olivier Thomas (1)</h5>
                                                                <span>789746464</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>APPNO7441 </td>
                                                    <td>10/15/2025 12:00 PM</td>
                                                    <td>Female</td>
                                                    <td>Sansa Gomez (9008)</td>
                                                    <td>Online</td>
                                                    <td>Normal</td>
                                                    <td>No</td>
                                                    <td>123.00</td>
                                                    <td>0.00 (0.00 %)	</td>
                                                    <td>147.60</td>
                                                    <td>Approved</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="user-image d-flex align-items-center justify-content-center">
                                                                <LuUser />
                                                            </div>
                                                            <div className="user-info">
                                                                <h5>Olivier Thomas (1)</h5>
                                                                <span>789746464</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>APPNO7441 </td>
                                                    <td>10/15/2025 12:00 PM</td>
                                                    <td>Female</td>
                                                    <td>Sansa Gomez (9008)</td>
                                                    <td>Online</td>
                                                    <td>Normal</td>
                                                    <td>No</td>
                                                    <td>123.00</td>
                                                    <td>0.00 (0.00 %)	</td>
                                                    <td>147.60</td>
                                                    <td>Approved</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="user-image d-flex align-items-center justify-content-center">
                                                                <LuUser />
                                                            </div>
                                                            <div className="user-info">
                                                                <h5>Olivier Thomas (1)</h5>
                                                                <span>789746464</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>APPNO7441 </td>
                                                    <td>10/15/2025 12:00 PM</td>
                                                    <td>Female</td>
                                                    <td>Sansa Gomez (9008)</td>
                                                    <td>Online</td>
                                                    <td>Normal</td>
                                                    <td>No</td>
                                                    <td>123.00</td>
                                                    <td>0.00 (0.00 %)	</td>
                                                    <td>147.60</td>
                                                    <td>Approved</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="user-image d-flex align-items-center justify-content-center">
                                                                <LuUser />
                                                            </div>
                                                            <div className="user-info">
                                                                <h5>Olivier Thomas (1)</h5>
                                                                <span>789746464</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>APPNO7441 </td>
                                                    <td>10/15/2025 12:00 PM</td>
                                                    <td>Female</td>
                                                    <td>Sansa Gomez (9008)</td>
                                                    <td>Online</td>
                                                    <td>Normal</td>
                                                    <td>No</td>
                                                    <td>123.00</td>
                                                    <td>0.00 (0.00 %)	</td>
                                                    <td>147.60</td>
                                                    <td>Approved</td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="pills-contact"
                                    role="tabpanel"
                                    aria-labelledby="pills-contact-tab"
                                >
                                    <div className="mt-4">
                                        <table className="table ">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Patient Name</th>
                                                    <th scope="col">Appointment No</th>
                                                    <th scope="col">Appointment Date</th>
                                                    <th scope="col">Gender</th>
                                                    <th scope="col">Doctor</th>
                                                    <th scope="col">Source</th>
                                                    <th scope="col">Priority</th>
                                                    <th scope="col">Live Consultant</th>
                                                    <th scope="col">Fees ($)</th>
                                                    <th scope="col">Discount (%)</th>
                                                    <th scope="col">Paid ($)</th>
                                                    <th scope="col">Status</th>
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
                                                                <h5>Olivier Thomas (1)</h5>
                                                                <span>789746464</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>APPNO7441 </td>
                                                    <td>10/15/2025 12:00 PM</td>
                                                    <td>Female</td>
                                                    <td>Sansa Gomez (9008)</td>
                                                    <td>Online</td>
                                                    <td>Normal</td>
                                                    <td>No</td>
                                                    <td>123.00</td>
                                                    <td>0.00 (0.00 %)	</td>
                                                    <td>147.60</td>
                                                    <td>Approved</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="user-image d-flex align-items-center justify-content-center">
                                                                <LuUser />
                                                            </div>
                                                            <div className="user-info">
                                                                <h5>Olivier Thomas (1)</h5>
                                                                <span>789746464</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>APPNO7441 </td>
                                                    <td>10/15/2025 12:00 PM</td>
                                                    <td>Female</td>
                                                    <td>Sansa Gomez (9008)</td>
                                                    <td>Online</td>
                                                    <td>Normal</td>
                                                    <td>No</td>
                                                    <td>123.00</td>
                                                    <td>0.00 (0.00 %)	</td>
                                                    <td>147.60</td>
                                                    <td>Approved</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="user-image d-flex align-items-center justify-content-center">
                                                                <LuUser />
                                                            </div>
                                                            <div className="user-info">
                                                                <h5>Olivier Thomas (1)</h5>
                                                                <span>789746464</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>APPNO7441 </td>
                                                    <td>10/15/2025 12:00 PM</td>
                                                    <td>Female</td>
                                                    <td>Sansa Gomez (9008)</td>
                                                    <td>Online</td>
                                                    <td>Normal</td>
                                                    <td>No</td>
                                                    <td>123.00</td>
                                                    <td>0.00 (0.00 %)	</td>
                                                    <td>147.60</td>
                                                    <td>Approved</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="user-image d-flex align-items-center justify-content-center">
                                                                <LuUser />
                                                            </div>
                                                            <div className="user-info">
                                                                <h5>Olivier Thomas (1)</h5>
                                                                <span>789746464</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>APPNO7441 </td>
                                                    <td>10/15/2025 12:00 PM</td>
                                                    <td>Female</td>
                                                    <td>Sansa Gomez (9008)</td>
                                                    <td>Online</td>
                                                    <td>Normal</td>
                                                    <td>No</td>
                                                    <td>123.00</td>
                                                    <td>0.00 (0.00 %)	</td>
                                                    <td>147.60</td>
                                                    <td>Approved</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="user-image d-flex align-items-center justify-content-center">
                                                                <LuUser />
                                                            </div>
                                                            <div className="user-info">
                                                                <h5>Olivier Thomas (1)</h5>
                                                                <span>789746464</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>APPNO7441 </td>
                                                    <td>10/15/2025 12:00 PM</td>
                                                    <td>Female</td>
                                                    <td>Sansa Gomez (9008)</td>
                                                    <td>Online</td>
                                                    <td>Normal</td>
                                                    <td>No</td>
                                                    <td>123.00</td>
                                                    <td>0.00 (0.00 %)	</td>
                                                    <td>147.60</td>
                                                    <td>Approved</td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Appointment modal */}
                <div
                    className="modal fade create-appointment-modal"
                    ref={appointmentModalRef}
                    onHide={() => setShowCreateAppointmentModal(false)}
                    data-bs-backdrop="static"
                    dataBsKeyboard="false"
                    tabindex="-1"
                >
                    <div className="modal-dialog modal-xl">
                        <CreateAppointment
                            handleCloseModal={() => setShowCreateAppointmentModal(false)}
                            handlePatientModal={() => setShowCreatePatientModal(true)}
                            fetchAppointment={fetchAppointment}
                        />
                    </div>

                </div>

                {/* Patient modal */}
                <div
                    className="modal fade"
                    ref={modalRef}
                    onHide={() => setShowCreatePatientModal(false)}
                    data-bs-backdrop="static"
                    dataBsKeyboard="false"
                    tabindex="-1"
                >
                    <div className="modal-dialog modal-xl">
                        <CreatePatient
                            handleCloseModal={() => setShowCreatePatientModal(false)}
                        />
                    </div>
                </div>
            </main>
        </Layout>
    );
};
export default Appointment;
