import React, { useState, useEffect, useRef, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap/dist/gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { LINKS } from "./setting";
import STYLE_GROUPS from "../../utils/styles";
import NavbarContext from "./NavbarContext";

const Navbar = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollToPlugin);
	}, []);

	const [isActive, setIsActive] = useState<boolean>(false);
	const ref_self = useRef<HTMLDivElement>(null);

	// Handle click outside
	const handleClickOutside = () => {
		setIsActive(false);
	};
	useOutsideAlerter(ref_self, handleClickOutside);

	// Update navbar height to context
	const navbarContext = useContext(NavbarContext);
	const updateCSSVariableHeightNavbar = () => {
		if (!navbarContext || !ref_self || !ref_self.current) {
			return;
		}
		navbarContext.setNavbarHeight(ref_self.current.offsetHeight);
	};

	useEffect(() => {
		updateCSSVariableHeightNavbar();
	}, [ref_self]);

	useEffect(() => {
		window.addEventListener("resize", updateCSSVariableHeightNavbar);
		return () => window.removeEventListener("resize", updateCSSVariableHeightNavbar);
	}, []);

	// Navigate to href
	const onClickHref = (link: string) => {
		if (window.location.pathname.length > 1) {
			window.location.href = `${window.location.origin}/#${link}`;
		} else {
			gsap.to(window, {
				scrollTo: `#${link}`,
			});
		}
	};

	return (
		<div
			id="navbar"
			className="flex flex-col z-10 w-full fixed"
			ref={ref_self}>
			<div className="bg-white px-6 sm:px-8 py-2">
				<nav className="w-full flex justify-between items-center">
					<Link href="/">
						<div className="image-container logo-red-container h-12 relative">
							<Image
								src="/logo/favicon.svg"
								alt="logo"
								fill
								unoptimized
								sizes=""
								className="!relative !w-auto"
							/>
						</div>
					</Link>
					<div
						className="hamburger before:bg-black after:bg-black block sm:hidden w-8 relative cursor-pointer"
						onClick={() => setIsActive(!isActive)}></div>
					<ul className="hidden sm:flex flex-row flex-1 items-center justify-end">
						{LINKS.map((link) => (
							<li
								className={`font-semibold text-black uppercase cursor-pointer text-xl text-center mx-5 last:mx-0`}
								key={link.id}>
								<a onClick={() => onClickHref(link.id)}>{link.title}</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<ul className={`${isActive ? "flex" : "hidden"} sm:hidden sm-nav flex-col bg-white px-6 py-10`}>
				{LINKS.map((link) => (
					<li
						className="font-semibold text-black uppercase cursor-pointer text-xl my-1"
						key={link.id}>
						<a
							onClick={() => {
								gsap.to(window, {
									scrollTo: `#${link.id}`,
								});
								setIsActive(false);
							}}>
							{link.title}
						</a>
					</li>
				))}
			</ul>
			<div className={`${STYLE_GROUPS.flexCenter} bg-strongBlue w-[95%] h-1 self-center`}></div>
		</div>
	);
};

function useOutsideAlerter(ref: React.MutableRefObject<any>, callback: () => void) {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target)) {
				callback();
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}

export default Navbar;
