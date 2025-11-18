

import { FaCheckDouble } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nexmo = () => {
  return (
    <div className="row sms-gateway-tab">
      <div className="col-lg-6">
        <form className="form-outer">
          <div className="mb-4">
            <label className="form-label">
              Api Key<span>*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-4">
            <label className="form-label">
              Nexmo Api Secret<span>*</span>
            </label>
            <input type="password" className="form-control" />
          </div>
          <div className="mb-4">
            <label className="form-label">
              Registered / From Number<span>*</span>
            </label>
            <input type="password" className="form-control" />
          </div>
          <div className="mb-4">
            <label className="col-sm-4 form-label">Status</label>
            <div className="mb-4">
              <select className="form-select">
                <option>Disabled</option>
                <option>Enabled</option>
              </select>
            </div>
          </div>
          <div className="text-end mt-4 save-btn">
            <button className="btn btn-primary">
              <FaCheckDouble size={20} className="pe-2" />
              Save
            </button>
          </div>
        </form>
      </div>
      <div className="col-lg-6">
        <div className="text-center pt-4">
          <div>
            <img
              src="https://placehold.co/300x100"
              alt="Clickatell Logo"
              className="mb-2"
            />
          </div>
          <div>
            <Link to="https://www.clickatell.com">
              https://www.clickatell.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nexmo;
