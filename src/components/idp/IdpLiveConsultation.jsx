import { CiSearch } from "react-icons/ci"

const IdpLiveConsultation = () =>{
    return(
        <div className="ipd-Operations">
            <div className="card">
              <div className="card-header bg-white d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Live Consultation</h6>
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
                        <th>Consultation Title</th>
                        <th>Date</th>
                        <th>Created By </th>
                        <th>Created For</th>
                        <th>Patient</th>
                        <th>Status</th>
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
export default IdpLiveConsultation