import { CiSearch } from "react-icons/ci"

const IpdBedHistory = () => {
    return(
          <div className="ipd-Operations">
                   <div className="card">
                     <div className="card-header bg-white d-flex justify-content-between align-items-center">
                       <h6 className="mb-0">Bed History</h6>
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
                               <th>Bed Group</th>
                               <th>Bed</th>
                               <th>From Date</th>
                               <th>To Date</th>
                               <th>Active Bed</th>
                             </tr>
                           </thead>
                           <tbody>
                             <tr>
                               <td>General Ward Male</td>
                               <td>	TF - 106</td>
                               <td>09/30/2025 03:29 PM	</td>
                               <td></td>
                               <td>Yes</td>
                             </tr>
                           </tbody>
                         </table>
                       </div>
                     </div>
                   </div>
             </div>
    )   
}
export default IpdBedHistory