import React, { useContext } from "react";
import StepsRow from "./StepsRow";
import AdvisoryContext from "./AdvisoryContext";

const AdvisoryGroup = () => {
	const STEP_IN_ROW = 3;
	const context = useContext(AdvisoryContext);

	return (
		<div className="advisory-group-container">
			{[...Array(STEP_IN_ROW)].map((_, index) => (
				<StepsRow
					key={index}
					rowIdx={index}
					steps={context!.data.slice(index * STEP_IN_ROW, index * STEP_IN_ROW + STEP_IN_ROW)}
				/>
			))}
		</div>
	);
};

export default AdvisoryGroup;
