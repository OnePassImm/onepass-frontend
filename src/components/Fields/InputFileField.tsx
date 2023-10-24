import React, { Dispatch, useEffect, useRef } from "react";
import { formatBytes, totalFileSize } from "../../utils/helper";

type TInputFileField = {
	id: string;
	multiple: boolean;
	maxFile: number;
	accept: string;
	label: string;
	handleChangeValue: Dispatch<React.SetStateAction<FileList | undefined>>;
};

const InputFileField = (props: TInputFileField) => {
	const labelContentAttrName = "label-content-input-file-button";
	const defaultLabelContent = "Không có tệp nào được chọn";
	const ref_inputFileButton = useRef<HTMLLabelElement>(null);

	useEffect(() => {
		ref_inputFileButton.current?.setAttribute(labelContentAttrName, defaultLabelContent);
	}, []);

	const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const listFile = event.target.files;
		if (!listFile || listFile.length === 0) {
			ref_inputFileButton.current?.setAttribute(labelContentAttrName, defaultLabelContent);
			return;
		}
		const listFileSizeFormated = formatBytes(totalFileSize(listFile));
		if (listFile.length === 1) {
			ref_inputFileButton.current?.setAttribute(labelContentAttrName, `${listFile[0].name}, ${listFileSizeFormated}`);
		} else if (listFile.length > 1) {
			ref_inputFileButton.current?.setAttribute(labelContentAttrName, `${listFile.length} files, ${listFileSizeFormated}`);
		}
		props.handleChangeValue(listFile);
	};
	return (
		<div className="input-file-field-container flex flex-col w-fit">
			<label
				htmlFor={props.id}
				className="label w-fit font-medium text-strongPink text-base md:text-xl">
				{props.label}
			</label>
			<label
				htmlFor={props.id}
				className="input-file-button flex flex-row my-0.5 md:my-1 cursor-pointer after:text-base after:font-medium after:text-strongYellow after:mx-2"
				ref={ref_inputFileButton}>
				<div className="flex text-base items-center font-medium text-strongPink border border-strongPink rounded-2xl px-5 text-center pb-[0.125rem]">Chọn tệp</div>
			</label>
			<input
				id={props.id}
				type="file"
				accept={props.accept}
				name={props.label}
				onChange={handleOnChangeInput}
				className="hidden"
				multiple={props.multiple}
			/>
		</div>
	);
};

export default InputFileField;
