import { Dispatch, SetStateAction, createContext } from "react";

type TModalContext = {
	isOpenModal: boolean;
	handleOpenModal: Dispatch<SetStateAction<boolean>>;
	setModalComponent: Dispatch<SetStateAction<JSX.Element | null>>;
};

const ModalContext = createContext<TModalContext | null>(null);
export default ModalContext;
