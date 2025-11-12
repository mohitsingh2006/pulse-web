import { FaRegEdit, FaTrashAlt } from "react-icons/fa"
import { MdFormatListBulleted } from "react-icons/md";

const IpdTimeline = () => {
    return(
       <div className="card idp-timeline border-0 shadow-sm">
            <div className="card-body">
              <h5 className="fw-bold mb-3">TIMELINE</h5>
              <span className="badge bg-primary mb-3">10/08/2025 09:30 PM</span>
              <div className="position-relative ps-4 border-start border-2 border-secondary">
                {/* <div className="list-icon">
                  <MdFormatListBulleted />
                </div> */}
                <div className="card bg-light border-0">
                  <div className="card-body">
                    <h6 className="mb-2">
                      Daily Routine Check up
                    </h6>
                    <p className="mb-0">Daily Routine Check up</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}
export default IpdTimeline