import React from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import { FaRegCalendarAlt } from "react-icons/fa";

const DatePickerComponent = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="mb-3">
      {label && (
        <label className="form-label fw-semibold text-dark">
          {label}
        </label>
      )}
      <div className="position-relative">
        {/* Calendar Icon */}
        <FaRegCalendarAlt
          className="position-absolute text-secondary"
          style={{
            left: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
        />

        {/* Date Input */}
        <Flatpickr
          className="form-control ps-5"
          value={value}
          onChange={onChange}
          options={{
            dateFormat: "Y-m-d",
          }}
          placeholder={placeholder || "Select date"}
        />
      </div>
    </div>
  );
};

export default DatePickerComponent;
