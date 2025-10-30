import React from "react";

const CreateMenuModal = ({ handleCloseModal }) => {
  console.log(handleCloseModal);
  return (
    <form className="form-outer">
      <div className="modal-content">
        <div className="modal-header py-2">
          <h5 className="modal-title">Add Details</h5>
          <div className="d-flex gap-3 align-items-center"></div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            onClick={handleCloseModal}
          ></button>
        </div>
        <div className="modal-body">
          <div class="row mb-3">
            <div class="col-md-6">
              <div>
                <strong>Name:</strong>{" "}
                <span class="text-secondary">Jason Abbot (9017)</span>
              </div>
            </div>
            <div class="col-md-6">
              <div>
                <strong>Leave Type:</strong>{" "}
                <span class="text-secondary">Maternity Leave</span>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <div>
                <strong>Submitted By:</strong>{" "}
                <span class="text-secondary">Jason Abbot (9017)</span>
              </div>
            </div>
            <div class="col-md-6">
              <div>
                <strong>Date:</strong>{" "}
                <span class="text-secondary">10/15/2025</span>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-12">
              <div>
                <strong>Leave:</strong>{" "}
                <span class="text-secondary">
                  10/16/2025 - 10/20/2025 (5 Days)
                </span>
              </div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-12">
              <strong>Status:</strong>
              <div class="ms-3 mt-2">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="status"
                    id="pending"
                  />
                  <label class="form-check-label" for="pending">
                    Pending
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="status"
                    id="approved"
                  />
                  <label class="form-check-label" for="approved">
                    Approved
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="status"
                    id="disapprove"
                    checked
                  />
                  <label class="form-check-label" for="disapprove">
                    Disapprove
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-12">
              <strong>Download:</strong>
              <a href="#" class="ms-2 text-decoration-none text-primary">
                Download File
              </a>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-12">
              <label class="form-label fw-bold">
                Note (Only display for admin)
              </label>
              <textarea
                class="form-control"
                rows="2"
                placeholder="Add note here..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateMenuModal;
