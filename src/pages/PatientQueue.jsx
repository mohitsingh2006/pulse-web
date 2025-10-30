import Layout from "../_layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
const PatientQueue = () => {
  const { control } = useForm({
    defaultValues: {
      date_of_birth: null,
    },
  });
  return (
    <Layout>
      <main className="px-4 pb-5 appointment-shedule">
        <div className="align-items-center form-outer  bg-white p-4">
          <div className="">
            <div className="shedule-header mb-4">
              <h4>Patient Queue</h4>
            </div>
            <div className="row">
              <div className="col-12 col-lg-3">
                <div className="mb-4">
                  <label className="form-label">
                    Doctor
                    <span> *</span>
                  </label>
                  <select
                    className="form-select bg-light"
                    aria-label="Default select example"
                    defaultValue=""
                    name="gender"
                    id="gender"
                  >
                    <option>Select</option>
                    <option value="1">Amit Singh (9009)</option>
                    <option value="2">Reyan Jain (9011)</option>
                    <option value="3">Sansa Gomez (9008)</option>
                    <option value="4">Sonia Bush (9002)</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="mb-4">
                  <label className="form-label">
                    Shift
                    <span> *</span>
                  </label>
                  <select
                    className="form-select bg-light"
                    aria-label="Default select example"
                    defaultValue=""
                    name="gender"
                    id="gender"
                  >
                    <option>Select</option>
                    <option value="Select"></option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="mb-4">
                  <label className="form-label">Date</label>
                  <div className="">
                    <Controller
                      control={control}
                      name="date"
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          selected={field.value}
                          onChange={(date) => field.onChange(date)}
                          dateFormat="date"
                          className="form-control bg-light"
                          placeholderText="Select Date"
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="mb-4">
                  <label className="form-label">
                    Slot
                    <span> *</span>
                  </label>
                  <select
                    className="form-select bg-light"
                    aria-label="Default select example"
                    defaultValue=""
                    name="gender"
                    id="gender"
                  >
                    <option>Select</option>
                    <option value="Select"></option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default PatientQueue;
