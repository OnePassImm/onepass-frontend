import { Dispatch, createContext } from "react";
export type TNavbarContext = {
	navbarHeight: number;
	setNavbarHeight: Dispatch<React.SetStateAction<any | undefined>>;
};

const NavbarContext = createContext<TNavbarContext | null>(null);
export default NavbarContext;
