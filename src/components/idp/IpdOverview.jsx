import React from 'react';
import { AiOutlineProfile } from 'react-icons/ai';
import { RiDeleteBin6Line, RiEdit2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const IpdOverview = () => {
    return (
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
    );
};

export default IpdOverview;