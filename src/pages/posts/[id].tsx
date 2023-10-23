import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getPostById} from "../../services/facebook-api";
import { formatDate, formatNewsTitle } from "../../utils/helper";
import { Navbar, Footer } from "../../components";

export type TPost = {
	id: string;
	createdTime: string;
	message: string;
	imgUrl: string;
};

export const getServerSideProps: GetServerSideProps<
	{
		post: TPost;
	},
	{
		id: string;
	}
> = async ({ params }) => {
	try {
		if (!params) {
			throw Error("Params not found!");
		}
		return {
			props: {
				post: await getPostById(params["id"]),
			},
		};
	} catch (err) {
		console.log("__posts/[id].tsx getStaticProps error: ", err);
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}
};

export default function FBPost({ post }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const title = formatNewsTitle(post.message);
	const paragraphs = post.message.split("\n");
	return (
		<>
			<Head>
				<title>{title}</title>
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
						<span className="title text-[40px] md:text-[60px] lg:text-[80px] font-bold uppercase">{title}</span>
					</div>
					<div className="date-container w-fit mx-auto">
						<span className="text-2xl font-bold uppercase text-center">{formatDate(new Date(post.createdTime))}</span>
					</div>
				</div>
				<div className="image-container-wrap relative mb-10 md:mb-20 after:content-[''] after:absolute after:-z-10 after:w-full after:h-[100vh] after:bg-lightBlue after:bottom-1/2">
					<div className="image-container w-[80%] mx-auto">
						<img
							className="w-full h-full max-h-[50vh] object-contain"
							src={post.imgUrl}
						/>
					</div>
				</div>
				<div className="post-container-wrap w-[80%] mx-auto">
					<div className="content-container w-[80%] mx-auto">
						{paragraphs.map((paragraph, index) => (
							<span
								key={index}
								className="flex text-xl font-medium mb-4">
								{paragraph}
							</span>
						))}
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
