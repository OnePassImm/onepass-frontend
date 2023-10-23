import { PropsWithChildren, useEffect } from "react";

type TModalPortal = {
	handleOpenModal: (status: boolean) => void;
};

const ModalPortal = (props: PropsWithChildren<TModalPortal>) => {
	const handleEscKey = (event: KeyboardEvent) => {
		event.key === "Escape" && props.handleOpenModal(false);
	};

	useEffect(() => {
		window.addEventListener("keydown", handleEscKey);
		return () => window.removeEventListener("keydown", handleEscKey);
	}, []);
	
	return (
		<div className="modal-portal-container z-20 absolute top-0 bottom-0 right-0 left-0">
			<div
				className="modal-wrap fixed flex h-full w-full justify-center items-center bg-black bg-opacity-50"
				onClick={() => props.handleOpenModal(false)}>
				<div
					className="modal-container z-30 max-h-[80%] max-w-[80%] overflow-auto"
					onClick={(event) => event.stopPropagation()}>
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default ModalPortal;
