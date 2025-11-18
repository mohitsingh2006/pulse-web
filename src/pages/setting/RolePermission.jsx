import { Link } from "react-router-dom"
import Layout from "../../_layout"
import SearchBox from "../../components/SearchBox"
import SettingSidebar from "../../components/setting/SettingSidebar"
import { RiEditFill } from "react-icons/ri"
import { BsFillTagFill, BsTagFill } from "react-icons/bs"

const RolePermission = ()=> {
    return(
        <Layout>
            <main>
                <div className="setting-page">
                    <div className="row p-3">
                        <div className="col-12 col-lg-2">
                            <SettingSidebar />
                        </div>
                        <div className="col-lg-10">
                            <div className="row">
                                <div className="col-lg-4">
                                     <div className="bg-white graph-card p-3">
                                        <div>
                                            <h5>Role</h5>
                                        </div>
                                        <div className="border-bottom"></div>
                                        <form action="" className="form-outer pt-3">
                                            <div className="">
                                                <label className="form-label">Name<span>*</span></label>
                                                <input className="form-control" type="text" />
                                            </div>
                                            <div className="border-bottom pt-4"></div>
                                            <div className="text-end pt-4">
                                                <button className="btn btn-primary">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                     <div className="bg-white graph-card p-3">
                                        <div>
                                            <h5>Role List</h5>
                                        </div>
                                        <div className="border-bottom"></div>
                                        <SearchBox />
                                        <table className="table my-3">
                                            <thead>
                                                <tr>
                                                    <th scope="col" width="25%">
                                                        Role
                                                    </th>
                                                    <th scope="col" width="25%">
                                                        Type
                                                    </th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Doctor</td>
                                                    <td>System</td>
                                                    <td className="">
                                                        <div className="d-flex">
                                                            <Link className="me-1">
                                                                <BsFillTagFill className="edit-icon" size={16} />
                                                            </Link>
                                                            <Link className="me-1">
                                                                <RiEditFill className="edit-icon" size={16}/>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Accountant</td>
                                                    <td>System</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link className="me-1">
                                                                <BsFillTagFill className="edit-icon" size={16} />
                                                            </Link>
                                                            <Link className="me-1">
                                                                <RiEditFill className="edit-icon" size={16}/>
                                                            </Link>
                                                        </div>
                                                    </td>                                                       
                                                </tr>
                                                 <tr>
                                                    <td>Doctor</td>
                                                    <td>System</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link className="me-1">
                                                                <BsFillTagFill className="edit-icon" size={16} />
                                                            </Link>
                                                            <Link className="me-1">
                                                                <RiEditFill  className="edit-icon" size={16}/>
                                                            </Link>
                                                        </div>
                                                    </td>                                                       
                                                </tr>
                                                 <tr>
                                                    <td>Pharmacist</td>
                                                    <td>System</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link className="me-1">
                                                                <BsFillTagFill className="edit-icon" size={16} />
                                                            </Link>
                                                            <Link className="me-1">
                                                                <RiEditFill className="edit-icon" size={16}/>
                                                            </Link>
                                                        </div>
                                                    </td>                                                       
                                                </tr>
                                                 <tr>
                                                    <td>Pathologist</td>
                                                    <td>System</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link className="me-1">
                                                                <BsFillTagFill className="edit-icon" size={16} />
                                                            </Link>
                                                            <Link className="me-1">
                                                                <RiEditFill className="edit-icon" size={16}/>
                                                            </Link>
                                                        </div>
                                                    </td>                                                       
                                                </tr>
                                                 <tr>
                                                    <td>Radiologist</td>
                                                    <td>System</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link className="me-1 ">
                                                                <BsFillTagFill className="edit-icon" size={16} />
                                                            </Link>
                                                            <Link className="me-1">
                                                                <RiEditFill className="edit-icon" size={16}/>
                                                            </Link>
                                                        </div>
                                                    </td>                                                       
                                                </tr>
                                                <tr>
                                                    <td>Receptionist</td>
                                                    <td>System</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link className="me-1">
                                                                <BsFillTagFill className="edit-icon" size={16} />
                                                            </Link>
                                                            <Link className="me-1">
                                                                <RiEditFill className="edit-icon" size={16}/>
                                                            </Link>                                                            
                                                        </div>
                                                    </td>                                                       
                                                </tr>
                                                <tr>
                                                    <td>Nurse</td>
                                                    <td>System</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link className="me-1">
                                                                <BsFillTagFill className="edit-icon" size={16} />
                                                            </Link>
                                                            <Link className="me-1">
                                                                <RiEditFill className="edit-icon" size={16}/>
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
                    </div>
                </div>
            </main>
        </Layout>
    )
}
export default RolePermission