import { LIST_SASH_RIBBON_INFO } from "./setting";

const SashRibbon = () => {
	return (
		<section className="sash-ribbon w-full flex flex-row overflow-hidden">
			<PartRibbon />
			<PartRibbon />
		</section>
	);
};

const PartRibbon = () => {
	return (
		<div className="part-ribbon h-full flex shrink-0 relative">
			{LIST_SASH_RIBBON_INFO.map((item, index) => (
				<span
					key={index}
					className="h-full w-fit flex shrink-0 items-center mx-[2vw]">
					<img
						src={item.imgSrc}
						alt={item.imgAlt}
						className="h-1/2"
					/>
				</span>
			))}
		</div>
	);
};

export default SashRibbon;
