import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const AddPatient = () => {
  return (
    <div className="add-patient">
      <div className="top-bar p-3">
        <select className="dropdown">
          <option>Select</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <Link className="btn-secondary">+ New Patient</Link>
       <BiPlus />
      </div>
         {/* <div className="row">
                <div className="col-12 col-md-8">
                    <div className="border">
                        dd
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="border">
                        dd
                    </div>
                </div>
          </div> */}
    </div>
  );
};
export default AddPatient;
