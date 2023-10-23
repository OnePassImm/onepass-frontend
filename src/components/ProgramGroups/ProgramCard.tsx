import { useState } from "react";
import CircleButton from "../Buttons/CircleButton";
import { TProgramGeneralInfo } from "./types";
import { Direction } from "../../utils/types";
import Link from "next/link";

export type TProgramCard = TProgramGeneralInfo & {
	direction: Omit<Direction, Direction.Center>;
};

const ProgramCard = (props: TProgramCard) => {
	const [hoverState, setHoverState] = useState<boolean>(false);
	return (
		<Link
			href={`/program/${props.id}`}
			target="_blank"
			rel="noopener noreferrer">
			<div
				className="program-card-container relative w-full h-full cursor-pointer"
				onMouseEnter={() => setHoverState(true)}
				onMouseLeave={() => setHoverState(false)}>
				<img
					src={props.thumbnailImage.imgSrc}
					alt={props.thumbnailImage.imgAlt}
					className="object-cover h-full w-full"
				/>
				<div className={`${props.direction === Direction.Left ? "left-4 md:left-10" : "right-4 md:right-10"} title-container flex flex-row justify-center items-center absolute bottom-[2%] md:bottom-[5%]`}>
					<span className="title text-base md:text-4xl font-bold uppercase text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.9)] mx-1 mb-0.5 md:mb-1">{props.thumbnailTitle}</span>
					<div className="button-container mx-2">
						<CircleButton
							buttonColor="white"
							useExternal
							hoverState={hoverState}
						/>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProgramCard;
