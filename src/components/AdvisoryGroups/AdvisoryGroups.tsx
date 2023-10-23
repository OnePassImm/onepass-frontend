import React, { useState } from "react";
import AdvisoryGroup from "./AdvisoryGroup";
import AdvisoryContext, { TAdvisoryContext } from "./AdvisoryContext";
import { SETTLED_ADVISORY_STEPS, STUDY_ABOARD_ADVISORY_STEPS } from "./setting";

const AdvisoryGroups = () => {
	const [data, setData] = useState<TAdvisoryContext["data"]>(STUDY_ABOARD_ADVISORY_STEPS);
	const [color, setColor] = useState<TAdvisoryContext["color"]>("blue");

	return (
		<section id="advisory">
			<div className="advisory-container my-17.5 md:my-25">
				<div className="flex flex-row justify-between">
					<div className="title-container flex items-center justify-center w-28 md:w-44 h-6 md:h-10 ml-15 md:ml-8 border rounded-full border-black">
						<span className="font-bold text-xs md:text-2xl mb-0.5 md:mb-1">Lộ trình tư vấn</span>
					</div>
					<div className="flex flex-row border-b-gray-400 border-b">
						<span
							className={`text-base md:text-4xl font-bold px-4.5 md:px-10 py-2 md:py-4 rounded-t-xl md:rounded-t-3xl cursor-pointer hover:text-lightPink hover:bg-strongPink ${color === "pink" ? "text-lightPink bg-strongPink" : "text-strongPink bg-lightPink"} `}
							onClick={() => {
								setData(SETTLED_ADVISORY_STEPS);
								setColor("pink");
							}}>
							ĐỊNH CƯ
						</span>
						<span
							className={`text-base md:text-4xl font-bold px-4.5 md:px-10 py-2 md:py-4 rounded-t-xl md:rounded-t-3xl cursor-pointer hover:text-lightBlue hover:bg-strongBlue ${color === "blue" ? "text-lightBlue bg-strongBlue" : "text-strongBlue bg-lightBlue"}`}
							onClick={() => {
								setData(STUDY_ABOARD_ADVISORY_STEPS);
								setColor("blue");
							}}>
							DU HỌC
						</span>
					</div>
				</div>
				<AdvisoryContext.Provider
					value={{
						data,
						color,
					}}>
					<AdvisoryGroup />
				</AdvisoryContext.Provider>
			</div>
		</section>
	);
};

export default AdvisoryGroups;
