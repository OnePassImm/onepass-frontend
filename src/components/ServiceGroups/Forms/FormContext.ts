import { Dispatch, SetStateAction, createContext } from "react";
import { State } from "../../../utils/types";

type TFormContext = {
	state: State;
	setState: Dispatch<SetStateAction<State>>;
};

const FormContext = createContext<TFormContext | null>(null);
export default FormContext;
