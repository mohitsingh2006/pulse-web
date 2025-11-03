
import Layout from "../../_layout";
import { MdViewCompact } from "react-icons/md";
import { FaRegFileLines } from "react-icons/fa6";

import IpdOverview from "../../components/idp/IpdOverview";
import IpdNurseNote from "../../components/idp/IpdNurseNote";
import IpdMedication from "../../components/idp/IpdMedication";

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
		{ id: 3, label: "Medication", icon: false,component: <IpdMedication /> },
		{ id: 4, label: "Prescription", icon: false },
		{ id: 5, label: "Consultant Register", icon: false },
		{ id: 6, label: "Lab Investigation", icon: false },
		{ id: 7, label: "Operations", icon: false },
		{ id: 8, label: "Charges", icon: false },
		{ id: 9, label: "Payments", icon: false },
		{ id: 10, label: "Live Consultation", icon: false },
		{ id: 11, label: "Bed History", icon: false },
		{ id: 12, label: "Timeline", icon: false },
		{ id: 13, label: "Treatment History", isActive: false },
		{ id: 14, label: " Vitals", icon: false },
		{ id: 15, label: "Overview", icon: false }
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
