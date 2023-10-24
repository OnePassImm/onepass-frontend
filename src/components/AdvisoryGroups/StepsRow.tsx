import React, { useContext } from "react";
import StepCard from "./StepCard";
import { TAdvisoryStep } from "./types";
import AdvisoryContext from "./AdvisoryContext";

export type TStepRows = {
	steps: TAdvisoryStep[];
	rowIdx: number;
};

const StepsRow = (props: TStepRows) => {
	const context = useContext(AdvisoryContext);

	return (
		<div className={`step-row-container grid grid-cols-6 md:grid-cols-8 gap-4 pb-6 md:pb-10 px-15 md:px-8 ${context?.color === "pink" ? "odd:bg-lightBlue" : "odd:bg-lightYellow"} even:bg-white border-silver border-b last:border-b-0 first:rounded-tl-[30px] last:rounded-bl-[30px] last:rounded-br-[30px]`}>
			<div className="hidden md:block col-span-1 text-2xl font-medium">*</div>
			<div className="col-span-6 grid grid-cols-6 gap-4">
				{props.steps.map((step, idx) => (
					<div
						key={idx}
						className="step-card-wrap w-full col-span-2 grid justify-self-center">
						<StepCard
							order={idx + 3 * props.rowIdx}
							title={step.title}
							imgSrc={step.imgSrc}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default StepsRow;
