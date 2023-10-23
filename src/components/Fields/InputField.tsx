import React, { Dispatch } from "react";

type TInputField = {
	placeHolder?: string;
	type: "text" | "email" | "tel";
	isRequired?: boolean;
	errorMessage?: string;
	isDisplayErrorMessage?: boolean;
	handleChangeValue: Dispatch<React.SetStateAction<any | undefined>>;
};

const InputField = (props: TInputField) => {
	return (
		<div className="input-field-container w-full">
			<input
				type={props.type}
				placeholder={props.placeHolder}
				onChange={(event) => props.handleChangeValue(event.target.value)}
				className="w-full border-b border-strongPink text-strongPink placeholder-strongPink text-base md:text-xl font-medium focus:outline-none focus:placeholder:text-transparent"
			/>
			{props.isRequired && props.errorMessage && props.isDisplayErrorMessage ? (
				<div className="error-message-container flex items-center before:content-['\002A'] before:font-bold">
					<span className="font-bold">{props.errorMessage}</span>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default InputField;
