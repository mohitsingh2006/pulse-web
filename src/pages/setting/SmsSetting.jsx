import { FaCheckDouble } from "react-icons/fa";
import SettingSidebar from "../../components/setting/SettingSidebar";
import Layout from "../../_layout";
import SmsGateway from "./sms-setting-tabs/SmsGateway";
import TwilioSMSGateway from "./sms-setting-tabs/TwilioSMSGateway";
import Msg from "./sms-setting-tabs/Msg";
import TextLocal from "./sms-setting-tabs/TextLocal";
import SmsCountry from "./sms-setting-tabs/SmsCountry";
import BulkSms from "./sms-setting-tabs/BulkSms";
import Mobireach from "./sms-setting-tabs/Mobireach";
import Nexmo from "./sms-setting-tabs/Nexmo";
import AfricasTalking from "./sms-setting-tabs/AfricasTalking";
import CustomSmsGateway from "./sms-setting-tabs/CustomSmsGateway";

const SmsSetting = () => {
  const smsSettingTabs = [
    {
      id: 1,
      label: "Clickatell SMS Gateway",
      icon: "",
      component: <SmsGateway />,
    },
    {
      id: 2,
      label: "Twilio SMS Gateway",
      icon: "",
      component: <TwilioSMSGateway />,
    },
    {
      id: 3,
      label: "MSG91",
      icon: "",
      component: <Msg />,
    },
    {
      id: 4,
      label: "Text Local",
      icon: "",
      component: <TextLocal />,
    },
    {
      id: 5,
      label: "SMS Country",
      icon: "",
      component: <SmsCountry />,
    },
    {
      id: 6,
      label: "Bulk SMS",
      icon: "",
      component:<BulkSms />,
    },
    {
      id: 7,
      label: "Mobireach",
      icon: "",
      component:<Mobireach />,
    },
    {
      id: 8,
      label: "Nexmo",
      icon: "",
      component:<Nexmo />,
    },
    {
      id: 9,
      label: "AfricasTalking",
      icon: "",
      component:<AfricasTalking />,
    },
    {
      id: 10,
      label: "Custom SMS Gateway",
      icon: "",
      component:<CustomSmsGateway />,
    },
  ];
  return (
    <Layout>
      <main className="setting-page">
        <div className="row p-3">
          <div className="col-12 col-lg-2">
            <SettingSidebar />
          </div>
          <div className="col-12 col-lg-10">
            <div className="bg-white graph-card p-3">
              <div className="">
                <h5>SMS Setting</h5>
              </div>
              <div className="overflow-hidden">
                <div className="bg-white nav-pills-outer mb-4 d-flex justify-content-between">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    {smsSettingTabs.map((item, index) => (
                      <li
                        key={item.id}
                        className="nav-item"
                        role="presentation"
                      >
                        <button
                          className={`nav-link shadow-none ${
                            index === 0 ? "active" : ""
                          }`}
                          id={`pills-${item.id}-tab`}
                          data-bs-toggle="pill"
                          data-bs-target={`#pills-${item.id}`}
                          type="button"
                          role="tab"
                          aria-controls={`pills-${item.id}`}
                          aria-selected={item.isActive}
                        >
                          {item.icon}
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="overflow-hidden">
                  <div className="justify-content-center align-items-center">
                    <div className="tab-content" id="pills-tabContent">
                      {smsSettingTabs.map((item, index) => (
                        <div
                          className={`tab-pane fade ${
                            index === 0 ? "show active" : ""
                          }`}
                          id={`pills-${item.id}`}
                          role="tabpanel"
                          aria-labelledby={`pills-${item.id}-tab`}
                        >
                          {item.component}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default SmsSetting;
