import { CiSearch } from "react-icons/ci"
import { FaTrashAlt } from "react-icons/fa"
import { PiPlusBold } from "react-icons/pi"
import { RiEditFill } from "react-icons/ri"
import { SlPrinter } from "react-icons/sl"
import { Link } from "react-router-dom"

const IdpCharge = () => {
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
                        <th>Date</th>
                        <th>Charge Name /<br/>Charge Note</th>
                        <th>Charge Type</th>
                        <th>Charge Category</th>
                        <th>Qty</th>
                        <th>Standard Charge ($) </th>
                        <th>Applied Charge ($)</th>
                        <th>TPA Charge ($)</th>
                        <th>Discount ($)</th>
                        <th>Tax</th>
                        <th>Amount ($)</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>11/14/2025 12:30 PM</td>
                        <td>Services Charges</td>
                        <td>Operations</td>
                        <td>Operation Services</td>
                        <td>3</td>
                        <td>105.00</td>
                        <td>105.00</td>
                        <td>99.00</td>
                        <td>0.00 (0.00%)</td>
                        <td>31.50 (10.00%)</td>
                        <td>346.50s</td>
                        <td> 
                            <div className="d-flex">
                                <Link className="me-2">
                                    <RiEditFill size={18}/>
                                </Link>
                                <Link className="me-2">
                                    <SlPrinter size={18}/>
                                </Link>
                         
                                <Link className="primary-color">
                                 <FaTrashAlt size={18}/>
                                </Link>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td>11/14/2025 09:30 PM	</td>
                        <td>ICU</td>
                        <td>IPD</td>
                        <td>Intensive Care Units</td>
                        <td>4</td>
                        <td>515.00</td>
                        <td>2,060.00</td>
                        <td>340.00</td>
                        <td>206.00 (10.00%)</td>
                        <td>333.72 (18.00%)</td>
                        <td>2,187.72</td>
                        <td>
                             <div className="d-flex">
                                <Link className="me-2">
                                    <RiEditFill size={18}/>
                                </Link>
                                <Link className="me-2">
                                    <SlPrinter size={18}/>
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
export default IdpCharge