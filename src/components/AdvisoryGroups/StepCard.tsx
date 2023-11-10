import React from "react";

export type TStepCard = {
	order: number;
	title: string;
	imgSrc: string;
};

const StepCard = (props: TStepCard) => {
	return (
		<div className="step-card-container grid grid-rows-2">
			<div className="title-container flex mx-4 items-center justify-center">
				<span className="order-container flex items-center justify-center pb-0.5 md:pb-1 min-h-[18px] md:min-h-[32px] min-w-[18px] md:min-w-[32px] text-xs md:text-xl font-medium rounded-full border-black border">{props.order + 1}</span>
				<span className="title font-medium text-xs md:text-xl text-center mx-3">{props.title}</span>
			</div>
			<div className="image-container h-20 md:h-24 mt-0 md:mt-5">
				<img
					className="h-full object-contain mx-auto fill-black"
					src={props.imgSrc}
				/>
			</div>
		</div>
	);
};

export default StepCard;
