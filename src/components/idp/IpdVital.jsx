import { CiSearch } from "react-icons/ci"
import { PiPlusBold } from "react-icons/pi"

const IpdVital = () => {
    return(
         <div className="ipd-Operations">
            <div className="card">
              <div className="card-header bg-white d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Vitals</h6>
                <button className="btn btn-primary btn-sm">
                  <PiPlusBold size={16} className="icon-color" /> Add Vitals
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
                        <th>
                           Height<br />
                            (1  -  200 Centimeters) 
                        </th>
                        <th>
                            Weight<br />(0 - 150 Kilograms)	
                        </th>
                        <th>Pulse <br />(70 - 100 Beats per)</th>
                        <th>
                            Temperature <br />(95.8 - 99.3 Fahrenheit )	
                        </th>
                        <th>BP <br />
                        (90/60 - 140/90 mmHg)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>09/26/2025</td>
                        <td>180 ( 12:00 PM)</td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
      </div>
    )
}
export default IpdVital