import React, { useState } from "react";
import Link from "next/link";
import CircleButton from "../Buttons/CircleButton";
import { PROJECT_MIN_WIDTH_VW } from "./setting";
import { TSeasonalProjectGeneralInfo } from "./types";

const SeasonalProject = (props: TSeasonalProjectGeneralInfo) => {
	const [hoverState, setHoverState] = useState<boolean>(false);
	return (
		<div
			key={props.id}
			className="flex flex-col mr-4 last:mr-0 cursor-pointer"
			style={{
				minWidth: `${PROJECT_MIN_WIDTH_VW}vw`,
			}}
			onMouseEnter={() => setHoverState(true)}
			onMouseLeave={() => setHoverState(false)}>
			<Link
				href={`/seasonal/${props.id}`}
				target="_blank"
				rel="noopener noreferrer">
				<div className="flex flex-row items-end mb-2 md:mb-3">
					<span className="text-2xl md:text-4xl leading-none mr-2 overflow-hidden text-ellipsis whitespace-nowrap">{props.title}</span>
					<CircleButton
						useExternal
						hoverState={hoverState}
					/>
				</div>
				<div className="image-container flex">
					<img
						className="w-full aspect-[29/20] object-contain rounded-xl overflow-hidden"
						src={props.thumbnailImage.imgSrc}
						alt={props.thumbnailImage.imgAlt}
					/>
				</div>
			</Link>
		</div>
	);
};

export default SeasonalProject;
