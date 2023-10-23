import { Toaster } from "react-hot-toast";

export default () => (
	<Toaster
		position="top-center"
		toastOptions={{
			success: {
				iconTheme: {
					primary: "#3E9598",
					secondary: "white",
				},
			},
			error: {
				iconTheme: {
					primary: "#CE3832",
					secondary: "white",
				},
			},
		}}
	/>
);
