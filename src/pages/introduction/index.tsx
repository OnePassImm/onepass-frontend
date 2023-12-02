import Head from "next/head";
import { GetStaticProps, NextPage } from "next";
import { Navbar, Footer } from "../../components";
import { TImage } from "../../utils/types";
import ContentGenerator, {
	TListContent, //
	bold,
	plain,
	listItem,
	space,
	link,
} from "../../services/ContentGenerator";

type TIntroProps = {
	data: TIntroContent;
};

export const getStaticProps: GetStaticProps<TIntroProps> = async () => {
	return {
		props: {
			data: IntroContent,
		},
	};
};

const Introduction: NextPage<TIntroProps> = ({ data }) => {
	return (
		<>
			<Head>
				<title>{data.headTitle}</title>
				<link
					rel="icon"
					type="image/svg+xml"
					sizes="any"
					href="/logo/favicon.svg"
				/>
			</Head>
			<div className="w-full">
				<Navbar />
				<div className="post-container-wrap w-[80%] mx-auto pt-36 pb-6 md:pb-5">
					<div className="title-container text-center mb-6 md:mb-5">
						<span className="title text-[40px] md:text-[60px] lg:text-[80px] font-bold uppercase">{data.title}</span>
					</div>
				</div>
				<div className="image-container-wrap relative mb-10 md:mb-20 after:content-[''] after:absolute after:-z-10 after:w-full after:h-[100vh] after:bg-lightYellow after:bottom-1/2">
					<div className="image-container w-[80%] mx-auto">
						<img
							className="w-full h-full max-h-[50vh] object-contain"
							src={data.posterImage.imgSrc}
							alt={data.posterImage.imgAlt}
						/>
					</div>
				</div>
				<div className="post-container-wrap w-[80%] mx-auto">
					<div className="content-container w-[80%] mx-auto">{ContentGenerator(data.listContent)}</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Introduction;

type TIntroContent = {
	headTitle: string;
	title: string;
	posterImage: TImage;
	listContent: TListContent;
};

const IntroContent: TIntroContent = {
	headTitle: "GIỚI THIỆU ONEPASS",
	title: "ONEPASS",
	posterImage: {
		imgSrc: "contents/introduction/introduction.jpg",
		imgAlt: "introduction.jpg",
	},
	listContent: [
		bold("Giới thiệu"),
		plain("OnePass Education & Immigration tự hào là công ty tư vấn Giáo dục và Định cư Canada, có đội ngũ nhân viên với hơn 8 năm kinh nghiệm xử lý hồ sơ và làm việc tại Canada với tỉ lệ thành công cao  cho hơn 3000 khách hàng."),
		space,
		plain("Đến với OnePass, chúng tôi tự hào là đơn vị hàng đầu về dịch vụ khách hàng và một mạng lưới quan hệ rộng lớn trong lĩnh vực Du lịch, Du học, và Di trú Canada."),
		space,
		bold("Vì sao chọn onepass làm đơn vị đồng hành?"),
		plain("Mạng lưới của OnePass không chỉ giới hạn ở các cơ sở giáo dục mà còn bao gồm các công ty địa phương, nhà máy, chủ doanh nghiệp, bất động sản và các lĩnh vực khác, làm tăng khả năng của chúng tôi trong việc hướng dẫn khách hàng về định hướng và con đường định cư tại Canada của họ."),
		bold("Dịch vụ"),
		listItem("Du Học"),
		listItem("Du Lịch"),
		listItem("Trại Hè"),
		listItem("Định cư tay nghề"),
		listItem("Định Cư Đầu Tư"),
		listItem("Việc Làm"),
		listItem("Gia Hạn Giấy Tờ"),
		listItem("Bất Động Sản"),
		listItem("Đăng Ký Bảo Hiểm"),

		bold("Đối Tác Đồng Hành Cùng OnePass Tại Canada"),
		plain("- OnePass kết nối với hơn 50 công ty tuyển dụng đa ngành nghề tại Canada như: xây dựng, thợ mộc, thợ điện, thợ sử xe ô tô, đầu bếp, nails, v.v..."),
		plain("- OnePass liên kết với các công ty bất động sản, thuế, bảo hiểm, mua bán xe, đội hỗ trợ đưa đón sân bay tại các tỉnh bang lớn như Ontario, British Columbia, Alberta, v.v..."),
		plain("- OnePass hợp tác với hơn 180 trường tại Canada. Các học sinh hoàn toàn có thể đăng ký các trường lớn nhỏ tại Canada thông qua OnePass"),
		space,
		space,
		bold("Thông tin chi tiết:"),
		link("/contents/introduction/Giới Thiệu.pdf", "Giới Thiệu.pdf"),
		link("/contents/introduction/Giới Thiệu.docx", "Giới Thiệu.docx"),
	],
};
