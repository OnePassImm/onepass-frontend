// CONTENT TYPE DECLARE
import { DistributiveOmit, TImage, _Assert } from "../utils/types";

// Normal
export type TNormalContentNode = {
	type: "PLAIN" | "PLAIN_CLOSE" | "BOLD" | "LIST_ITEM";
	content: string;
};

// Special
export type TSpaceContentNode = {
	type: "SPACE";
};

export type TLinkContentNode = {
	type: "LINK";
	link: string;
	displayText: string;
};

export type TImageContentNode = {
	type: "IMAGE";
} & TImage;

// Utility
export type TContentNode = TNormalContentNode | TSpaceContentNode | TLinkContentNode | TImageContentNode;

export type TListContent = TContentNode[];

// FUNCTION DECLARE
// NORMAL
export const createNormalContentNode = (type: TNormalContentNode["type"], content: TNormalContentNode["content"]): TContentNode => {
	return {
		type,
		content,
	} as TNormalContentNode;
};

export const plain = (content: TNormalContentNode["content"]) => createNormalContentNode("PLAIN", content);

export const plainClose = (content: TNormalContentNode["content"]) => createNormalContentNode("PLAIN_CLOSE", content);

export const bold = (content: TNormalContentNode["content"]) => createNormalContentNode("BOLD", content);

export const listItem = (content: TNormalContentNode["content"]) => createNormalContentNode("LIST_ITEM", content);

// SPECIAL
export const createSpecialContentNode = <T extends Exclude<TContentNode, TNormalContentNode>>(type: T["type"], content: DistributiveOmit<T, "type">): TContentNode => {
	switch (type) {
		case "SPACE":
			return {
				type,
			} as TSpaceContentNode;
			break;
		case "LINK":
			_Assert<DistributiveOmit<TLinkContentNode, "type">>(content);
			return {
				type,
				...content,
			} as TLinkContentNode;
		case "IMAGE":
			_Assert<DistributiveOmit<TImageContentNode, "type">>(content);
			return {
				type,
				...content,
			} as TImageContentNode;
		default:
			return {
				type,
			} as TSpaceContentNode;
			break;
	}
};

export const space = createSpecialContentNode<TSpaceContentNode>("SPACE", {});

export const link = (link: TLinkContentNode["link"], displayText: TLinkContentNode["displayText"]) =>
	createSpecialContentNode<TLinkContentNode>("LINK", {
		link,
		displayText,
	});

export const image = (imgSrc: TImageContentNode["imgSrc"], imgAlt: TImageContentNode["imgAlt"]) =>
	createSpecialContentNode<TImageContentNode>("IMAGE", {
		imgSrc,
		imgAlt,
	});
/**
 * Support Tailwind import classes`
 * Tailwind only processes classes in static or was existed in the component' UI - render()
 * @returns JSX.Element
 */

export const ContentGeneratorToolkit = () => {
	return (
		<div className="content-generatetor-toolkit">
			<div className="flex relative"></div>
			<div className="text-xl text-strongBlue font-bold font-medium"></div>
			<div className="h-4"></div>
			<div className="my-2 my-4"></div>
		</div>
	);
};

const ContentGenerator = (listContent: TListContent) => {
	const generate = (contentNode: TContentNode, index: number) => {
		const typeNode = contentNode.type;
		switch (typeNode) {
			case "PLAIN":
				return (
					<span
						key={index}
						className="flex text-xl font-medium my-2">
						{contentNode.content}
					</span>
				);
			case "PLAIN_CLOSE":
				return (
					<span
						key={index}
						className="flex text-xl font-medium">
						{contentNode.content}
					</span>
				);
			case "BOLD":
				return (
					<span
						key={index}
						className="flex text-xl font-bold my-4">
						{contentNode.content}
					</span>
				);
			case "LIST_ITEM":
				return (
					<span
						key={index}
						className="flex relative text-xl font-medium">
						&#8226; {contentNode.content}
					</span>
				);
			case "SPACE":
				return (
					<span
						key={index}
						className="flex h-4"></span>
				);
			case "LINK":
				return (
					<a
						key={index}
						className="flex text-xl text-strongBlue my-2"
						href={contentNode.link}
						download>
						{contentNode.displayText}
					</a>
				);
			case "IMAGE":
				return (
					<img
						key={index}
						src={contentNode.imgSrc}
						alt={contentNode.imgAlt}
						className="mx-auto my-10"
					/>
				);
			default:
				return <></>;
		}
	};

	return <>{listContent.map((item, index) => generate(item, index))}</>;
};
export default ContentGenerator;
