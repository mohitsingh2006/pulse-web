import { CiSearch } from "react-icons/ci";
import { FaFilePrescription } from "react-icons/fa";
import { PiPlusBold } from "react-icons/pi";

const IpdPrescription = () => {
  
  return (
    <div className="ipd-prescription">
      <div className="card">
        <div className="card-header bg-white d-flex justify-content-between align-items-center">
          <h6 className="mb-0">Prescription</h6>
          <button className="btn btn-primary btn-sm">
            <PiPlusBold size={16} className="icon-color" /> Add Prescription
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
                  <th>Prescription No</th>
                  <th>Date</th>
                  <th>Finding</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IPDP384</td>
                  <td>06/04/2025</td>
                  <td>
                    Osteoporosis Bone density problems may occur because the
                    body loses too much bone tissue, makes too little of it, or
                    some combination of both. It tends to be symptomless. That
                    is, people with osteoporosis tend not to know they have it –
                    until a bone fracture has them visiting a doctor who makes
                    the diagnosis.
                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary">
                      <FaFilePrescription size={16} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IpdPrescription;
