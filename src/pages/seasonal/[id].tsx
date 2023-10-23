import Head from "next/head";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Navbar, Footer } from "../../components";
import { LIST_INFO_PROJECT } from "../../components/SeasonalProjectGroups/setting";
import { ParsedUrlQuery } from "querystring";
import ContentGenerator from "../../services/ContentGenerator";
import { TSeasonalProject } from "../../components/SeasonalProjectGroups/types";

type Params = ParsedUrlQuery & {
	id: TSeasonalProject["id"];
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	return {
		paths: LIST_INFO_PROJECT.map((item) => {
			return {
				params: {
					id: item.id,
				},
			};
		}),
		fallback: false,
	};
};

type TSeasonalProjectProps = {
	data: TSeasonalProject;
};

export const getStaticProps: GetStaticProps<TSeasonalProjectProps, Params> = async (context) => {
	const { id } = context.params!;
	const data = LIST_INFO_PROJECT.find((item) => item.id === id) as TSeasonalProject;
	return {
		props: {
			data,
		},
	};
};

const SeasonalPost: NextPage<TSeasonalProjectProps> = ({ data }) => {
	return (
		<>
			<Head>
				<title>{data.title}</title>
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
						<span className="title text-[40px] md:text-[60px] lg:text-[80px] font-bold uppercase">{data.title}</span>
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

export default SeasonalPost;
