import React, { Dispatch } from "react";

type TDateField = {
	label: string;
	isRequired?: boolean;
	errorMessage?: string;
	isDisplayErrorMessage?: boolean;
	handleChangeValue: Dispatch<React.SetStateAction<any | undefined>>;
};

const DateField = (props: TDateField) => {
	return (
		<div className="date-field-container w-full">
			<label className="label w-fit font-medium text-strongPink text-base md:text-xl after:content-[':'] after:ml-[0.125rem] after:mr-1">{props.label}</label>
			<input
				type="date"
				onChange={(event) => props.handleChangeValue(event.target.value)}
				className="border-b border-strongPink text-strongPink placeholder-strongPink text-base md:text-xl font-medium focus:outline-none focus:placeholder:text-transparent"
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

export default DateField;
