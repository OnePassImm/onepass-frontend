import React, { useState } from "react";
import CircleButton from "../Buttons/CircleButton";
import LongButton from "../Buttons/LongButton";
import { Direction } from "../../utils/types";
import { TNews } from "./types";

type TNewsGroup = {
	news: TNews[];
};

const NewsGroup = ({ news }: TNewsGroup) => {
	const [titleHoverState, setTitleHoverState] = useState<boolean>(false);
	const [curIdx, setCurIdx] = useState(0);

	const onClickPrev = () => {
		if (curIdx > 0) {
			setCurIdx((curIdx) => curIdx - 1);
			if (curIdx < news.length - 1) {
				document.getElementById("news-slider")!.scrollLeft -= 320;
			}
		}
	};

	const onClickNext = () => {
		if (curIdx < news.length - 1) {
			setCurIdx((curIdx) => curIdx + 1);
			if (curIdx >= 1) {
				document.getElementById("news-slider")!.scrollLeft += 320;
			}
		}
	};

	const handleOpenPost = () => {
		window.open(`${window.location.origin}/posts/${news[curIdx].id}`);
	};

	const handleOnClickCard = (idx: number) => {
		if (curIdx === idx) {
			handleOpenPost();
			return;
		}
		setCurIdx(idx);
	};

	return (
		<section id="news">
			<div className="news-container my-17.5 md:my-25">
				<div className="title-container flex items-center justify-center w-25 md:w-40 h-6 md:h-10 border rounded-full border-black my-8 mx-15 md:mx-8">
					<span className="title font-bold text-xs md:text-2xl mb-0.5 md:mb-1">Tin tức</span>
				</div>
				<div className="flex flex-row justify-between mx-15 md:mx-8">
					<div
						className="title font-bold text-2xl md:text-4xl uppercase cursor-pointer"
						onClick={handleOpenPost}
						onMouseEnter={() => setTitleHoverState(true)}
						onMouseLeave={() => setTitleHoverState(false)}>
						{news[curIdx]?.title}
						<div className="inline-block mb-1 md:mb-2 ml-1 md:ml-2 align-middle">
							<CircleButton
								useExternal
								hoverState={titleHoverState}
							/>
						</div>
					</div>
					<div className="above-navigator hidden md:flex flex-row justify-between">
						<div className="long-button-left-container mx-1 md:mx-2">
							<LongButton
								direction={Direction.Left}
								handleOnClick={onClickPrev}
							/>
						</div>
						<div className="long-button-right-container mx-1 md:mx-2">
							<LongButton
								direction={Direction.Right}
								handleOnClick={onClickNext}
							/>
						</div>
					</div>
				</div>
				<div
					id="news-slider"
					className="w-full mt-8 md:mt-12 mb-6 md:mb-16 items-center flex flex-row overflow-x-scroll scrollbar-hide select-none">
					{news.map((item, idx) => (
						<div
							key={item.id}
							className={`image-container ${idx === curIdx ? "selected-card" : "normal-card"} aspect-square mx-2 last:mr-0 cursor-pointer`}>
							<img
								className="h-full w-full object-cover"
								src={item.imgUrl}
								onClick={() => handleOnClickCard(idx)}
								onMouseEnter={() => {
									if (idx === curIdx) setTitleHoverState(true);
								}}
								onMouseLeave={() => {
									if (idx === curIdx) setTitleHoverState(false);
								}}
							/>
						</div>
					))}
				</div>
				<div className="below-navigator-container flex md:hidden my-6 justify-center">
					<div className="below-navigator flex flex-row">
						<div className="long-button-left-container mx-1 md:mx-2">
							<LongButton
								direction={Direction.Left}
								handleOnClick={onClickPrev}
							/>
						</div>
						<div className="long-button-right-container mx-1 md:mx-2">
							<LongButton
								direction={Direction.Right}
								handleOnClick={onClickNext}
							/>
						</div>
					</div>
				</div>
				<div className="separate-line h-[1px] w-full bg-silver"></div>
			</div>
		</section>
	);
};

export default NewsGroup;
