import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaUserEdit,
  FaTrashAlt,
  FaIdBadge,
} from "react-icons/fa";

const StaffCard = ({ id, name, email, phone, role, image, onEdit, onDelete }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div
        className="card border-0 mb-4 staff-card"
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // uniform shadow all sides
          transition: "all 0.3s ease",
        }}
      >
        <div className="card-body d-flex align-items-center">
          {/* Profile Image */}
          <div
            className="flex-shrink-0 me-3"
            style={{ width: "90px", height: "90px" }}
          >
            <img
              src={image || "https://placehold.co/120x120?text=Staff"}
              alt={name}
              className="rounded-circle border"
              style={{
                width: "90px",
                height: "90px",
                objectFit: "cover",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </div>

          {/* Staff Details */}
          <div className="flex-grow-1 overflow-hidden">
            <h5 className="fw-semibold mb-1 text-dark text-truncate">{name}</h5>

            <p
              className="mb-1 text-muted small d-flex align-items-center text-truncate"
              style={{
                maxWidth: "170px", // prevent overflow
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              title={email}
            >
              <FaEnvelope className="me-2 text-secondary flex-shrink-0" /> {email}
            </p>

            <p className="mb-1 text-muted small d-flex align-items-center">
              <FaPhoneAlt className="me-2 text-secondary" /> {phone}
            </p>

            <div className="d-flex align-items-center gap-2 mt-1">
              <span className="badge bg-success  px-2 py-1">{role}</span>
              <small className="text-muted d-flex align-items-center">
                <FaIdBadge className="me-1" /> ID: {id}
              </small>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="d-flex flex-column align-items-end ms-2">
            <button
              className="btn btn-sm btn-light border mb-2 shadow-none text-primary"
              title="Edit"
              onClick={onEdit}
              style={{ borderRadius: "8px" }}
            >
              <FaUserEdit />
            </button>
            <button
              className="btn btn-sm btn-light border shadow-none text-danger"
              title="Delete"
              onClick={onDelete}
              style={{ borderRadius: "8px" }}
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>
      </div>

      {/* Hover Effects */}
      <style>
        {`
          .staff-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
          }

          .staff-card img {
            transition: transform 0.3s ease;
          }

          .staff-card img:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default StaffCard;
