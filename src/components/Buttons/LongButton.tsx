import { Direction } from "../../utils/types";

type TLongButton = {
	direction: Direction;
	handleOnClick?: () => void;
	useExternal?: boolean;
	hoverState?: boolean;
};

const LongButton = (props: TLongButton) => {
	return (
		<div
			className={`button long-button ${!props.useExternal ? "internal-effect" : props.hoverState && "external-effect"} ${props.direction === Direction.Right && "rotate-180"} h-8 w-20 rounded-full border border-black flex items-center justify-center overflow-hidden select-none`}
			onClick={props.handleOnClick}>
			<div className="icon-container stroke-black w-1/2">
				<svg
					viewBox="0 0 29 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M7.60134 1L1 7.5L7.60134 14"
						strokeLinejoin="round"
					/>
					<path
						d="M1.21301 7.5H28.5001"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		</div>
	);
};

export default LongButton;
