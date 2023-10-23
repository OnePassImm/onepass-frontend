import Head from "next/head";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Navbar, Footer } from "../../components";
import { ParsedUrlQuery } from "querystring";
import ContentGenerator from "../../services/ContentGenerator";
import { TProgramInfo } from "../../components/ProgramGroups/types";
import { LIST_PROGRAM_INFO } from "../../components/ProgramGroups/setting";

type Params = ParsedUrlQuery & {
	id: TProgramInfo["id"];
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	return {
		paths: LIST_PROGRAM_INFO.map((item) => {
			return {
				params: {
					id: item.id,
				},
			};
		}),
		fallback: false,
	};
};

type TProgramInfoProps = {
	data: TProgramInfo;
};

export const getStaticProps: GetStaticProps<TProgramInfoProps, Params> = async (context) => {
	const { id } = context.params!;
	const data = LIST_PROGRAM_INFO.find((item) => item.id === id) as TProgramInfo;
	return {
		props: {
			data,
		},
	};
};

const ProgramPost: NextPage<TProgramInfoProps> = ({ data }) => {
	return (
		<>
			<Head>
				<title>{data.posterTitle}</title>
				<link
					rel="icon"
					type="image/svg+xml"
					sizes="any"
					href="/logo/logo_red.svg"
				/>
			</Head>
			<div className="w-full">
				<Navbar isDynamic={false} />
				<div className="post-container-wrap w-[80%] mx-auto mt-36 mb-6 md:mb-5">
					<div className="title-container text-center mb-6 md:mb-5">
						<span className="title text-[40px] md:text-[60px] lg:text-[80px] font-bold uppercase">{data.posterTitle}</span>
					</div>
				</div>
				<div className="image-container-wrap relative mb-10 md:mb-20 after:content-[''] after:absolute after:-z-10 after:w-full after:h-[100vh] after:bg-lightBlue after:bottom-1/2">
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

export default ProgramPost;
