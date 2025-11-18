import { CiSearch } from "react-icons/ci";
import Layout from "../../_layout";
import SettingSidebar from "../../components/setting/SettingSidebar";
import { Link } from "react-router-dom";
import SearchBox from "../../components/SearchBox";
import SwitchToggle from "../../components/SwitchToggle";

const UserSetting = () => {
  return (
    <Layout>
      <main className="setting-page">
        <div className="row p-3">
          <div className="col-12 col-lg-2">
            <SettingSidebar />
          </div>
          <div className="col-lg-10">
            <div className="bg-white graph-card p-3">
                <div className="d-flex justify-content-between">
                    <div className="">
                        <h5>Users</h5>
                    </div>
                    <div className="toggle-container">
                       <button class="toggle-btn" onclick="selectTab(this)">Patient</button>
                        <button class="toggle-btn" onclick="selectTab(this)">Staff</button>
                    </div>
                </div>
              <div className="border-bottom"></div>
                <SearchBox />
                <table className="table my-3">
                    <thead>
                        <tr>
                            <th scope="col" width="25%">
                                Patient Id
                            </th>
                            <th scope="col" width="25%">
                                Name
                            </th>
                            <th scope="col" width="15%">
                                Username
                            </th>
                            <th scope="col">Mobile Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                <tbody>
                    <tr>
                        <td>1072</td>
                        <td>Aadish Mody</td>
                        <td>pat1072</td>
                        <td>9522545414</td>
                        <td className="action-btn">
                          <SwitchToggle 
                          defaultChecked={true}
                          size="large"
                        />
                        </td>
                    </tr>
                     <tr>
                        <td>1072</td>
                        <td>Aadish Mody</td>
                        <td>pat1072</td>
                        <td>9522545414</td>
                        <td className="action-btn">
                          <SwitchToggle 
                          defaultChecked={true}
                          size="large"
                        />
                        </td>
                    </tr>
                     <tr>
                        <td>1072</td>
                        <td>Aadish Mody</td>
                        <td>pat1072</td>
                        <td>9522545414</td>
                        <td className="action-btn">
                          <SwitchToggle 
                          defaultChecked={true}
                          size="large"
                        />
                        </td>
                    </tr>
                     <tr>
                        <td>1072</td>
                        <td>Aadish Mody</td>
                        <td>pat1072</td>
                        <td>9522545414</td>
                        <td className="action-btn">
                          <SwitchToggle 
                        defaultChecked={true}
                        size="large"
                      />
                        </td>
                    </tr>
                </tbody>
                </table>              
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default UserSetting;
