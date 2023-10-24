import React, { Dispatch, HTMLInputTypeAttribute } from "react";

type TSelectField = {
	id: string;
	list: string[];
	label: string;
	placeHolder: string;
	isRequired?: boolean;
	errorMessage?: string;
	isDisplayErrorMessage?: boolean;
	handleChangeValue: Dispatch<React.SetStateAction<any | undefined>>;
};

const SelectField = (props: TSelectField) => {
	return (
		<div className="select-field-container w-full overflow-hidden">
			<label className="label w-fit font-medium text-strongBlue text-base md:text-xl after:content-[':'] after:ml-[0.125rem] after:mr-1">{props.label}</label>
			<select
				id={props.id}
				onChange={(event) => props.handleChangeValue(event.target.value)}>
				<option value={""}>{props.placeHolder}</option>
				{props.list.map((item, index) => (
					<option
						key={index}
						value={item}>
						{item}
					</option>
				))}
			</select>
			{props.isRequired && props.errorMessage && props.isDisplayErrorMessage ? (
				<div className="error-message-container flex items-center before:content-['\002A'] before:font-bold">
					<span className="font-bold md:">{props.errorMessage}</span>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default SelectField;
