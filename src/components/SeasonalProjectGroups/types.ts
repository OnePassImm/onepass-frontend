import { TListContent } from "../../services/ContentGenerator";
import { TImage } from "../../utils/types";

export type TSeasonalProject = {
	id: string;
	title: string;
	thumbnailImage: TImage;
	posterImage: TImage;
	listContent: TListContent;
};

export type TSeasonalProjectGeneralInfo = Omit<TSeasonalProject, "listContent" | "posterImage">;
