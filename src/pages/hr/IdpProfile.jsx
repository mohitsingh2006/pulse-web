
import Layout from "../../_layout";
import { MdViewCompact } from "react-icons/md";
import { FaRegFileLines } from "react-icons/fa6";
import IpdOverview from "../../components/idp/IpdOverview";
import IpdNurseNote from "../../components/idp/IpdNurseNote";
import IpdMedication from "../../components/idp/IpdMedication";
import IpdPrescription from "../../components/idp/IpdPrescription";
import { FaKitMedical } from "react-icons/fa6";
import { FaFilePrescription } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa";
import { HiScissors } from "react-icons/hi2";
import { FaHandHoldingDollar } from "react-icons/fa6";
import IdpLiveConsultation from "../../components/idp/IdpLiveConsultation";
import { RiLiveFill } from "react-icons/ri";
import IdpPayment from "../../components/idp/IdpPayment";
import IdpCharge from "../../components/idp/IdpCharge";
import IdpOperations from "../../components/idp/IdpOperations";
import IdpLabInvestigation from "../../components/idp/IdpLabInvestigation";
import IdpConsultantRegister from "../../components/idp/IdpConsultantRegister";
import { FaBedPulse } from "react-icons/fa6";
import IpdBedHistory from "../../components/idp/IpdBedHistory";
import IpdTimeline from "../../components/idp/IpdTimeline";
import { RiHourglassFill } from "react-icons/ri";
import TreatmentHistory from "../../components/idp/TreatmentHistory";
import IpdVital from "../../components/idp/IpdVital";
import { FaHeartbeat } from "react-icons/fa";
import { FaDiagnoses } from "react-icons/fa";
import { LiaDonateSolid } from "react-icons/lia";
const IdpProfile = () => {
	const ipdTabs = [
		{ 
			id: 1, 
			label: "Overview", 
			icon: <MdViewCompact size={22} className="me-1" />, 
			component: <IpdOverview /> 
		},
		{ 
			id: 2, 
			label: "Nurse Notes", 
			icon:<FaRegFileLines 
			size={20} 
			className="me-1"/> , 
			component: <IpdNurseNote /> 
		},
		{ 	id: 3,
			label: "Medication",
			icon: <FaKitMedical 
			size={22} 
			className="me-1"/>,
			component: <IpdMedication /> 
		},
		{ 
			id: 4, 
			label: "Prescription",
			icon: <FaFilePrescription 
			size={22}
			className="me-1"
			/>,
			component:<IpdPrescription /> 
		},
		{ 
			id: 5,
			label: "Consultant Register",
			icon: <FaRegCalendarCheck 
			size={22}
			className="me-1"
			/>, 
			component:<IdpConsultantRegister /> },
		{ 
			id: 6,
			label: "Lab Investigation",
			icon: <FaDiagnoses 
			className="me-1"
			size={22}
			/>, 
			component:<IdpLabInvestigation /> },
		{ 
			id: 7,
			label: "Operations",
			icon: <HiScissors 
			size={22}
			className="me-1"
			/>,
			component:<IdpOperations />
		},
		{ 
			id: 8,
			label: "Charges",
			icon: <LiaDonateSolid 
			className="me-1"
			size={22}
			/>,
			component:<IdpCharge />
		},
		{ 
			id: 9,
			label: "Payments",
			icon: <FaHandHoldingDollar 
			className="me-1"
			size={22}
			/>,
			component:<IdpPayment />
		},
		{ 
			id: 10, 
			label: "Live Consultation",
			icon: <RiLiveFill 
			size={22}
			className="me-1"
			/>,
			component:<IdpLiveConsultation />
		},
		{ 
			id: 11,
			label: "Bed History",
			icon: <FaBedPulse 
			size={22}
			className="me-1"
			/>,
			component:<IpdBedHistory />
		},
		{ 
			id: 12, 
			label: "Timeline",
			icon: <FaRegCalendarCheck 
			size={22}
			className="me-1"
			/>,
			component:<IpdTimeline />
		},
		{ 
			id: 13,
			label: "Treatment History",
			icon: <RiHourglassFill 
			size={22}
			className="me-1"
			/>,
			component:<TreatmentHistory />
		},
		{ 
			id: 14,
			label: " Vitals",
			icon: <FaHeartbeat 
			className="me-1"
			size={22}
			/> ,
			component:<IpdVital />
		},
	];

	return (
		<Layout>
			<main className=" px-4 pb-5 ipd-main-page">
				<div className="row mt-5 ">
					<div className="col-12">
						<div className="overflow-hidden">
							<div className="bg-white nav-pills-outer mb-4 border-bottom d-flex">
								<ul className="nav nav-pills" id="pills-tab" role="tablist">
									{ipdTabs.map((item, index) => (
										<li key={item.id} className="nav-item" role="presentation">
											<button
												className={`nav-link shadow-none ${index === 0 ? "active" : ""}`}
												id={`pills-${item.id}-tab`}
												data-bs-toggle="pill"
												data-bs-target={`#pills-${item.id}`}
												type="button"
												role="tab"
												aria-controls={`pills-${item.id}`}
												aria-selected={item.isActive}
											>
												{item.icon}
												{item.label}
											</button>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					<div className="col-12">
						<div className="bg-white graph-card p-4">
							<div className="tab-content" id="pills-tabContent">
								{ipdTabs.map((item, index) => (
									<div
										className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
										id={`pills-${item.id}`}
										role="tabpanel"
										aria-labelledby={`pills-${item.id}-tab`}
									>
										
										{item.component}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default IdpProfile;
