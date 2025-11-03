import { Link } from "react-router-dom";
import Layout from "../../_layout";
import { MdViewCompact } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
import { AiOutlineProfile } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";

const IdpProfile = () => {
  return (
    <Layout>
      <main className=" px-4 pb-5 appointment-page">
        <div className="row mt-5 ">
          <div className="col-12">
            <div className="bg-white nav-pills-outer mb-4 border-bottom d-flex justify-content-between">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link shadow-none active"
                    id="pills-overview-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-overview"
                    type="button"
                    role="tab"
                    aria-controls="pills-overview"
                    aria-selected="true"
                  >
                    <MdViewCompact size={22} />
                    Overview
                  </button>
                </li>
                <li className="nav-item " role="presentation">
                  <button
                    className="nav-link shadow-none"
                    id="pills-nurse_notes-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-nurse_notes"
                    type="button"
                    role="tab"
                    aria-controls="pills-nurse_notes"
                    aria-selected="false"
                  >
                    <FaNoteSticky size={20} />
                    Nurse Notes
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link shadow-none"
                    id="pills-medication-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-medication"
                    type="button"
                    role="tab"
                    aria-controls="pills-medication"
                    aria-selected="false"
                  >
                    Medication
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link shadow-none"
                    id="pills-medication-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-medication"
                    type="button"
                    role="tab"
                    aria-controls="pills-medication"
                    aria-selected="false"
                  >
                    Medication
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link shadow-none"
                    id="pills-medication-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-medication"
                    type="button"
                    role="tab"
                    aria-controls="pills-medication"
                    aria-selected="false"
                  >
                    Prescription
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link shadow-none"
                    id="pills-medication-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-medication"
                    type="button"
                    role="tab"
                    aria-controls="pills-medication"
                    aria-selected="false"
                  >
                    Consultant Register
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link shadow-none"
                    id="pills-medication-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-medication"
                    type="button"
                    role="tab"
                    aria-controls="pills-medication"
                    aria-selected="false"
                  >
                    Lab Investigation
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link shadow-none"
                    id="pills-medication-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-medication"
                    type="button"
                    role="tab"
                    aria-controls="pills-medication"
                    aria-selected="false"
                  >
                    Operations
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link shadow-none"
                    id="pills-medication-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-medication"
                    type="button"
                    role="tab"
                    aria-controls="pills-medication"
                    aria-selected="false"
                  >
                    Charges
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link shadow-none"
                    id="pills-medication-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-medication"
                    type="button"
                    role="tab"
                    aria-controls="pills-medication"
                    aria-selected="false"
                  >
                    Payments
                  </button>
                </li>
                {/* <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link shadow-none"
                                        id="pills-medication-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-medication"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-medication"
                                        aria-selected="false"
                                    >
                                    Live Consultation
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link shadow-none"
                                        id="pills-medication-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-medication"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-medication"
                                        aria-selected="false"
                                    >
                                    Live Consultation
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link shadow-none"
                                        id="pills-medication-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-medication"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-medication"
                                        aria-selected="false"
                                    >
                                    Timeline
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link shadow-none"
                                        id="pills-medication-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-medication"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-medication"
                                        aria-selected="false"
                                    >
                                    Treatment History
                                    </button>
                                </li>
                                 <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link shadow-none"
                                        id="pills-medication-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-medication"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-medication"
                                        aria-selected="false"
                                    >
                                    Vitals
                                    </button>
                                </li> */}
              </ul>
            </div>
          </div>

          <div className="col-12">
            <div className="bg-white graph-card p-4">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-overview"
                  role="tabpanel"
                  aria-labelledby="pills-overview-tab"
                >
                  <div className="row overview-tab">
                    <div className="col-12 col-lg-6">
                      <div className="tab-header d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                        <div>
                          <h4 className="fw-bold mb-0">Stuart Wood (580)</h4>
                        </div>
                        <div className="">
                          <Link to="#" className="me-2 cursor-pointer">
                            <AiOutlineProfile size={20} />
                          </Link>
                          <Link to="#" className="me-2 cursor-pointer">
                            <RiEdit2Fill size={20} />
                          </Link>
                          <Link
                            to="#"
                            className="cursor-pointer text-danger"
                          ></Link>
                          <Link><RiDeleteBin6Line /></Link>
                        </div>

                        <div className="btn-border"></div>
                      </div>
                      <div className="row">
                        <div className="col-md-2 text-center">
                          <div className="border rounded p-2 bg-light">
                            <img></img>
                          </div>
                        </div>

                        <div className="col-md-5">
                          <p>
                            <strong>Gender:</strong> Male
                          </p>
                          <p>
                            <strong>Age:</strong> 16 Year, 9 Month, 6 Day
                          </p>
                          <p>
                            <strong>Guardian Name:</strong> Martin Wood
                          </p>
                          <p>
                            <strong>Phone:</strong> 87969078
                          </p>
                          <p>
                            <strong>TPA:</strong> Health Life Insurance
                          </p>
                          <p>
                            <strong>TPA ID:</strong> 890678
                          </p>
                          <p>
                            <strong>TPA Validity:</strong> 10/19/2027
                          </p>
                           <div className="col-md-5">
                          <div className="mb-3">
                            <p className="fw-bold mb-1">Barcode</p>
                          </div>
                          <div>
                            <p className="fw-bold mb-1">QR Code</p>
                          </div>
                        </div>
                        </div>  
                      </div>
                    </div>

                    <div className="col-12 col-lg-6"></div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-nurse_notes"
                  role="tabpanel"
                  aria-labelledby="pills-nurse_notes-tab"
                >
                  <div className="mt-4">
                    <div>hello 2</div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-medication"
                  role="tabpanel"
                  aria-labelledby="pills-medication-tab"
                >
                  <div className="mt-4">
                    <div>3</div>
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

export default IdpProfile;
