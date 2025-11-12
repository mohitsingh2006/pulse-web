import { CiSearch } from "react-icons/ci"
import { PiPlusBold } from "react-icons/pi"
import { Link } from "react-router-dom"
import { RiEditFill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";

const  IdpConsultantRegister = () => {
    return(
      <div className="idp-consultant-register">
            <div className="card">
              <div className="card-header bg-white d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Consultant Register</h6>
                <button className="btn btn-primary btn-sm">
                  <PiPlusBold size={16} className="icon-color" /> Consultant Register 
                </button>
              </div>
              <div className="mb-3 d-flex gap-3 search-box pt-4">
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
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered align-middle mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Applied Date</th>
                        <th>Consultant Doctor</th>
                        <th>Instruction</th>
                        <th>Consultant Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>06/12/2025 10:14 AM</td>
                        <td>Sonia Bush (9002)</td>
                        <td>Take medicine after meal everyday</td>
                        <td>06/14/2025</td>
                        <td>
                          <Link className="me-1">
                              <RiEditFill size={22}/>
                          </Link>
                          <Link className="primary-color">
                              <FaTrashAlt size={16}/>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
      </div>
    )
}
export default  IdpConsultantRegister