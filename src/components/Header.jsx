import { CiSearch } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";

const Header = ({ toggleSidebar }) => {
    return(
        <div className="header position-fixed bg-white shadow-sm d-flex justify-content-between align-items-center px-4">            
            <div className="d-flex align-items-center gap-4">
                <div>
                    <button className="btn p-0 menu-button me-1" onClick={toggleSidebar}>
                        <img src="../icons/menu.svg" alt="Menu" width={25} />
                    </button>   
                </div>
                <div>
                    <div className="input-group">
                        <span className="input-group-text">
                            <CiSearch size={20} />
                        </span>
                        <input type="text" className="form-control" placeholder="Search patients, appointments"  />
                    </div>
                </div> 
            </div>
            <div className="d-flex align-items-center">
                <div className="d-flex gap-4">
                    <div className="position-relative">
                        <FiMessageSquare  size={22} />
                        <span className="position-absolute translate-middle badge start-100 rounded-circle d-flex align-items-center justify-content-center">
                            5
                        </span>
                    </div>
                    <div className="position-relative">
                        <IoIosNotificationsOutline size={22} />
                        <span className="position-absolute translate-middle badge start-100 rounded-circle d-flex align-items-center justify-content-center">
                            3
                        </span>
                    </div>
                    <div>
                        <IoSettingsOutline size={22} />
                    </div>
                </div>

                <div className="d-flex align-items-center gap-3 ms-5 position-relative user-info">
                    <div className="text-end">
                        <div className="username">User Name Jo</div>
                        <span className="role">Degination</span>    
                    </div>
                    <div className="avtar d-flex align-items-center justify-content-center">
                        <LuUserRound size={25} color="#ffffff" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Header