import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Toaster } from "react-hot-toast";


const Layout = ({children}) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return (
        <div>
             <Sidebar isCollapsed={isSidebarCollapsed} />
             <div
                    className={`main-content bg-light  ${
                    isSidebarCollapsed ? "collapsed" : ""
                    }`}
            >

                <Header toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
                {children}
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}


export default Layout;