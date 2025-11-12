import { LuUser } from "react-icons/lu";

const TodayAppointment = ({appointments}) => {
  return (
    <table className="table ">
      <thead>
        <tr>
          <th scope="col">Patient Name</th>
          <th scope="col">Appointment No</th>
          <th scope="col">Appointment Date</th>
          <th scope="col">Gender</th>
          <th scope="col">Doctor</th>
          <th scope="col">Source</th>
          <th scope="col">Priority</th>
          <th scope="col">Live Consultant</th>
          <th scope="col">Fees ($)</th>
          <th scope="col">Discount (%)</th>
          <th scope="col">Paid ($)</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((data, i) => {
          return (
            <tr>
              <td>
                <div className="d-flex align-items-center gap-3">
                  <div className="user-image d-flex align-items-center justify-content-center">
                    <LuUser  />
                  </div>
                  <div className="user-info">
                    <h5>{data.Patient.name}</h5>
                    <span>{data.Patient.phone}</span>
                  </div>
                </div>
              </td>
              <td>APPNO7441 </td>
              <td>
                {data.appointment_date} {data.slot}
              </td>
              <td>Female</td>
              <td>Sansa Gomez (9008)</td>
              <td>Online</td>
              <td>{data.appointment_priority}</td>
              <td>{data.live_consultant ? "Yes" : "No"}</td>
              <td>{data.doctor_fees}</td>
              <td>{data.discount_percentage} (0.00 %) </td>
              <td>{data.payment_mode}</td>
              <td>{data.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};


export default TodayAppointment;