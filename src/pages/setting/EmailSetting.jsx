import { FaCheckDouble } from "react-icons/fa"
import Layout from "../../_layout"
import SettingSidebar from "../../components/setting/SettingSidebar"

const EmailSetting = () => {
    return(
         <Layout>
      <main className="setting-page">
        <div className="row p-3">
          <div className="col-12 col-lg-2">
            <SettingSidebar />
          </div>
          <div className="col-10 col-lg-10">
            <div className="bg-white graph-card p-3">
              <div className="">
                <h5>Email Setting</h5>
              </div>
              <div className="border-bottom"></div>
              <div className="col-6">
                <form action="" className="form-outer py-3">
                    <div className="mb-4"> 
                        <label className="form-label">Email Engine</label>
                        <select placeholder="SMTP" className="form-select" name="" id="">
                            <option value="SMTP">SMTP</option>
                            <option value="SendMail">SendMail</option>
                        </select>
                    </div>
                    <div className="mb-4"> 
                        <label className="form-label">SMTP Username <span>*</span></label>
                       <input type="email" className="form-control" placeholder="webfebtest@gmail.com" />
                    </div>
                     <div className="mb-4"> 
                        <label className="form-label">SMTP Password <span>*</span></label>
                       <input type="Password" className="form-control" />
                    </div>
                     <div className="mb-4"> 
                        <label className="form-label">SMTP Server <span>*</span></label>
                       <input type="text" className="form-control" placeholder="smtp.gmail.com" />
                    </div>
                     <div className="mb-4"> 
                        <label className="form-label">SMTP Port <span>*</span></label>
                       <input type="text" className="form-control" placeholder="587"/>
                    </div>
                    <div className="mb-4"> 
                        <label className="form-label">SMTP Security</label>
                        <select className="form-select" name="" id="">
                            <option value="OFF">OFF</option>
                            <option value="SSL">SSL</option>
                            <option value="TLS">TLS</option>
                        </select>
                    </div>
                    <div className="mb-4"> 
                        <label className="form-label">SMTP Auth</label>
                        <select className="form-select" name="" id="">
                            <option value="ON">ON</option>
                            <option value="OF">OF</option>
                        </select>
                    </div>
                </form>
              </div>
                <div className="text-end mt-4 save-btn">
                    <button className="btn btn-primary">
                        <FaCheckDouble size={20} className="pe-2" />
                    Save</button>
                </div>
            </div>
          </div>
        </div>
        
      </main>
    </Layout>
    )
}
export default EmailSetting