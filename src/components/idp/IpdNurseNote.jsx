import { Link, useNavigate } from "react-router-dom";
import React from "react";;
const IpdNurseNote = () => {
    return (
        <div className="ipd-nurse-note">
           <div className="card mb-4 border-0 shadow-sm">
            <div className="card-body">
              <div className="border-bottom">
                <h6 className="fw-bold mb-3">NURSE NOTES</h6>
              </div>
              <span className="badge bg-secondary my-3">10/10/2025 12:36 PM</span>
              <div className="position-relative ps-4 border-start border-4 border-secondary">
                <div className="nurse-note">
                </div>
                <div className="card bg-light border-0 mb-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div><h6 className="mb-2">April Clinton (9020)</h6></div>
                      <div>
                       
                      </div>
                    </div>                  
                    <p className="mb-1">
                      <strong>Note</strong>
                    </p>
                    <p className="mb-2">Take medicine after meal everyday</p>
                    <p className="mb-1">
                      <strong>Comment</strong>
                    </p>
                    <p className="mb-0">Take medicine after meal everyday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default IpdNurseNote;