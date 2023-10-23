import { createContext } from "react";
import { TAdvisoryStep } from "./types";

export type TAdvisoryContext = {
	data: TAdvisoryStep[];
	color: "pink" | "blue";
};

const AdvisoryContext = createContext<TAdvisoryContext | null>(null);
export default AdvisoryContext;
