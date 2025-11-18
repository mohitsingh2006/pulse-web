import { Link } from "react-router-dom";
import Layout from "../../_layout";
import { FaCheckDouble } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import FormError from "../../components/FormError";

const GeneralSetting = () => {

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        mode: "onChange",
    });

    const saveGeneralSetting = () => {

    }

    return (
        <div className="col-12 col-lg-10">
            <div className="bg-white graph-card p-3">
                <div className="border-bottom">
                    <h6>General Setting</h6>
                </div>
                <form className="form-outer py-3" method="post" onSubmit={handleSubmit(saveGeneralSetting)}>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <div>
                                <label className="form-label">
                                    Hospital Name<span>*</span>
                                </label>
                                <input
                                    type="text"
                                    className={`form-control  ${errors.hospitalName && "is-invalid"
                                        }`}
                                    placeholder="Smart Hospital & Research Center"
                                    id="hospitalName"
                                    name="hospitalName"
                                    {...register("hospitalName", {
                                        required: "Hospital name is required",
                                    })}
                                />
                                {errors.hospitalName && <FormError error={errors.hospitalName.message} />}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <label className="form-label">Hospital Code</label>
                                <input
                                    type="text"
                                    className={`form-control  ${errors.hospitalCode && "is-invalid"
                                        }`}
                                    placeholder="ACT-487438"
                                    id="hospitalCode"
                                    name="hospitalCode"
                                    {...register("hospitalCode", {
                                        required: false,
                                    })}
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
                                    className={`form-control  ${errors.address && "is-invalid"
                                        }`}
                                    placeholder="25 Kings Street, CA"
                                    id="address"
                                    name="address"
                                    {...register("address", {
                                        required: "Address is required",
                                    })}
                                />
                                {errors.address && <FormError error={errors.address.message} />}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <label className="form-label">
                                    Phone <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className={`form-control  ${errors.phone && "is-invalid"
                                        }`}
                                    placeholder="9999955555"
                                    id="phone"
                                    name="phone"
                                    {...register("phone", {
                                        required: "Phone is required",
                                    })}
                                />
                                {errors.phone && <FormError error={errors.phone.message} />}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <label className="form-label">
                                    Email <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="email"
                                    className={`form-control  ${errors.email && "is-invalid"
                                        }`}
                                    placeholder="smarthospitalrc@gmail.com"
                                    id="email"
                                    name="email"
                                    {...register("email", {
                                        required: "Email is required",
                                    })}
                                />
                                {errors.email && <FormError error={errors.email.message} />}
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
                                <button type="button" className="btn btn-primary btn-sm edit-btn">
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
                                <button type="button" class="btn btn-primary btn-sm edit-btn" s>
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
                                <select
                                    className={`form-select  ${errors.email && "is-invalid"
                                        }`}
                                    defaultValue=""
                                    id="language"
                                    name="language"
                                    {...register("language", {
                                        required: "Language is required",
                                    })}>
                                    <option value="">Select Language</option>
                                    <option value="English">English</option>
                                    <option value="Hindi">Hindi</option>
                                </select>
                                {errors.language && <FormError error={errors.language.message} />}
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
                                <select
                                    id="dateFormat"
                                    name="dateFormat"
                                    defaultValue=""
                                    className={`form-select  ${errors.dateFormat && "is-invalid"
                                        }`}
                                    {...register("dateFormat", {
                                        required: "Date format is required",
                                    })}
                                >
                                    <option value="">Select Date Format</option>
                                    <option value="mm/dd/yyyy">mm/dd/yyyy</option>
                                    <option value="dd/mm/yyyy">dd/mm/yyyy</option>
                                </select>
                                {errors.dateFormat && <FormError error={errors.dateFormat.message} />}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <label className="form-label">
                                    Time Zone <span className="text-danger">*</span>
                                </label>
                                <select
                                    className={`form-select  ${errors.timeZone && "is-invalid"
                                        }`}

                                    defaultValue=""
                                    name="timeZone"
                                    id="timeZone"
                                    {...register("timeZone", {
                                        required: "Time zone is required",
                                    })}>
                                    <option value="">Select Time Zone</option>
                                    <option value="Asia/Kolkata">(GMT+05:30) Asia, Kolkata</option>
                                    <option value="Europe/London">(GMT+00:00) London</option>
                                </select>
                                {errors.timeZone && <FormError error={errors.timeZone.message} />}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">
                                Time Format <span className="text-danger">*</span>
                            </label>
                            <select defaultValue={''}
                                className={`form-select  ${errors.timeFormat && "is-invalid"
                                    }`}
                                {...register("timeFormat", {
                                    required: "Time format is required",
                                })}
                            >
                                <option value="">Select Time Format</option>
                                <option>12 Hour</option>
                                <option>24 Hour</option>
                            </select>
                            {errors.timeFormat && <FormError error={errors.timeFormat.message} />}
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
                            <select defaultValue=""
                                name=""
                                className={`form-select  ${errors.currency && "is-invalid"
                                    }`}
                                {...register("currency", {
                                    required: "Currency is required",
                                })}>

                                <option value="">Select Currency</option>
                                <option value="NGN">NGN</option>
                                <option value="INR">INR</option>
                                <option value="USD">USD</option>
                            </select>

                            {errors.currency && <FormError error={errors.currency.message} />}

                        </div>
                        <div className="col-md-6">
                            <div>
                                <label className="form-label">
                                    Currency Symbol <span className="text-danger">*</span>
                                </label>
                                <input type="text"
                                    className={`form-control  ${errors.creditLimit && "is-invalid"
                                        }`}
                                    {...register("currencySymbol", {
                                        required: "Currency symbol is required",
                                    })}
                                />

                                {errors.currencySymbol && <FormError error={errors.currencySymbol.message} />}
                            </div>
                        </div>
                    </div>
                    <div classN="row mb-4">
                        <div className="col-md-6">
                            <div>
                                <label className="form-label">
                                    Credit Limit <span>*</span>
                                </label>
                                <input
                                    type="number"
                                    className={`form-control  ${errors.creditLimit && "is-invalid"
                                        }`}

                                    {...register("creditLimit", {
                                        required: "Credit limit is required",
                                    })}
                                />
                                {errors.creditLimit && <FormError error={errors.creditLimit.message} />}
                            </div>
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
                                {...register("mobileAppUrl")}
                            />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <div>
                                <label className="form-label">Primary Color Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("mobilePrimaryColor")}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <label className="form-label">Secondary Color Code</label>
                                <input type="text" className="form-control" {...register("mobileSecondaryColor")} />
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
                        <div className="col-md-3">
                            <label className="form-label d-block">
                                Doctor Restriction Mode <span className="text-danger">*</span>
                            </label>

                            <div className="form-check form-check-inline">
                                <input
                                    type="radio"
                                    id="doctor-disabled"
                                    value="Disabled"
                                    className="form-check-input"
                                    {...register("doctorRestrictionMode", {
                                        required: "Please select doctor restriction mode",
                                    })}
                                />
                                <label htmlFor="doctor-disabled" className="form-check-label">
                                    Disabled
                                </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input
                                    type="radio"
                                    id="doctor-enabled"
                                    value="Enabled"
                                    className="form-check-input"
                                    {...register("doctorRestrictionMode", {
                                        required: "Please select doctor restriction mode",
                                    })}
                                />
                                <label htmlFor="doctor-enabled" className="form-check-label">
                                    Enabled
                                </label>
                            </div>

                            {errors.doctorRestrictionMode && (
                                <FormError error={errors.doctorRestrictionMode.message} />
                            )}
                        </div>

                        <div className="col-md-3">
                            <label className="form-label d-block">
                                Superadmin Visibility <span className="text-danger">*</span>
                            </label>

                            <div className="form-check form-check-inline">
                                <input
                                    type="radio"
                                    id="superadmin-disabled"
                                    value="Disabled"
                                    className="form-check-input"
                                    {...register("superadminVisibility", {
                                        required: "Select superadmin visibility",
                                    })}
                                />
                                <label htmlFor="superadmin-disabled" className="form-check-label">
                                    Disabled
                                </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input
                                    type="radio"
                                    id="superadmin-enabled"
                                    value="Enabled"
                                    className="form-check-input"
                                    {...register("superadminVisibility", {
                                        required: "Please select superadmin visibility",
                                    })}
                                />
                                <label htmlFor="superadmin-enabled" className="form-check-label">
                                    Enabled
                                </label>
                            </div>

                            {errors.superadminVisibility && (
                                <FormError error={errors.superadminVisibility.message} />
                            )}
                        </div>

                        <div className="col-md-3">
                            <label className="form-label d-block">
                                Scan Type <span className="text-danger">*</span>
                            </label>

                            <div className="form-check form-check-inline">
                                <input
                                    type="radio"
                                    id="barcode"
                                    value="Barcode"
                                    className="form-check-input"
                                    {...register("scanType", { required: "Please select a scan type" })}
                                />
                                <label htmlFor="barcode" className="form-check-label">
                                    Barcode
                                </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input
                                    type="radio"
                                    id="qrcode"
                                    value="QR"
                                    className="form-check-input"
                                    {...register("scanType", { required: "Please select a scan type" })}
                                />
                                <label htmlFor="qrcode" className="form-check-label">
                                    QR Code
                                </label>
                            </div>

                            {errors.scanType && <FormError error={errors.scanType.message} />}
                        </div>

                        <div className="col-md-3">
                            <label className="form-label d-block">
                                Patient Panel <span className="text-danger">*</span>
                            </label>

                            <div className="form-check form-check-inline">
                                <input
                                    type="radio"
                                    id="barcode"
                                    value="Disabled"
                                    className="form-check-input"
                                    {...register("patientPanelEnabled", { required: "Please select a patient panel" })}
                                />
                                <label htmlFor="barcode" className="form-check-label">
                                    Disabled
                                </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input
                                    type="radio"
                                    id="qrcode"
                                    value="Enabled"
                                    className="form-check-input"
                                    {...register("patientPanelEnabled", { required: "Please select a patient panel" })}
                                />
                                <label htmlFor="qrcode" className="form-check-label">
                                    Enabled
                                </label>
                            </div>

                            {errors.scanType && <FormError error={errors.scanType.message} />}
                        </div>

                    </div>
                    <div className="py-3">
                        <h5>File Upload Path</h5>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <div>
                                <label className="form-label" htmlFor="formFile">Base URL <span>*</span></label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.baseUrl ? "is-invalid" : ""}`}
                                    name="baseUrl"
                                    placeholder=""
                                    {...register("baseUrl", {
                                        required: "Base url is required",
                                    })}
                                />
                                {errors.baseUrl && <span className="text-danger">{errors.baseUrl.message}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="text-end mt-4">
                        <button type="submit" className="btn btn-primary">
                            <FaCheckDouble size={16} className="me-1" />
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default GeneralSetting;
