import { useContext, useState } from "react";
import InputField from "../../Fields/InputField";
import TitleButton from "../../Buttons/TitleButton";
import DateField from "../../Fields/DateField";
import { TInternationalInsuranceForm } from "../types";
import { isEmailValid, isPhoneValid } from "../../../utils/validator";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { State } from "../../../utils/types";
import React from "react";
import FormContext from "./FormContext";
import { StateModal } from "../../Toolkits";
import toast from "react-hot-toast";

export const TITLE = "Bảo hiểm quốc tế";
const InternationalInsuranceForm = () => {
	const TIME_STATE_PRESENT = 3000;

	const [name, setName] = useState<TInternationalInsuranceForm["name"]>();
	const [isDisplayNameError, setIsDisplayNameError] = useState<boolean>(false);
	const [doB, setDoB] = useState<TInternationalInsuranceForm["doB"]>();
	const [insurancePeriod, setInsurancePeriod] = useState<TInternationalInsuranceForm["insurancePeriod"]>();
	const [phone, setPhone] = useState<TInternationalInsuranceForm["phone"]>();
	const [isDisplayPhoneError, setIsDisplayPhoneError] = useState<boolean>(false);
	const [address, setAddress] = useState<TInternationalInsuranceForm["address"]>();
	const [email, setEmail] = useState<TInternationalInsuranceForm["email"]>();
	const [isDisplayEmailError, setIsDisplayEmailError] = useState<boolean>(false);

	const formContext = useContext(FormContext);
	const [mirrorState, setMirrorState] = useState<State>(formContext!.state);

	const handleSubmit = () => {
		setIsDisplayNameError(false);
		setIsDisplayPhoneError(false);
		setIsDisplayEmailError(false);
		if (!name) {
			setIsDisplayNameError(true);
			return;
		}
		if (!email || !isEmailValid(email)) {
			setIsDisplayEmailError(true);
			return;
		}
		if (!phone || !isPhoneValid(phone)) {
			setIsDisplayPhoneError(true);
			return;
		}

		setMirrorState(State.LOADING);
		formContext?.setState(State.LOADING);

		toast.promise(
			axios
				.post("api/submitInternationalInsuranceForm", {
					id: uuidv4(),
					name: name,
					doB: doB,
					insurancePeriod: insurancePeriod,
					phone: phone,
					address: address,
					email: email,
				})
				.then((response) => {
					console.log("response");
					console.log(response);
					setMirrorState(State.SUCCESS);
					formContext?.setState(State.NONE);
					setTimeout(() => {
						setMirrorState(State.NONE);
					}, TIME_STATE_PRESENT);
				})
				.catch((error) => {
					console.trace(error);
					setMirrorState(State.FAILURE);
					formContext?.setState(State.NONE);
					setTimeout(() => {
						setMirrorState(State.NONE);
					}, TIME_STATE_PRESENT);
					throw new Error(`Error for toaster: ${error}`);
				}),
			{
				loading: `Yêu cầu ${TITLE} đang được xử lý...`,
				success: `Yêu cầu ${TITLE} thành công!`,
				error: `Yêu cầu ${TITLE} không thành công. Hãy thử lại.`,
			},
		);
	};

	const fieldContainer = "field-container my-5";

	return (
		<div id="international-insurance">
			<div className="international-insurance-form-container">
				{mirrorState !== State.NONE ? (
					<StateModal
						name={TITLE}
						state={mirrorState}
					/>
				) : (
					<div className="inner-international-insurance-form-container flex flex-row justify-center">
						<div className="image-container hidden md:block w-[40%] -mr-[3%] bg-no-repeat bg-center bg-cover rounded-[30px] overflow-hidden">
							<img
								src="/assets/serviceGroups/form/InternationalInsurance.jpg"
								alt="InternationalInsurance.jpg"
								className="h-full object-cover"
							/>
						</div>
						<div className="form-container w-full md:w-[60%] px-[5%] py-8 ml-0 md:-ml-[3%] bg-white rounded-[30px] min-w-min z-40">
							<div className="title-container">
								<span className="title font-extrabold text-4xl lg:text-5xl text-strongPink uppercase whitespace-nowrap">{TITLE}</span>
							</div>
							<div className="form-field-container">
								<div className="info-field-container">
									<div className={fieldContainer}>
										<InputField
											type="text"
											placeHolder="Họ & tên"
											errorMessage="Họ & tên chưa phù hợp"
											isRequired={true}
											isDisplayErrorMessage={isDisplayNameError}
											handleChangeValue={setName}
										/>
									</div>
									<div className={fieldContainer}>
										<DateField
											label="Ngày sinh"
											errorMessage="Ngày sinh chưa phù hợp"
											handleChangeValue={setDoB}
										/>
									</div>
									<div className={fieldContainer}>
										<DateField
											label="Thời gian bảo hiểm"
											errorMessage="Thời gian bảo hiểm chưa phù hợp"
											handleChangeValue={setInsurancePeriod}
										/>
									</div>
									<div className={fieldContainer}>
										<InputField
											type="tel"
											placeHolder="Số điện thoại"
											errorMessage="Số điện thoại chưa phù hợp"
											isRequired
											isDisplayErrorMessage={isDisplayPhoneError}
											handleChangeValue={setPhone}
										/>
									</div>
									<div className={fieldContainer}>
										<InputField
											type="text"
											placeHolder="Địa chỉ"
											errorMessage="Địa chỉ chưa phù hợp"
											handleChangeValue={setAddress}
										/>
									</div>
									<div className={fieldContainer}>
										<InputField
											type="email"
											placeHolder="Email"
											errorMessage="Email chưa phù hợp"
											isRequired={true}
											isDisplayErrorMessage={isDisplayEmailError}
											handleChangeValue={setEmail}
										/>
									</div>
								</div>
								<div className={`${fieldContainer} mt-11`}>
									<span className="description font-medium text-base md:text-xl text-strongPink">Sau khi đăng kí đầy đủ thông tin, CAN Immigration sẽ gửi email và cách thức thanh toán bảo hiểm.</span>
								</div>
								<div className={fieldContainer}>
									<TitleButton
										title="Gửi"
										buttonColor="strongPink"
										handleOnClick={handleSubmit}
									/>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
export default InternationalInsuranceForm;
