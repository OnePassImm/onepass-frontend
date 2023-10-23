import { State } from "../../utils/types";

export type TTitleButton = {
	buttonColor?: "strongPink" | "black";
	title: string;
	handleOnClick?: () => void;
	displayState?: Omit<State, State.FAILURE & State.SUCCESS>;
	useExternal?: boolean;
	hoverState?: boolean;
};

const TitleButton = (props: TTitleButton) => {
	const buttonColor = props.buttonColor ? props.buttonColor : "black";
	return (
		<>
			{props.displayState && props.displayState === State.LOADING ? (
				<div className="loading animate-spin border-2 md:border-4 border-strongPink border-t-transparent border-l-transparent rounded-full r w-4 md:w-6 h-4 md:h-6"></div>
			) : (
				<div
					className={`${!props.useExternal ? "internal-effect" : props.hoverState && "external-effect"} button title-button border-${buttonColor} w-fit h-6 md:h-10 px- px-4 md:px-7 rounded-full border flex items-center justify-center overflow-hidden`}
					onClick={props.handleOnClick}>
					<span className={`text-${buttonColor} text-base md:text-2xl align-middle mx-1 mb-1`}>{props.title}</span>
					<div className={`icon-container stroke-${buttonColor} w-2.5 md:w-3.5 h-2.5 md:h-3.5 mx-1`}>
						<svg
							viewBox="0 0 13 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M3 1H12V10"
								strokeLinejoin="round"
							/>
							<path
								d="M12 1L0.5 12.5"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>
			)}
		</>
	);
};

export default TitleButton;
