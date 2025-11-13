import { FaCheckDouble } from "react-icons/fa6";
import Layout from "../../_layout";
import { Link } from "react-router-dom";
import SettingSidebar from "../../components/setting/SettingSidebar";

const AttendanceSetting = () => {
  return (
    <Layout>
      <main className="setting-page">
        <div className="row p-3">
          <div className="col-12 col-lg-2">
            <SettingSidebar />
          </div>
          <div className="col-12 col-lg-10">
            <div className="bg-white graph-card p-3">
              <div className="">
                <h5>Biometric Attendance Setting</h5>
              </div>
              <div className="border-bottom"></div>
              <div class="row my-3">
                <label class="col-sm-3 ">Biometric Attendance</label>
                <div class="col-sm-9">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="biometric"
                      id="disabled"
                    />
                    <label class="form-check-label">Disabled</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="biometric"
                      id="enabled"
                    />
                    <label class="form-check-label">Enabled</label>
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <label class="form-label">
                      Devices (Separate By Comma)
                    </label>
                  </div>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="" />
                  </div>
                </div>
              </div>
              <div className="border-bottom"></div>
              <div class="text-end pt-3">
                <button class="btn btn-primary">Save</button>
              </div>
            </div>
            <div className="bg-white graph-card p-3 my-3">
              <div>
                <div className="pb-2">
                  <h5>Attendance Setting</h5>
                </div>
                <div className="border-bottom"></div>
                <div class="d-flex justify-content-between align-items-center mb-3 box-header">
                  <span>
                    Role: <strong>Admin</strong>
                  </span>
                  <div className="pt-4">
                    <button class="btn btn-primary btn-sm">Update</button>
                  </div>
                </div>
                <table class="table table-borderless align-middle">
                  <thead>
                    <tr>
                      <th>Attendance Type</th>
                      <th>Entry From (hh:mm:ss)</th>
                      <th>Entry Upto (hh:mm:ss)</th>
                      <th>Total Hour</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Present (<span class="text-success fw-bold">P</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:00:00"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="08:30:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Late (<span class="text-warning fw-bold">L</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:30:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="08:00:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Half Day (<span class="text-danger fw-bold">F</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="13:30:30"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="13:45:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="05:30:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Half Day Second Shift (
                        <span class="text-secondary fw-bold">SH</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="14:00:30"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="14:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="04:30:30"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>                
                <div className="border-bottom"></div>
                <div class="d-flex justify-content-between align-items-center mb-3 box-header">
                  <span>
                    Role: <strong>Accountant</strong>
                  </span>
                  <div className="pt-4">
                    <button class="btn btn-primary btn-sm">Update</button>
                  </div>
                </div>
                <table class="table table-borderless align-middle">
                  <thead>
                    <tr>
                      <th>Attendance Type</th>
                      <th>Entry From (hh:mm:ss)</th>
                      <th>Entry Upto (hh:mm:ss)</th>
                      <th>Total Hour</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Present (<span class="text-success fw-bold">P</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:00:00"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="08:30:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Late (<span class="text-warning fw-bold">L</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:30:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="08:00:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Half Day (<span class="text-danger fw-bold">F</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="13:30:30"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="13:45:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="05:30:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Half Day Second Shift (
                        <span class="text-secondary fw-bold">SH</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="14:00:30"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="14:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="04:30:30"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <div className="border-bottom"></div>
                <div class="d-flex justify-content-between align-items-center mb-3 box-header">
                  <span>
                    Role: <strong>Doctor</strong>
                  </span>
                  <div className="pt-4">
                    <button class="btn btn-primary btn-sm">Update</button>
                  </div>
                </div>
                <table class="table table-borderless align-middle">
                  <thead>
                    <tr>
                      <th>Attendance Type</th>
                      <th>Entry From (hh:mm:ss)</th>
                      <th>Entry Upto (hh:mm:ss)</th>
                      <th>Total Hour</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Present (<span class="text-success fw-bold">P</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:00:00"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="08:30:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Late (<span class="text-warning fw-bold">L</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:30:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="08:00:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Half Day (<span class="text-danger fw-bold">F</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="13:30:30"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="13:45:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="05:30:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Half Day Second Shift (
                        <span class="text-secondary fw-bold">SH</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="14:00:30"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="14:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="04:30:30"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <div className="border-bottom"></div>
                <div class="d-flex justify-content-between align-items-center mb-3 box-header">
                  <span>
                    Role: <strong>Pharmacist</strong>
                  </span>
                  <div className="pt-4">
                    <button class="btn btn-primary btn-sm">Update</button>
                  </div>
                </div>
                <table class="table table-borderless align-middle">
                  <thead>
                    <tr>
                      <th>Attendance Type</th>
                      <th>Entry From (hh:mm:ss)</th>
                      <th>Entry Upto (hh:mm:ss)</th>
                      <th>Total Hour</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Present (<span class="text-success fw-bold">P</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:00:00"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="08:30:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Late (<span class="text-warning fw-bold">L</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:30:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="08:00:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Half Day (<span class="text-danger fw-bold">F</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="13:30:30"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="13:45:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="05:30:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Half Day Second Shift (
                        <span class="text-secondary fw-bold">SH</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="14:00:30"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="14:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="04:30:30"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <div className="border-bottom"></div>
                <div class="d-flex justify-content-between align-items-center mb-3 box-header">
                  <span>
                    Role: <strong>Pathologist</strong>
                  </span>
                  <div className="pt-4">
                    <button class="btn btn-primary btn-sm">Update</button>
                  </div>
                </div>
                <table class="table table-borderless align-middle">
                  <thead>
                    <tr>
                      <th>Attendance Type</th>
                      <th>Entry From (hh:mm:ss)</th>
                      <th>Entry Upto (hh:mm:ss)</th>
                      <th>Total Hour</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Present (<span class="text-success fw-bold">P</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:00:00"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="08:30:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Late (<span class="text-warning fw-bold">L</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:30:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="08:00:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Half Day (<span class="text-danger fw-bold">F</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="13:30:30"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="13:45:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="05:30:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Half Day Second Shift (
                        <span class="text-secondary fw-bold">SH</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="14:00:30"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="14:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="04:30:30"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <div className="border-bottom"></div>
                <div class="d-flex justify-content-between align-items-center mb-3 box-header">
                  <span>
                    Role: <strong>Radiologist</strong>
                  </span>
                  <div className="pt-4">
                    <button class="btn btn-primary btn-sm">Update</button>
                  </div>
                </div>
                <table class="table table-borderless align-middle">
                  <thead>
                    <tr>
                      <th>Attendance Type</th>
                      <th>Entry From (hh:mm:ss)</th>
                      <th>Entry Upto (hh:mm:ss)</th>
                      <th>Total Hour</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Present (<span class="text-success fw-bold">P</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:00:00"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="08:30:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Late (<span class="text-warning fw-bold">L</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:30:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="08:00:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Half Day (<span class="text-danger fw-bold">F</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="13:30:30"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="13:45:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="05:30:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Half Day Second Shift (
                        <span class="text-secondary fw-bold">SH</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="14:00:30"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="14:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="04:30:30"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div>
                <div className="border-bottom"></div>
                <div class="d-flex justify-content-between align-items-center mb-3 box-header">
                  <span>
                    Role: <strong>Super Admin</strong>
                  </span>
                  <div className="pt-4">
                    <button class="btn btn-primary btn-sm">Update</button>
                  </div>
                </div>
                <table class="table table-borderless align-middle">
                  <thead>
                    <tr>
                      <th>Attendance Type</th>
                      <th>Entry From (hh:mm:ss)</th>
                      <th>Entry Upto (hh:mm:ss)</th>
                      <th>Total Hour</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Present (<span class="text-success fw-bold">P</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:00:00"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="08:30:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Late (<span class="text-warning fw-bold">L</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="10:30:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="08:00:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Half Day (<span class="text-danger fw-bold">F</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="13:30:30"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="13:45:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="05:30:30"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Half Day Second Shift (
                        <span class="text-secondary fw-bold">SH</span>)
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="14:00:30"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          value="14:15:00"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          value="04:30:30"
                        />
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
export default AttendanceSetting;
