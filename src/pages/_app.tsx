import "../styles/styles.scss";
import type { AppProps } from "next/app";
import { Darker_Grotesque } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const darkerGrotesque = Darker_Grotesque({
	subsets: ["vietnamese"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={darkerGrotesque.className}>
			<Component {...pageProps} />
			<Analytics />
		</main>
	);
}
