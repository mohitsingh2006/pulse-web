import { IoReorderThreeOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { SlPrinter } from "react-icons/sl";
import { useEffect, useRef, useState } from "react";
const OldAppointment = () => {

    
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Patient Name</th>
          <th scope="col">Appointment No</th>
          <th scope="col">Appointment Date</th>
          <th scope="col">Doctor</th>
          <th scope="col">Source</th>
          <th scope="col">Priority</th>
          <th scope="col">Live Consultant</th>
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
                <h5>Olivier Thomas (1)</h5>
                <span>789746464</span>
              </div>
            </div>
          </td>
          <td>APPNO7441 </td>
          <td>10/15/2025 12:00 PM</td>
          <td>Sansa Gomez (9008)</td>
          <td>Online</td>
          <td>Normal</td>
          <td>No</td>
          <td>
            <span className="badge badge-pill success-badge-bg">Approved</span>
          </td>
          <td>
            <div className="d-flex justify-content-center gap-2">
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={() => setShowAppointmentDetailModal(true)}
            >
              <IoReorderThreeOutline size={18} className="icon" />
            </button>
            <button className="btn btn-sm btn-outline-secondary">
              <SlPrinter size={18} className="" />
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={() => setShowRescheduleModal(true)}
            >
              <MdOutlineCalendarMonth size={18} className="" />
            </button>
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
                <h5>Olivier Thomas (1)</h5>
                <span>789746464</span>
              </div>
            </div>
          </td>
          <td>APPNO7441 </td>
          <td>10/15/2025 12:00 PM</td>
          <td>Sansa Gomez (9008)</td>
          <td>Online</td>
          <td>Normal</td>
          <td>No</td>
          <td>
            <span className="badge badge-pill success-badge-bg">Approved</span>
          </td>
          <td>
            <div className="d-flex justify-content-center gap-2">
              <button
                className="btn btn-sm btn-outline-secondary"
                type="button"
                onClick={() => setShowAppointmentDetailModal(true)}
              >
                <IoReorderThreeOutline size={18} className="icon" />
              </button>
              <button className="btn btn-sm btn-outline-secondary">
                <SlPrinter size={18} className="" />
              </button>
              <button
                className="btn btn-sm btn-outline-secondary"
                type="button"
                onClick={() => setShowRescheduleModal(true)}
              >
                <MdOutlineCalendarMonth size={18} className="" />
              </button>
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
                <h5>Olivier Thomas (1)</h5>
                <span>789746464</span>
              </div>
            </div>
          </td>
          <td>APPNO7441 </td>
          <td>10/15/2025 12:00 PM</td>
          <td>Sansa Gomez (9008)</td>
          <td>Online</td>
          <td>Normal</td>
          <td>No</td>
          <td>
            <span className="badge badge-pill success-badge-bg">Approved</span>
          </td>
          <td>
            <div className="d-flex justify-content-center gap-2">
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={() => setShowAppointmentDetailModal(true)}
            >
              <IoReorderThreeOutline size={18} className="icon" />
            </button>
            <button className="btn btn-sm btn-outline-secondary">
              <SlPrinter size={18} className="" />
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={() => setShowRescheduleModal(true)}
            >
              <MdOutlineCalendarMonth size={18} className="" />
            </button>
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
                <h5>Olivier Thomas (1)</h5>
                <span>789746464</span>
              </div>
            </div>
          </td>
          <td>APPNO7441 </td>
          <td>10/15/2025 12:00 PM</td>
          <td>Sansa Gomez (9008)</td>
          <td>Online</td>
          <td>Normal</td>
          <td>No</td>
          <td>
            <span className="badge badge-pill success-badge-bg">Approved</span>
          </td>
          <td>
            <td className="d-flex justify-content-center gap-2">
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={() => setShowAppointmentDetailModal(true)}
            >
              <IoReorderThreeOutline size={18} className="icon" />
            </button>
            <button className="btn btn-sm btn-outline-secondary">
              <SlPrinter size={18} className="" />
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={() => setShowRescheduleModal(true)}
            >
              <MdOutlineCalendarMonth size={18} className="" />
            </button>
          </td>
          </td>
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
          <td>Sansa Gomez (9008)</td>
          <td>Online</td>
          <td>Normal</td>
          <td>No</td>
          <td>
            <span className="badge badge-pill success-badge-bg">Approved</span>
          </td>
          <td>
            <div className="d-flex justify-content-center gap-2">
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={() => setShowAppointmentDetailModal(true)}
            >
              <IoReorderThreeOutline size={18} className="icon" />
            </button>
            <button className="btn btn-sm btn-outline-secondary">
              <SlPrinter size={18} className="" />
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={() => setShowRescheduleModal(true)}
            >
              <MdOutlineCalendarMonth size={18} className="" />
            </button>
          </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default OldAppointment;
