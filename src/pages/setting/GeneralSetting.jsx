import { Link } from "react-router-dom";
import Layout from "../../_layout";
import { FaCheckDouble } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from "react";

const GeneralSetting = () => {
  return (
   <div className="col-12 col-lg-10">
      <div className="bg-white graph-card p-3">
        <div className="border-bottom">
            <h6>General Setting</h6>
        </div>
        <form className="form-outer py-3">
            <div className="row mb-4">
            <div className="col-md-6">
                <div>
                    <label className="form-label">
                        Hospital Name<span>*</span>
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Smart Hospital & Research Center"
                    id="hospital-name"
                    name="hospital-name"
                    />
                </div>
            </div>
            <div className="col-md-6">
                <div>
                    <label className="form-label"s>Hospital Code</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="ACT-487438"
                    id="hospital-code"
                    name="hospital-code"
                    />
                </div>
            </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-6">
                    <div>
                        <label className="form-label">
                            Address<span className="text-danger">*</span>
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="25 Kings Street, CA"
                        id="address"
                        name="address"
                        />
                    </div>
            </div>
            <div className="col-md-3">
                <div>
                    <label className="form-label">
                    Phone <span className="text-danger">*</span>
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="9999955555"
                    id="phone"
                    name="phone"
                    />
                </div>
            </div>
            <div className="col-md-3">
                <div>
                    <label className="form-label">
                Email <span className="text-danger">*</span>
                </label>
                <input
                type="email"
                className="form-control"
                placeholder="smarthospitalrc@gmail.com"
                id="email"
                name="email"
                />
                </div>
            </div>
            </div>
            <div className="row mb-4">
            <div className="col-md-6">
                <label className="form-label">Hospital Logo
                    <span>*</span>
                </label>
                <div className="d-flex justify-content-between">
                    <div className="overflow-hidden">
                        <img
                            src="https://placehold.co/60x40"
                            className="img-logo"
                            alt="logo"
                            height="auto"
                        />
                    </div>
                    <button type="button"className="btn btn-primary btn-sm edit-btn">
                        Edit Logo
                    </button>
                </div>
            </div>
            <div className="col-md-6">
                <label class="form-label">Hospital Small Logo <span>*</span></label>
                <div className="d-flex justify-content-between">
                    <div className="overflow-hidden">
                        <img
                            src="https://placehold.co/60x40"
                            class="img-logo"
                            alt="small logo"
                            height="auto"
                        />
                    </div>
                    <button type="button" class="btn btn-primary btn-sm edit-btn"s>
                    Edit Small Logo
                    </button>
                </div>
            </div>
            </div>
            <hr />
            <div className="py-2">
                <h6>Language</h6>
            </div>
            <div className="row mb-4">
            <div className="col-md-6">
                <div>
                    <label className="form-label">
                    Language <span className="text-danger">*</span>
                    </label>
                    <select className="form-select" id="language" name="language">
                    <option selected>English</option>
                    <option value="Hindi">Hindi</option>
                    </select>
                </div>
            </div>
            </div>
            <div className="py-2">
                <h6>Date Time</h6>
            </div>
            <div className="row mb-4">
            <div className="col-md-6">
                <div>
                    <label className="form-label">Date Format</label>
                    <select className="form-select">
                        <option>mm/dd/yyyy</option>
                        <option>dd/mm/yyyy</option>
                    </select>
                </div>
            </div>
            <div className="col-md-6">
                <div>
                    <label className="form-label">
                    Time Zone <span className="text-danger">*</span>
                    </label>
                    <select className="form-select">
                    <option>(GMT+05:30) Asia, Kolkata</option>
                    <option>(GMT+00:00) London</option>
                    </select>
                </div>
            </div>
            </div>
            <div className="py-2">
                <h6>Currency</h6>
            </div>
            <div className="row mb-3">
            <div className="col-md-6">
                <label className="form-label">
                Currency <span>*</span>
                </label>
                <select lect className="form-select">
                <option value="NGN">NGN</option>
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                </select>
            </div>
            <div className="col-md-6">
                <div>
                    <label className="form-label">
                      Currency Symbol <span className="text-danger">*</span>
                    </label>
                <input type="text" className="form-control" value="$" />
                </div>
            </div>
            </div>
            <div classN="row mb-4">
                <div className="col-lg-6">
                    <div>
                        <label className="form-label">
                            Credit Limit <span>*</span>
                        </label>
                        <input type="number" className="form-control" value="20000" />
                    </div>
                </div>
                <div className="col-md-6">
                    <label className="form-label">
                    Time Format <span className="text-danger">*</span>
                    </label>
                    <select className="form-select">
                    <option>12 Hour</option>
                    <option>24 Hour</option>
                    </select>
                </div>
            </div>

        <div className="py-3">
                <h6> Mobile App{" "}<span className="text-success">{/* (Android App Purchase Code already registered) */}</span></h6>
        </div>
            <div className="row mb-4">
            <div className="col-12">
                <label className="form-label">Mobile App API URL</label>
                <input
                type="text"
                className="form-control"
                value="https://demo.smart-hospital.in/api/"
                id=""
                name=""
                />
            </div>
            </div>
            <div className="row mb-4">
            <div className="col-md-6">
                <div>
                    <label className="form-label">Primary Color Code</label>
                    <input type="text" className="form-control" value="#424242" />
                </div>
            </div>
            <div className="col-md-6">
                <div>
                    <label className="form-label">Secondary Color Code</label>
                    <input type="text" className="form-control" value="#eeeeee" />
                </div>
            </div>
            </div>
            <div className="row mb-4">
            <div className="col-lg-6">
                <div className="d-flex justify-content-between">                        
                    <label className="form-label me-4">Mobile App Logo</label>
                    <img
                    src="https://placehold.co/100x80"
                    className="img-logo"
                    alt="App Logo"
                    />
                    <div>
                        <button type="button" className="btn btn-primary btn-sm edit-btn">
                        Edit App Logo
                        </button>
                    </div>
                </div>
            </div>
            </div>
            <div className="py-3">
                <h5>Miscellaneous</h5>
            </div>
            <div className="row mb-4">
                <div className="col-md-4">
                    <label className="form-label">Doctor Restriction Mode</label>
                    <div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="doctorMode" />
                            <label className="form-check-label">Disabled</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="doctorMode" />
                            <label className="form-check-label">Enabled</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <label className="form-label d-block">Superadmin Visibility</label>
                    <div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="superadmin" />
                        <label className="form-check-label">Disabled</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="superadmin" />
                        <label className="form-check-label">Enabled</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <label className="form-label d-block">Scan Type</label>
                    <div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="scanType" checked />
                        <label className="form-check-label">Barcode</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="scanType" />
                        <label className="form-check-label">QR Code</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-3">
                <h5>File Upload Path</h5>
            </div>
            <div className="row mb-4">
                <div className="col-md-6">
                    <div>
                        <label className="form-label"  htmlFor="formFile">Base URL <span>*</span></label>
                        <input 
                        type="" 
                        id=""
                        className="form-control"
                        value="" />
                    </div>
                </div>
            </div>
            <div className="text-end mt-4">
                <button className="btn btn-primary">
                  <FaCheckDouble size={16} className="me-1"/>
                  Save</button>
            </div>
        </form>
      </div>
  </div>
  );
};
export default GeneralSetting;
