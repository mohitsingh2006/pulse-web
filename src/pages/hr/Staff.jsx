import Layout from "../../_layout";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { IoListOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import StaffCard from "../../components/StaffCard";


const Staff = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const handleEdit = (name) => alert(`Edit clicked for ${name}`);
  const handleDelete = (name) => alert(`Delete clicked for ${name}`);
 
  const staffList = [
    {
    id: 1,
    name: "Arpit Singh",
    email: "arpit.singh@hospitalcare.com",
    phone: "+91 98765 43210",
    role: "Super Admin",
  },
  {
    id: 2,
    name: "Sneha Sharma",
    email: "sneha.sharma@hospitalcare.com",
    phone: "+91 98123 45678",
    role: "HR Manager",
  },
  {
    id: 3,
    name: "Dr. Raj Verma",
    email: "raj.verma@hospitalcare.com",
    phone: "+91 98987 65432",
    role: "Cardiologist",
  },
  {
    id: 4,
    name: "Dr. Meena Patel",
    email: "meena.patel@hospitalcare.com",
    phone: "+91 98745 12367",
    role: "Neurologist",
  },
  {
    id: 5,
    name: "Ankit Tiwari",
    email: "ankit.tiwari@hospitalcare.com",
    phone: "+91 91234 56789",
    role: "IT Administrator",
  },
  {
    id: 6,
    name: "Priya Nair",
    email: "priya.nair@hospitalcare.com",
    phone: "+91 99887 76543",
    role: "Receptionist",
  },
  {
    id: 7,
    name: "Rohan Gupta",
    email: "rohan.gupta@hospitalcare.com",
    phone: "+91 98711 22134",
    role: "Pharmacist",
  },
  {
    id: 8,
    name: "Komal Joshi",
    email: "komal.joshi@hospitalcare.com",
    phone: "+91 99333 66789",
    role: "Nurse",
  },
  ];
  return (
    <Layout>
      <main className="px-3 pb-5 appointment-page">
        <div className="row">
            <div className="col-12">
                <div className="bg-white graph-card p-4">
                    <div className="d-flex justify-content-between align-content-center table-header ">
                        <div className="d-flex align-content-center">
                            <h4>Staff Directory</h4>
                        </div>
                        <div className="d-flex align-content-center ">
                            <div className="d-flex gap-2">
                                <Link className="btn btn-primary" to="/create-staff">
                                    <GoPlus size={20} /> Add Staff
                                </Link> 
                                <Link className="btn btn-primary" to="/staff-attendance">
                                    <IoListOutline size={20} /> Staff Attendance
                                </Link> 
                                <Link className="btn btn-primary" to="/payroll">
                                    <IoListOutline size={20} /> Payroll
                                </Link> 
                                <Link className="btn btn-primary" to="/leave-request">
                                    <IoListOutline size={20} /> Leaves
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                            <select className="form-select" id="staffRole">
                                <option selected disabled>Choose role</option>
                                <option value="1">Admin</option>
                                <option value="2">Manager</option>
                                <option value="3">HR</option>
                                <option value="4">Staff</option>
                            </select>
                            <button className="btn btn-primary" type="button">
                                <IoSearchSharp size={25} />
                            </button>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by Staff ID, Name, Role etc..."
                                id="search"
                            />
                            <button className="btn btn-primary" type="button">
                                 <IoSearchSharp size={25} />
                            </button>
                            </div>
                        </div>
                        </div>
                    <div>
                        <div className="row">
                            {staffList.map((staff, index) => (
                                <StaffCard
                                key={index}
                                name={staff.name}
                                email={staff.email}
                                phone={staff.phone}
                                role={staff.role}
                                onEdit={() => handleEdit(staff.name)}
                                onDelete={() => handleDelete(staff.name)}
                                />
                            ))}
                        </div>
                    </div>            
                </div>
            </div>
        </div>
      </main>
    </Layout>
  );
};
export default Staff;
