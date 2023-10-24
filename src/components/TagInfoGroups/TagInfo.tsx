export type supportBgColors = "blue" | "pink";

export type TTagInfo = {
	header: string;
	imgSrc: string;
	imgAlt: string;
	bgColor: supportBgColors;
	listContent: string[];
};

export type TBgStyles = {
	[key in supportBgColors]: string;
};

const bgStyles: TBgStyles = {
	blue: "bg-lightYellow blue-container",
	pink: "bg-lightBlue pink-container",
};

const TagInfo = (props: TTagInfo) => {
	return (
		<div className={`tag-info ${bgStyles[props.bgColor]} flex flex-col w-full justify-between items-center rounded-lg shadow-lg aspect-[7/10]`}>
			<h2 className={`title ${props.bgColor === "blue" ? "text-strongYellow" : "text-strongPink"} my-4.5 md:my-8 text-2xl md:text-3xl font-bold`}>{props.header}</h2>
			<div className="image-container w-3/4 h-3/6">
				<img
					src={props.imgSrc}
					alt={props.imgAlt}
					className="w-full h-full object-contain object-bottom"
				/>
			</div>
			<div className="paragraph-container text-lg md:text-xl leading-4.5 md:leading-5 font-medium text-center border border-t-silver border-transparent my-4.5 md:my-8 pt-2 w-[90%]">
				{props.listContent.map((item, idx) => {
					return <p key={idx}>{item}</p>;
				})}
			</div>
		</div>
	);
};

export default TagInfo;
