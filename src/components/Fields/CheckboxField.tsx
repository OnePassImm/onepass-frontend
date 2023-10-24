import React, { Dispatch } from "react";

type TCheckboxField = {
	id: string;
	label: string;
	handleChangeValue: Dispatch<React.SetStateAction<any | undefined>>;
};

const CheckboxField = (props: TCheckboxField) => {
	return (
		<div className="checkbox-field-container flex items-center">
			<input
				type="checkbox"
				id={props.id}
				name={props.label}
				onChange={(event) => props.handleChangeValue(event.target.checked)}
				className="w-4 h-4"
			/>
			<label
				htmlFor={props.id}
				className="label font-medium text-strongBlue text-base md:text-xl mx-1 md:mx-2 mb-0.5 md:mb-1 whitespace-nowrap">
				{props.label}
			</label>
		</div>
	);
};

export default CheckboxField;
