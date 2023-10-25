import { useEffect, useRef, useState } from "react";
import ProgramCard, { TProgramCard } from "./ProgramCard";
import gsap from "gsap/dist/gsap";
import { Direction } from "../../utils/types";

type TProgramSubGroup = {
	direction: Omit<Direction, Direction.Center>;
	cardLeft: TProgramCard;
	cardRight: TProgramCard;
};

const ProgramSubGroup = (props: TProgramSubGroup) => {
	const WIDTH_BIG = "67%";
	const WIDTH_SMALL = "33%";

	const ref_cardLeft = useRef<HTMLDivElement>(null);
	const ref_cardRight = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let widthCardLeft = WIDTH_BIG;
		let widthCardRight = WIDTH_SMALL;

		if (props.direction === Direction.Right) {
			widthCardLeft = WIDTH_SMALL;
			widthCardRight = WIDTH_BIG;
		}

		const context = gsap.context(() => {
			gsap.set(ref_cardLeft.current, {
				width: widthCardLeft,
			});
			gsap.set(ref_cardRight.current, {
				width: widthCardRight,
			});
		});

		return () => context.revert();
	}, []);

	return (
		<div className="program-sub-group-container flex flex-row h-full justify-between">
			<div
				className="program-card-outer-container bg-red-300 mr-2"
				ref={ref_cardLeft}>
				<ProgramCard {...props.cardLeft} />
			</div>
			<div
				className="program-card-outer-container bg-blue-300 ml-2"
				ref={ref_cardRight}>
				<ProgramCard {...props.cardRight} />
			</div>
		</div>
	);
};

export default ProgramSubGroup;
