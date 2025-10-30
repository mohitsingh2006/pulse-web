import React, { useState } from "react";

const StaffAttendanceTable = () => {
  const staffList = [
    { id: 9001, name: "Super Admin", role: "Super Admin" },
    { id: 9002, name: "Sonia Bush", role: "Doctor" },
    { id: 9008, name: "Sansa Gomez", role: "Doctor" },
    { id: 9005, name: "Belina Turner", role: "Pathologist" },
    { id: 9006, name: "John Hook", role: "Radiologist" },
    { id: 9003, name: "Brad Frost", role: "Accountant" },
    { id: 9010, name: "Natasha Romanoff", role: "Nurse" },
    { id: 9009, name: "Amit Singh", role: "Doctor" },
    { id: 9011, name: "Reyan Jain", role: "Doctor" },
    { id: 9012, name: "Harry Grant", role: "Pharmacist" },
    { id: 9017, name: "Jason Abbot", role: "Admin" },
    { id: 9018, name: "Maria Ford", role: "Receptionist" },
    { id: 9020, name: "April Clinton", role: "Nurse" },
  ];

  const attendanceOptions = [
    { label: "P", title: "Present" },
    { label: "L", title: "Late" },
    { label: "A", title: "Absent" },
    { label: "F", title: "Half Day" },
    { label: "H", title: "Holiday" },
    { label: "SH", title: "Half Day 2nd Shift" },
  ];

  const [attendance, setAttendance] = useState({});

  const handleAttendanceChange = (id, field, value) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  const handleSetAll = (status) => {
    const updated = {};
    staffList.forEach((s) => {
      updated[s.id] = { ...attendance[s.id], status };
    });
    setAttendance(updated);
  };

  return (
    <div className="card  border-0 mt-4">
      <div className="card-body p-0">
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
          <h5 className="mb-0 fw-semibold text-dark">Staff Attendance</h5>
          <div className="d-flex align-items-center flex-wrap gap-2">
            <label className="fw-semibold text-secondary me-2">Set All As:</label>
            {attendanceOptions.map((opt) => (
              <button
                key={opt.label}
                className="btn btn-outline-secondary btn-sm"
                onClick={() => handleSetAll(opt.label)}
              >
                {opt.title} ({opt.label})
              </button>
            ))}
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered align-middle text-center table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Staff ID</th>
                <th>Name</th>
                <th>Role</th>
                {attendanceOptions.map((opt) => (
                  <th key={opt.label}>{opt.title}</th>
                ))}
                <th>Source</th>
                <th>Entry Time</th>
                <th>Exit Time</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {staffList.map((staff, index) => (
                <tr key={staff.id}>
                  <td>{index + 1}</td>
                  <td>{staff.id}</td>
                  <td>{staff.name}</td>
                  <td>{staff.role}</td>
                  {attendanceOptions.map((opt) => (
                    <td key={opt.label}>
                      <input
                        type="radio"
                        name={`attendance-${staff.id}`}
                        value={opt.label}
                        checked={attendance[staff.id]?.status === opt.label}
                        onChange={() =>
                          handleAttendanceChange(staff.id, "status", opt.label)
                        }
                        className="form-check-input"
                      />
                    </td>
                  ))}
                  <td>Manual</td>
                  <td>
                    <input
                      type="time"
                      className="form-control form-control-sm"
                      value={attendance[staff.id]?.entry || ""}
                      onChange={(e) =>
                        handleAttendanceChange(staff.id, "entry", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control form-control-sm"
                      value={attendance[staff.id]?.exit || ""}
                      onChange={(e) =>
                        handleAttendanceChange(staff.id, "exit", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Add note"
                      value={attendance[staff.id]?.note || ""}
                      onChange={(e) =>
                        handleAttendanceChange(staff.id, "note", e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-end mt-3">
          <button
            className="btn btn-primary px-4"
            onClick={() => console.log("Attendance Data:", attendance)}
          >
            Save Attendance
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffAttendanceTable;
