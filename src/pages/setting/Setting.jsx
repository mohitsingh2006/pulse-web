import { Link } from "react-router-dom"
import Layout from "../../_layout"
import GeneralSetting from "./GeneralSetting"
import AttendanceSetting from "./AttendanceSetting"

const Setting = () => {
    return(
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
                        <GeneralSetting />
                        <AttendanceSetting />
                </div>
            </main>
        </Layout>
    )
}
export default Setting