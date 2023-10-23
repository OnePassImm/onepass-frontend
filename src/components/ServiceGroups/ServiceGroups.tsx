import { useContext, useState } from "react";
import { Direction, State, TComponent } from "../../utils/types";
import SubServiceSection from "./SubServiceSection";
import ModalContext from "../Toolkits/Modal/ModalContext";
import SchoolRegistrationForm from "./Forms/SchoolRegistrationForm";
import SettlementJobForm from "./Forms/SettlementJobForm";
import InternationalInsuranceForm from "./Forms/InternationalInsuranceForm";
import FormContext from "./Forms/FormContext";

type TSubComponent = {
	SubServiceSection: typeof SubServiceSection;
};

const ServiceGroups: TComponent & TSubComponent = () => {
	const modalContext = useContext(ModalContext);

	const [stateProcessSchoolRegistration, setStateProcessSchoolRegistration] = useState<State>(State.NONE);
	const [stateProcessSettlementJob, setStateProcessSettlementJob] = useState<State>(State.NONE);
	const [stateProcessInternationalInsurance, setStateInternationalInsurance] = useState<State>(State.NONE);

	const handleSchoolRegistration = () => {
		modalContext?.setModalComponent(
			<FormContext.Provider
				value={{
					state: stateProcessSchoolRegistration,
					setState: setStateProcessSchoolRegistration,
				}}>
				<SchoolRegistrationForm />
			</FormContext.Provider>,
		);
		modalContext?.handleOpenModal(true);
	};

	const handleSettlementJob = () => {
		modalContext?.setModalComponent(
			<FormContext.Provider
				value={{
					state: stateProcessSettlementJob,
					setState: setStateProcessSettlementJob,
				}}>
				<SettlementJobForm />
			</FormContext.Provider>,
		);
		modalContext?.handleOpenModal(true);
	};
	const handleInternationalInsurance = () => {
		modalContext?.setModalComponent(
			<FormContext.Provider
				value={{
					state: stateProcessInternationalInsurance,
					setState: setStateInternationalInsurance,
				}}>
				<InternationalInsuranceForm />
			</FormContext.Provider>,
		);
		modalContext?.handleOpenModal(true);
	};

	const subSection = "sub-section border-b-2 border-solid border-silver";
	return (
		<section id="service-groups">
			<div className="service-groups-container my-17.5 md:my-25">
				<div className="sub-section title-section flex items-center justify-center w-25 md:w-40 h-6 md:h-10 border rounded-full border-black my-8 mx-15 md:mx-8">
					<span className="font-bold text-xs md:text-2xl mb-0.5 md:mb-1">Dịch vụ</span>
				</div>
				<div className="sub-section-container my-8">
					<div className={`${subSection} school-registration border-t-2`}>
						<SubServiceSection
							order="01"
							title="Đăng ký trường học"
							subtitle="Đăng ký"
							direction={Direction.Left}
							firstImgSrc="assets/serviceGroups/section/SchoolRegistration-1.jpg"
							firstImgAlt="SchoolRegistration-1.jpg"
							secondImgSrc="assets/serviceGroups/section/SchoolRegistration-2.jpg"
							secondImgAlt="SchoolRegistration-2.jpg"
							handleOnClick={handleSchoolRegistration}
						/>
					</div>
					<div className={`${subSection} settlement-job`}>
						<SubServiceSection
							order="02"
							title="Đăng ký việc làm định cư"
							subtitle="Đăng ký"
							direction={Direction.Center}
							firstImgSrc="assets/serviceGroups/section/SettlementJob-1.jpg"
							firstImgAlt="SettlementJob-1.jpg"
							secondImgSrc="assets/serviceGroups/section/SettlementJob-2.jpg"
							secondImgAlt="SettlementJob-2.jpg"
							handleOnClick={handleSettlementJob}
						/>
					</div>
					<div className={`${subSection} international-insurance`}>
						<SubServiceSection
							order="03"
							title="Bảo hiểm quốc tế"
							subtitle="Đăng ký"
							direction={Direction.Right}
							firstImgSrc="assets/serviceGroups/section/InternationalInsurance-1.jpg"
							firstImgAlt="InternationalInsurance-1.jpg"
							secondImgSrc="assets/serviceGroups/section/InternationalInsurance-2.jpg"
							secondImgAlt="InternationalInsurance-2.jpg"
							handleOnClick={handleInternationalInsurance}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

ServiceGroups.SubServiceSection = SubServiceSection;

export default ServiceGroups;
