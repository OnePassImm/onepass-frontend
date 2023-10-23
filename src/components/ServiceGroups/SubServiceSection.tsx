import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap/dist/gsap";
import { Direction } from "../../utils/types";

type TSubServiceSection = {
	order?: number | string;
	title: string;
	subtitle: string;
	direction: Direction;
	firstImgSrc?: string;
	firstImgAlt?: string;
	secondImgSrc?: string;
	secondImgAlt?: string;
	handleOnClick?: () => void;
};

const SubServiceSection = (props: TSubServiceSection) => {
	const ref_maskContentFirst = useRef(null);
	const ref_maskContentSecond = useRef(null);
	const ref_maskContentThird = useRef(null);
	const ref_subTitle = useRef(null);
	const ref_title = useRef(null);
	const ref_order = useRef(null);

	const [tweenContent, setTweenContent] = useState(gsap.timeline());

	useEffect(() => {
		setTweenContent(
			gsap
				.timeline({
					paused: true,
				})
				.to(
					ref_order.current,
					{
						duration: 0.3,
						opacity: 0,
					},
					0,
				)
				.to(
					ref_subTitle.current,
					{
						duration: 0.5,
						opacity: 1,
					},
					0.4,
				)
				.to(
					ref_maskContentFirst.current,
					{
						duration: 0.75,
						ease: "power1.inOut",
						scaleY: 0,
					},
					0,
				)
				.to(
					ref_maskContentSecond.current,
					{
						duration: 0.75,
						ease: "power1.inOut",
						scaleY: 0,
					},
					0.1,
				)
				.to(
					ref_maskContentThird.current,
					{
						duration: 0.75,
						ease: "power1.inOut",
						scaleY: 0,
					},
					0.2,
				)
				.eventCallback("onStart", () => {
					gsap.to(ref_title.current, {
						duration: 0.9,
						ease: "power1.inOut",
						translateY: "-150%",
					});
					gsap.set([ref_maskContentFirst.current, ref_maskContentSecond.current, ref_maskContentThird.current], {
						transformOrigin: "top",
					});
					gsap.set(ref_subTitle.current, {
						opacity: 0,
					});
				})
				.eventCallback("onComplete", () => {
					gsap.set([ref_maskContentFirst.current, ref_maskContentSecond.current, ref_maskContentThird.current], {
						transformOrigin: "bottom",
					});
					gsap.set(ref_title.current, {
						translateY: "150%",
					});
				}),
		);
	}, []);

	let isMouseInside = false;

	const handleMouseEnter = () => {
		isMouseInside = true;
		if (tweenContent.isActive()) {
			if (tweenContent.reversed()) {
				tweenContent.then(() => {
					isMouseInside ? tweenContent.restart() : null;
				});
			}
			return;
		}
		tweenContent.restart();
	};

	const handleMouseLeave = () => {
		isMouseInside = false;
		if (tweenContent.isActive()) {
			if (!tweenContent.reversed()) {
				tweenContent.then(() => {
					!isMouseInside
						? (tweenContent.reverse(),
						  gsap.to(ref_title.current, {
								duration: 0.9,
								ease: "power1.inOut",
								translateY: "0",
						  }))
						: null;
				});
			}
			return;
		}
		tweenContent.reverse();
		gsap.to(ref_title.current, {
			duration: 0.9,
			ease: "power1.inOut",
			translateY: "0",
		});
	};

	const subTitleContainer = "sub-title-container flex flex-1 w-full justify-center items-center relative";
	const imageContainer = "image-container flex flex-[1.25_1_0%] relative overflow-hidden";
	const maskContent = "mask-content absolute w-full h-full z-[1] bg-white";
	const img = "object-cover w-full h-full z-0 will-change-transform";

	const subTitleComponent = () => (
		<div className={subTitleContainer}>
			<div
				className={maskContent}
				ref={ref_maskContentFirst}></div>
			<span
				className="sub-title font-bold text-xs md:text-lg lg:text-2xl uppercase z-0"
				ref={ref_subTitle}>
				{props.subtitle}
			</span>
		</div>
	);

	return (
		<div
			className="sub-service-section relative overflow-hidden cursor-pointer select-none"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={props.handleOnClick}>
			<div className="title-container flex flex-col justify-center mx-15 md:mx-8 absolute top-0 left-0 bottom-0 right-0 z-[2]">
				<div className="inner-title-container overflow-hidden">
					{props.order ? (
						<div
							className="order-container font-medium text-xs md:text-lg lg:text-2xl"
							ref={ref_order}>
							{props.order}
						</div>
					) : (
						<></>
					)}
					<div
						className="sub-inner-title-container"
						ref={ref_title}>
						<span className="title font-bold text-[40px] md:text-[60px] lg:text-[80px] uppercase">{props.title}</span>
					</div>
				</div>
			</div>
			<div className="content-container flex flex-row">
				{props.direction === Direction["Left"] ? subTitleComponent() : <></>}
				{props.firstImgSrc ? (
					<div className={`${imageContainer} first-image`}>
						<div
							className={maskContent}
							ref={ref_maskContentSecond}></div>
						<img
							src={props.firstImgSrc}
							alt={props.firstImgAlt}
							className={img}
						/>
					</div>
				) : (
					<></>
				)}
				{props.direction === Direction["Center"] ? subTitleComponent() : <></>}
				{props.secondImgSrc ? (
					<div className={`${imageContainer} second-image`}>
						<div
							className={maskContent}
							ref={ref_maskContentThird}></div>
						<img
							src={props.secondImgSrc}
							alt={props.secondImgAlt}
							className={img}
						/>
					</div>
				) : (
					<></>
				)}
				{props.direction === Direction["Right"] ? subTitleComponent() : <></>}
			</div>
		</div>
	);
};

export default SubServiceSection;
