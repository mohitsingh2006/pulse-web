import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./assets/global.css";
import "./assets/style.css";
import "./assets/media.css";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Patient from './pages/Patient';
import Appointment from './pages/Appointment';
import ProtectRoute from './ProtectRoute';
import AppointmentSchedule from './pages/AppointmentSchedule';
import PatientQueue from './pages/PatientQueue';
import OpdPatient from './pages/OpdPatient';
import AddPatient from './pages/AddPatient';
import Staff from './pages/hr/Staff';
import CreateStaff from './pages/hr/CreateStaff';
import StaffAttendance from './pages/hr/StaffAttendance';
import Payroll from './pages/hr/Payroll';
import LeaveRequest from './pages/hr/LeaveRequest';
import ApproveLeave from './pages/hr/ ApproveLeave';
import IpdPatient from './pages/hr/IpdPatient';
import DischargedPatient from './pages/hr/DischargedPatient';
import IdpProfile from './pages/hr/IdpProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navigate to="/login" replace />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <ProtectRoute>
              <Dashboard />
            </ProtectRoute>} 
            />
          <Route path="/patient" element={
            <ProtectRoute>
                <Patient />
            </ProtectRoute>
          } />

          
          <Route path="/appointment" element={
            <ProtectRoute>
                <Appointment />
            </ProtectRoute>
          } />
          
          <Route path="/appointment/schedule" element={
            
                <AppointmentSchedule />
            
          } />


           <Route path="/testing/max" element={
            
                <AppointmentSchedule />
            
          } />
          <Route path="/appointment/patientqueue" element={
            <PatientQueue />
          }
          />

          <Route path="/opdpatient" element={
            <OpdPatient />
          }
          />

         <Route path="/addpatient" element={
            <AddPatient />
          }
          />

          <Route path="/staff" element={
            <Staff />
          }
          />

          <Route path="/create-staff" element={
            <CreateStaff />
          }
          />
          
          <Route path="/staff-attendance" element={
            <StaffAttendance/>
          }
          />
          <Route path="/payroll" element={
            <Payroll/>
          }
          />

           <Route path="/leave-request" element={
            <LeaveRequest/>
          }
          />

          <Route path="/approveleave" element={
            <ApproveLeave />
          }
          />

          <Route path="/ipd-patient" element={
            <IpdPatient />
          }
          />
          <Route path="/discharged-patient" element={
            <DischargedPatient />
          }
          />

           <Route path="/idp-profile" element={
            <IdpProfile />
          }
          />
        </Routes>
        
    </BrowserRouter>
  );
}

export default App;
