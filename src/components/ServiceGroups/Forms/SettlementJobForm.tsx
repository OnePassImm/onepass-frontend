import { useContext, useState } from "react";
import InputField from "../../Fields/InputField";
import SelectField from "../../Fields/SelectField";
import InputFileField from "../../Fields/InputFileField";
import TitleButton from "../../Buttons/TitleButton";
import { FILE_FORM_UPLOAD_NAME, LIST_JOB } from "../setting";
import { FILE_FORM_UPLOAD_TYPE, TSettlementJobForm } from "../types";
import { isEmailValid, isPhoneValid } from "../../../utils/validator";
import { v4 as uuidv4 } from "uuid";
import { renameFile } from "../../../utils/helper";
import axios from "axios";
import { State } from "../../../utils/types";
import FormContext from "./FormContext";
import { StateModal } from "../../Toolkits";
import toast from "react-hot-toast";

export const TITLE = "Đăng ký việc làm định cư";
const SettlementJobForm = () => {
	const TIME_STATE_PRESENT = 5000;

	const [name, setName] = useState<TSettlementJobForm["name"]>();
	const [isDisplayNameError, setIsDisplayNameError] = useState<boolean>(false);
	const [email, setEmail] = useState<TSettlementJobForm["email"]>();
	const [isDisplayEmailError, setIsDisplayEmailError] = useState<boolean>(false);
	const [phone, setPhone] = useState<TSettlementJobForm["phone"]>();
	const [isDisplayPhoneError, setIsDisplayPhoneError] = useState<boolean>(false);
	const [job, setJob] = useState<TSettlementJobForm["job"]>();
	const [isDisplayJobError, setIsDisplayJobError] = useState<boolean>(false);

	const [passportFileList, setPassportFileList] = useState<TSettlementJobForm["files"]>();
	const [ieltsFileList, setIeltsFileList] = useState<TSettlementJobForm["files"]>();
	const [transcriptsHighSchoolFileList, setTranscriptsHighSchoolFileList] = useState<TSettlementJobForm["files"]>();
	const [transcriptsCollegeFileList, setTranscriptsCollegeFileList] = useState<TSettlementJobForm["files"]>();
	const [fileListErrorMessage, setFileListErrorMessage] = useState<string>();
	const [isDisplayFileListError, setIsDisplayFileListError] = useState<boolean>(false);

	const listJobId = "job-registration-list";

	const formContext = useContext(FormContext);
	const [mirrorState, setMirrorState] = useState<State>(formContext!.state);

	const handleSubmit = () => {
		setIsDisplayNameError(false);
		setIsDisplayEmailError(false);
		setIsDisplayPhoneError(false);
		setIsDisplayJobError(false);
		setIsDisplayFileListError(false);
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
		if (!job) {
			setIsDisplayJobError(true);
			return;
		}

		const id = uuidv4();
		const formData = new FormData();
		formData.append("id", id);
		formData.append("name", name);
		formData.append("email", email);
		formData.append("phone", phone);
		formData.append("job", job);

		if (!!passportFileList) {
			Array.from(passportFileList).forEach((file) => {
				file = renameFile(file, `${id}_${FILE_FORM_UPLOAD_TYPE.PASSPORT}_${file.name}`);
				formData.append(FILE_FORM_UPLOAD_NAME, file);
			});
		}
		if (!!ieltsFileList) {
			Array.from(ieltsFileList).forEach((file) => {
				file = renameFile(file, `${id}_${FILE_FORM_UPLOAD_TYPE.IELTS}_${file.name}`);
				formData.append(FILE_FORM_UPLOAD_NAME, file);
			});
		}
		if (!!transcriptsHighSchoolFileList) {
			Array.from(transcriptsHighSchoolFileList).forEach((file) => {
				file = renameFile(file, `${id}_${FILE_FORM_UPLOAD_TYPE.TRANSCRIPT_HIGH_SCHOOL}_${file.name}`);
				formData.append(FILE_FORM_UPLOAD_NAME, file);
			});
		}
		if (!!transcriptsCollegeFileList) {
			Array.from(transcriptsCollegeFileList).forEach((file) => {
				file = renameFile(file, `${id}_${FILE_FORM_UPLOAD_TYPE.TRANSCRIPT_COLLEGE}_${file.name}`);
				formData.append(FILE_FORM_UPLOAD_NAME, file);
			});
		}

		setMirrorState(State.LOADING);
		formContext?.setState(State.LOADING);

		toast.promise(
			axios
				.post("api/submitSettlementJobForm", formData, {
					headers: {
						"content-type": "multipart/form-data",
					},
					onUploadProgress: (process) => {
						if (!process.total) {
							return;
						}
						console.log((process.loaded * 100) / process.total);
					},
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
		<div id="settlement-job">
			<div className="settlement-job-form-container">
				{mirrorState !== State.NONE ? (
					<StateModal
						name={TITLE}
						state={mirrorState}
					/>
				) : (
					<div className="inner-settlement-job-form-container flex flex-row justify-center">
						<div className="image-container hidden md:block w-[40%] -mr-[3%] bg-no-repeat bg-center bg-cover rounded-[30px] overflow-hidden">
							<img
								src="/assets/serviceGroups/form/SettlemenJob.jpg"
								alt="SettlemenJob.jpg"
								className="h-full object-cover"
							/>
						</div>
						<div className="form-container md:w-[60%] px-[5%] py-8 ml-0 md:-ml-[3%] bg-white rounded-[30px] min-w-min z-40">
							<div className="title-container">
								<span className="title font-extrabold text-4xl lg:text-5xl text-strongPink uppercase">{TITLE}</span>
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
										<InputField
											type="email"
											placeHolder="Email"
											errorMessage="Email chưa phù hợp"
											isRequired={true}
											isDisplayErrorMessage={isDisplayEmailError}
											handleChangeValue={setEmail}
										/>
									</div>
									<div className={fieldContainer}>
										<InputField
											type="tel"
											placeHolder="Số điện thoại"
											errorMessage="Số điện thoại chưa phù hợp"
											isRequired={true}
											isDisplayErrorMessage={isDisplayPhoneError}
											handleChangeValue={setPhone}
										/>
									</div>
									<div className={fieldContainer}>
										<SelectField
											id={listJobId}
											list={LIST_JOB}
											label="Danh sách công việc"
											placeHolder="--Chọn công việc--"
											errorMessage="Danh sách công việc chưa phù hợp"
											isRequired={true}
											isDisplayErrorMessage={isDisplayJobError}
											handleChangeValue={setJob}
										/>
									</div>
								</div>
								<div className={fieldContainer}>
									<div className="input-field-container grid grid-rows-2 grid-cols-2 gap-y-4">
										<InputFileField
											id="passport"
											multiple={true}
											maxFile={5}
											accept="application/msword, application/vnd.ms-powerpoint, application/pdf, image/*"
											label="Passport"
											handleChangeValue={setPassportFileList}
										/>
										<InputFileField
											id="ielts"
											multiple={true}
											maxFile={5}
											accept="application/msword, application/vnd.ms-powerpoint, application/pdf, image/*"
											label="IELTS"
											handleChangeValue={setIeltsFileList}
										/>
										<InputFileField
											id="transcriptsHighSchool"
											multiple={true}
											maxFile={5}
											accept="application/msword, application/vnd.ms-powerpoint, application/pdf, image/*"
											label="Học bạ và bằng tốt nghiệp"
											handleChangeValue={setTranscriptsHighSchoolFileList}
										/>
										<InputFileField
											id="transcriptsCollege"
											multiple={true}
											maxFile={5}
											accept="application/msword, application/vnd.ms-powerpoint, application/pdf, image/*"
											label="Học bạ và bằng tốt nghiệp Đại Học/Cao Đẳng"
											handleChangeValue={setTranscriptsCollegeFileList}
										/>
									</div>
									{isDisplayFileListError && fileListErrorMessage ? (
										<div className={`${fieldContainer} error-message-container before:content-['\\002A'] before:font-bold`}>
											<span className="font-bold">{fileListErrorMessage}</span>
										</div>
									) : (
										<></>
									)}
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
export default SettlementJobForm;
