import { Link } from "react-router-dom";
import Layout from "../../_layout";
import GeneralSetting from "./GeneralSetting";
import AttendanceSetting from "./AttendanceSetting";
import SettingSidebar from "../../components/setting/SettingSidebar";

const Setting = () => {
  return (
    <Layout>
      <main className="setting-page">
        <div className="row p-3">
          <div className="col-12 col-lg-2">
            <SettingSidebar />
          </div>
            <GeneralSetting />          
        </div>
      </main>
    </Layout>
  );
};
export default Setting;
