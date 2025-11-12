import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

const TimePeecker = () => {
const [time, setTime] = useState(null);

  return (
    <div className="mb-3">
      <Flatpickr
        value={time}
        onChange={([selectedTime]) => setTime(selectedTime)}
        options={{
          enableTime: true,
          noCalendar: true,
          dateFormat: "h:i K", // e.g. 02:15 PM
        }}
        className="form-control"
      />
    </div>
  );
}
export default TimePeecker;