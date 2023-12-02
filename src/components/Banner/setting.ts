import { TImage } from "../../utils/types";

type TSliderContent = TImage & {
	href?: string;
};
const SliderContent: TSliderContent[] = [
	{
		imgSrc: "/assets/slide-banner/slide-1.jpg",
		imgAlt: "slide-1.jpg",
		href: "introduction",
	},
	{
		imgSrc: "/assets/slide-banner/slide-2.jpg",
		imgAlt: "slide-2.jpg",
	},
	{
		imgSrc: "/assets/slide-banner/slide-3.jpg",
		imgAlt: "slide-3.jpg",
		href: "program/job",
	},
	{
		imgSrc: "/assets/slide-banner/slide-4.jpg",
		imgAlt: "slide-4.jpg",
		href: "program/study-abroad",
	},
	{
		imgSrc: "/assets/slide-banner/slide-5.jpg",
		imgAlt: "slide-5.jpg",
	},
	{
		imgSrc: "/assets/slide-banner/slide-6.jpg",
		imgAlt: "slide-6.jpg",
	},
];

export { SliderContent };
