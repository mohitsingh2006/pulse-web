import { FaCheckDouble } from "react-icons/fa6";
import Layout from "../../_layout";
import { Link } from "react-router-dom";

const AttendanceSetting = () => {
  return (
    <Layout>
      <main className="setting-page">
        <div className="row p-3">
          <div className="col-12 col-lg-2">
            <div className="graph-card bg-white">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link active" to="/general-setting">
                    General Setting
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/attendance-setting">
                    Attendance Setting
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Notification Setting
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Notification Setting
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    SMS Setting
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Email Setting
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Payment Methods
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Front CMS Setting
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Prefix Setting{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Roles Permissions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Backup / Restore
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Languages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Captcha Settings
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Addons
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Modules
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    System Update
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-10">
            <div className="bg-white graph-card p-3">
              <div className="border-bottom">
                <h6>Biometric Attendance Setting</h6>
              </div>
              <form className="form-outer py-3">
                <div className="row">
                    <div className="col-12">
                        <div className="mb-4">
                            <label className="form-label">Biometric Attendance</label>
                        <div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="doctorMode" />
                            <label className="form-check-label">Disabled</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="doctorMode" />
                            <label className="form-check-label">Enabled</label>
                        </div>
                    </div>
                    </div>
                </div>
                  <div className="col-12">
                    <div className="mb-4">
                      <label className="form-label">
                        Devices (Separate By Comma)<span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Smart Hospital & Research Center"
                        id=""
                        name=""
                      />
                    </div>
                  </div>
                  
                </div>
              
              </form>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default AttendanceSetting;
