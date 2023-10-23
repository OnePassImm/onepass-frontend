import { TListContent } from "../../services/ContentGenerator";
import { TImage } from "../../utils/types";

export type TProgramInfo = {
	id:string;
	thumbnailTitle: string;
	thumbnailImage: TImage;
	posterTitle: string;
	posterImage: TImage;
	listContent: TListContent;
};

export type TProgramGeneralInfo = Omit<TProgramInfo, "listContent" | "posterImage" | "posterTitle">;