import { Link } from "react-router-dom";
import { useActiveLink } from "../../hooks/useActiveLink";

const SettingSidebar = () => {
    const getLinkClassName =  useActiveLink();

  return (
    <div className="graph-card bg-white">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className={getLinkClassName('/setting/general')} to="/setting/general">
            General Setting
          </Link>
        </li>
        <li className="nav-item">
          <Link className={getLinkClassName('/setting/attendance')}  to="/setting/attendance">
            Attendance Setting
          </Link>
        </li>
        <li className="nav-item">
          <Link className={getLinkClassName('/setting/notification')}  to="/setting/notification">
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
  );
};

export default SettingSidebar;
