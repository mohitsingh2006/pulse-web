import { CiSearch } from "react-icons/ci";

const TreatmentHistory = () => {
    return(
        <div className="ipd-Operations">
            <div className="card">
                <div className="card-header bg-white d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Treatment History</h6>
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
                            <th>IPD No</th>
                            <th>Symptoms</th>
                            <th>Consultant Doctor</th>
                            <th>Bed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>IPDN111</td>
                            <td>Thirst Thirst is the feeling of needing to drink something. It occurs whenever the body is dehydrated for any reason. Any condition that can result in a loss of body water can lead to thirst or excessive thirst.</td>
                            <td>Sansa Gomez (9008)</td>
                            <td>TF - 106-General Ward Male-3rd Floor</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    );
}
export default TreatmentHistory;