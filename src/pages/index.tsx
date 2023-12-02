import Head from "next/head";
import {
	Banner, //
	SashRibbon,
	Navbar,
	SeasonalProjectGroups,
	NewsGroup,
	ProgramGroups,
	ServiceGroups,
	Consultation,
	AdvisoryGroups,
	ApprovalCases,
	Footer,
} from "../components";
import { ModalContext, ModalPortal, Toaster } from "../components/Toolkits";
import { useEffect, useRef, useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getPageNews } from "../services/facebook-api";
import { TNews } from "../components/NewsGroup/types";
import { ContentGeneratorToolkit } from "../services/ContentGenerator";
import NavbarContext from "./context";

export const getServerSideProps: GetServerSideProps<{
	news: TNews[];
}> = async () => {
	try {
		return {
			props: {
				news: await getPageNews(),
			},
		};
	} catch (err) {
		console.log("__getStaticProps error: ", err);
	}
	return {
		props: {
			news: [],
		},
	};
};

export default function Home({ news }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const [modalComponent, setModalComponent] = useState<JSX.Element | null>(null);

	const [navbarHeight, setNavbarHeight] = useState<number>(0);
	const ref_filler = useRef<HTMLDivElement>(null);
	const updateFillerHeight = () => {
		if (!ref_filler || !ref_filler.current) {
			return;
		}
		ref_filler.current.style.height = `${navbarHeight}px`;
	};

	useEffect(() => {
		updateFillerHeight();
	}, [navbarHeight]);

	return (
		<>
			<Head>
				<title>ONEPASS</title>
				<link
					rel="icon"
					type="image/svg+xml"
					sizes="any"
					href="/logo/favicon.svg"
				/>
			</Head>
			<div className="home-container w-full">
				<NavbarContext.Provider
					value={{
						navbarHeight,
						setNavbarHeight,
					}}>
					<Navbar />
				</NavbarContext.Provider>
				<div
					ref={ref_filler}
					className="filler"></div>
				<Banner />
				<div className="spacer h-3.5 md:h-7 border-b-2 w-11/12 mx-auto border-lightBlue"></div>
				<SashRibbon />
				<div className="spacer border-b-2 w-11/12 mx-auto border-lightBlue"></div>
				<NewsGroup news={news} />
				<SeasonalProjectGroups />
				<ProgramGroups />
				<ModalContext.Provider
					value={{
						isOpenModal,
						handleOpenModal: setIsOpenModal,
						setModalComponent,
					}}>
					<ServiceGroups />
				</ModalContext.Provider>
				<AdvisoryGroups />
				<ApprovalCases />
				<Consultation />
				<Footer />
				<div
					id="tool-kit"
					className="hidden text-white stroke-white stroke-strongBlue mr-2 my-10 my-2">
					<ContentGeneratorToolkit />
				</div>
			</div>
			{isOpenModal ? <ModalPortal handleOpenModal={setIsOpenModal}>{modalComponent}</ModalPortal> : <></>}
			<Toaster />
		</>
	);
}
