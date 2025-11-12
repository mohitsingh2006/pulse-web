import { CiSearch } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import { PiPlusBold } from "react-icons/pi";
import { RiEditFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const  IdpOperations = () => {
    return(
        <div className="ipd-Operations">
            <div className="card">
              <div className="card-header bg-white d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Operations</h6>
                <button className="btn btn-primary btn-sm">
                  <PiPlusBold size={16} className="icon-color" /> Add Operations
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
                        <th>Reference No</th>
                        <th>Operation Date</th>
                        <th>Operation Name</th>
                        <th>Operation Category</th>
                        <th>OT Technician</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>OTREF459</td>
                        <td>11/12/2025 09:30 PM	</td>
                        <td>Facelift Surgery</td>
                        <td>Plastic Surgery	</td>
                        <td>Jason</td>
                        <td className="d-flex">
                          <Link className="me-2">
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

export default  IdpOperations;