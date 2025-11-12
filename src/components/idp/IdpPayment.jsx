import { CiSearch } from "react-icons/ci"
import { FaTrashAlt } from "react-icons/fa"
import { PiPlusBold } from "react-icons/pi"
import { RiEditFill } from "react-icons/ri"
import { SlPrinter } from "react-icons/sl"
import { Link } from "react-router-dom"

const IdpPayment = ()=>{
    return(
      <div className="ipd-Operations">
            <div className="card">
              <div className="card-header bg-white d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Payment</h6>
                <button className="btn btn-primary btn-sm">
                  <PiPlusBold size={16} className="icon-color" /> Add Payment
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
                        <th>Transaction ID</th>
                        <th>Date</th>
                        <th>Note</th>
                        <th>Payment Mode</th>
                        <th>Payment Amount</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>TRANID10954	</td>
                        <td>07/04/2025 09:56 AM	</td>
                        <td></td>
                        <td>Transfer to Bank Account</td>
                        <td>1100.00</td>
                        <td>
                          <div className="d-flex">
                            <Link className="me-2">
                                <SlPrinter size={18}/>
                            </Link>
                    
                            <Link className="me-2">
                                <RiEditFill size={18}/>
                            </Link>
                            
                            <Link className="primary-color">
                            <FaTrashAlt size={18}/>
                            </Link>
                        </div>
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
export default IdpPayment