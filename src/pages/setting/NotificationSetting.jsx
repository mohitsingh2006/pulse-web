import Layout from "../../_layout";
import SettingSidebar from "../../components/setting/SettingSidebar";

const NotificationSetting = () => {
  return (
    <Layout>
      <main className="setting-page">
        <div className="row p-3">
          <div className="col-12 col-lg-2">
            <SettingSidebar />
          </div>
          <div className="col-10 col-lg-10">
            <div className="bg-white graph-card p-3">
              <div className="">
                <h5>Notification Setting</h5>
              </div>
              <div className="border-bottom"></div>
              <table className="table my-4">
                <thead>
                  <tr>
                     <th scope="col" width="25%">Event</th>
                    <th scope="col" width="25%">Option</th>
                    <th scope="col" width="15%">Template Id</th>
                    <th scope="col">Sample Message</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span class="event-name">OPD Patient Registration</span>
                    </td>
                    <td>
                      <div class="d-flex gap-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="email1"
                          />
                          <label class="form-check-label">Email</label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="sms1"
                          />
                          <label class="form-check-label">SMS</label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="app1"
                          />
                          <label class="form-check-label">Mobile App</label>
                        </div>
                      </div>
                    </td>
                    <td class="text-muted small">—</td>
                    <td class="text-muted">
                      Dear  your OPD Registration at Smart
                      Hospital is successful on date
                       with Patient Id and OPD No
                      
                    </td>
                  </tr>
                   <tr>
                    <td>
                      <span class="event-name">IPD Patient Registration</span>
                    </td>
                    <td>
                      <div class="d-flex gap-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="email1"
                          />
                          <label class="form-check-label">Email</label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="sms1"
                          />
                          <label class="form-check-label">SMS</label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="app1"
                          />
                          <label class="form-check-label">Mobile App</label>
                        </div>
                      </div>
                    </td>
                    <td class="text-muted small">—</td>
                    <td class="text-muted">
                      Dear your IPD Registration at Smart Hospital is successful with Patient Id and IPD No                       
                    </td>
                  </tr>
                   <tr>
                    <td>
                      <span class="event-name">IPD Patient Discharge</span>
                    </td>
                    <td>
                      <div class="d-flex gap-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="email1"
                          />
                          <label class="form-check-label">Email</label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="sms1"
                          />
                          <label class="form-check-label">SMS</label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="app1"
                          />
                          <label class="form-check-label">Mobile App</label>
                        </div>
                      </div>
                    </td>
                    <td class="text-muted small">—</td>
                    <td class="text-muted">
                      IPD Patient is now discharged from Smart Hospital Total bill amount is Total paid amount is Total balance bill amount is
                    </td>
                  </tr>
                   <tr>
                    <td>
                      <span class="event-name">Login Credential</span>
                    </td>
                    <td>
                      <div class="d-flex gap-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="email1"
                          />
                          <label class="form-check-label">Email</label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="sms1"
                          />
                          <label class="form-check-label">SMS</label>
                        </div>
                      </div>
                    </td>
                    <td class="text-muted small">—</td>
                    <td class="text-muted">
                     	Hello your Smart Hospital login details are Url: Username:  Password: 
                    </td>
                  </tr>
                   <tr>
                    <td>
                      <span class="event-name">Appointment Approved</span>
                    </td>
                    <td>
                      <div class="d-flex gap-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="email1"
                          />
                          <label class="form-check-label">Email</label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="sms1"
                          />
                          <label class="form-check-label">SMS</label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="app1"
                          />
                          <label class="form-check-label">Mobile App</label>
                        </div>
                      </div>
                    </td>
                    <td class="text-muted small">—</td>
                    <td class="text-muted">
                        Dear your appointment with is confirmed on with appointment no:
                    </td>
                  </tr>

                   <tr>
                    <td>
                      <span class="event-name">Live Meeting</span>
                    </td>
                    <td>
                      <div class="d-flex gap-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="email1"
                          />
                          <label class="form-check-label">Email</label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="sms1"
                          />
                          <label class="form-check-label">SMS</label>
                        </div>
                      </div>
                    </td>
                    <td class="text-muted small">—</td>
                    <td class="text-muted">
                    	Dear staff, your live meeting has been scheduled on for the duration of minute.
                    </td>
                  </tr>

                   <tr>
                    <td>
                      <span class="event-name">OPD Patient Discharged</span>
                    </td>
                    <td>
                      <div class="d-flex gap-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="email1"
                          />
                          <label class="form-check-label">Email</label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="sms1"
                          />
                          <label class="form-check-label">SMS</label>
                        </div>
                      </div>
                    </td>
                    <td class="text-muted small">—</td>
                    <td class="text-muted">
                    	OPD No is now discharged from Smart Hospital. Total bill amount was Total paid amount was Total balance amount is 
                    </td>
                  </tr>
                   <tr>
                    <td>
                      <span class="event-name">Forgot Password</span>
                    </td>
                    <td>
                      <div class="d-flex gap-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="email1"
                          />
                          <label class="form-check-label">Email</label>
                        </div>
                        
                      </div>
                    </td>
                    <td class="text-muted small">—</td>
                    <td class="text-muted">
                    	Dear, recently a request was submitted to reset password for your account with email: If you didn't make the request, just ignore this email, otherwise you can reset your password using this link
                        click here to reset your password
                        , if you're having trouble clicking the password reset link, copy and paste below URL into your web browser.
                        Regards,
                        Smart Hospital
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

export default NotificationSetting;
