import { Assert } from "../../utils/types";

type TLink = {
	id: string;
	title: string;
};

type TLinks = TLink[];

export const HEIGHT = 80;
export const LINKS = Assert<TLinks>([
	{
		id: "news",
		title: "Tin tức",
	},
	{
		id: "program-groups",
		title: "Chương trình",
	},
	{
		id: "service-groups",
		title: "Dịch vụ",
	},
	{
		id: "advisory",
		title: "Lộ trình tư vấn",
	},
	{
		id: "footer",
		title: "Văn phòng",
	},
	{
		id: "consultation",
		title: "Đăng ký",
	},
]);
