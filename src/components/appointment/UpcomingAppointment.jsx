import { LuUser } from "react-icons/lu";

const UpcomingAppointment = () => {
  return (
    <table className="table">
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
          <td>0.00 (0.00 %) </td>
          <td>147.60</td>
          <td>
            <span className="badge badge-pill success-badge-bg">Approved</span>
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
          <td>Female</td>
          <td>Sansa Gomez (9008)</td>
          <td>Online</td>
          <td>Normal</td>
          <td>No</td>
          <td>123.00</td>
          <td>0.00 (0.00 %) </td>
          <td>147.60</td>
          <td>
            <span className="badge badge-pill success-badge-bg">Approved</span>
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
          <td>Female</td>
          <td>Sansa Gomez (9008)</td>
          <td>Online</td>
          <td>Normal</td>
          <td>No</td>
          <td>123.00</td>
          <td>0.00 (0.00 %) </td>
          <td>147.60</td>
          <td>
            <span className="badge badge-pill success-badge-bg">Approved</span>
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
          <td>Female</td>
          <td>Sansa Gomez (9008)</td>
          <td>Online</td>
          <td>Normal</td>
          <td>No</td>
          <td>123.00</td>
          <td>0.00 (0.00 %) </td>
          <td>147.60</td>
          <td>
            <span className="badge badge-pill success-badge-bg">Approved</span>
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
          <td>Female</td>
          <td>Sansa Gomez (9008)</td>
          <td>Online</td>
          <td>Normal</td>
          <td>No</td>
          <td>123.00</td>
          <td>0.00 (0.00 %) </td>
          <td>147.60</td>
          <td>
            <span className="badge badge-pill success-badge-bg">Approved</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default UpcomingAppointment;
