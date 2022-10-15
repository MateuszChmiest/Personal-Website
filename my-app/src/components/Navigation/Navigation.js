import React, { useEffect, useRef, useState } from "react";
import Logo from "../../asstes/logo.png";
import { FaBars, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiFillFileText } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import clsx from "clsx";
import { Link as LinkScroll } from "react-scroll";

const Navigation = () => {
	const [nav, setNav] = useState(false);
	const [mobileMenu, setMobileMenu] = useState(false)
	const handleClick = () => setNav(!nav);
	const [navBackground, setNavBackground] = useState(false);
	const navRef = useRef();
	navRef.current = navBackground;

	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > window.innerHeight / 6;

			if (navRef.current !== show) {
				setNavBackground(show);
			}
		};
		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const menu = [
		{
			name: "Home",
			nav: "Hero",
		},

		{
			name: "About me",
			nav: "AboutMe",
		},

		{
			name: "Skills",
			nav: "Skills",
		},

		{
			name: "Projects",
			nav: "Projects",
		},

		{
			name: "Contact",
			nav: "Contact",
		},
	];
	return (
		<div
			className={clsx(
				"w-full h-[70px] flex justify-center md:justify-between items-center px-4 lg:px-8 text-secondary fixed z-30",
				{
					"bg-blackColor bg-opacity-70 transition-colors duration-300":
						navBackground,
				}
			)}>
			<div>
				<img src={Logo} alt='logo icon' className={"max-w-[145px] w-full"} />
			</div>
			<div className={"hidden md:flex"}>
				<div className={"flex md:flex"}>
					{menu.map((item, index) => (
						<LinkScroll
							to={item.nav}
							spy={true}
							smooth={true}
							duration={500}
							key={index}
							className={
								"text-secondary hover:text-opacity-60 transition-all duration-150 px-6 cursor-pointer"
							}>
							{item.name}
						</LinkScroll>
					))}
				</div>
			</div>

			{/* Burger */}
			<div className={"absolute right-3 top-5 md:hidden z-20"}>
				<FaBars
					className={clsx(
						"text-2xl cursor-pointer ease-in transition-transform",
						{ "rotate-90": nav },
						{ "rotate-0": !nav }
					)}
					onClick={handleClick}
				/>
			</div>

			{/* Mobile menu */}
			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen bg-backgroundColor flex flex-col justify-center items-center gradient-two z-10"
				}>
				{menu.map((item, index) => (
					<LinkScroll
						to={item.nav}
						spy={true}
						smooth={true}
						duration={500}
						key={index}
						className={"py-4 text-3xl cursor-pointer"}
						onClick={handleClick}>
						{item.name}
					</LinkScroll>
				))}
			</ul>

			{/* Social */}
			<div className={"hidden md:flex fixed flex-col top-[40%] left-0 z-30"}>
				<ul>
					<li
						className={
							"w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#389bf7] rounded-r-xl"
						}>
						<a
							href='https://www.linkedin.com/in/mateusz-chmiest/'
							className={
								"flex justify-between items-center w-full text-secondary hover:text-backgroundColor"
							}>
							Linkedin <FaLinkedin size={30} className={"-mr-2"} />
						</a>
					</li>
					<li
						className={
							"w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#161c21] rounded-r-xl"
						}>
						<a
							href='https://github.com/MateuszChmiest'
							className={
								"flex justify-between items-center w-full text-secondary hover:text-opacity-60"
							}>
							GitHub <FaGithub size={30} className={"-mr-2"} />
						</a>
					</li>
					<li
						className={
							"w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-primary rounded-r-xl"
						}>
						<a
							href='https://drive.google.com/file/d/18DlxeUI-preg4KnDTEAvSFbue31g5f7E/view'
							className={
								"flex justify-between items-center w-full text-secondary hover:text-backgroundColor"
							}>
							My CV <AiFillFileText size={30} className={"-mr-2"} />
						</a>
					</li>
				</ul>
			</div>

			{/* Mobile Social */}
			<div className={clsx("md:hidden fixed flex-col bottom-[72px] duration-500 right-3 mr-[-100px] z-30", {"mr-[0]" : mobileMenu})}>
				<ul>
					<li
						className={
							"w-14 h-14 flex justify-center items-center bg-[#389bf7] rounded-full"
						}>
						<a
							href='https://www.linkedin.com/in/mateusz-chmiest/'
							target="_blank"
							rel="noreferrer"
							className={"text-secondary text-2xl"}>
							<FaLinkedin />
						</a>
					</li>
					<li
						className={
							"w-14 h-14 flex justify-center items-center my-1 bg-primary rounded-full"
						}>
						<a
							href='https://github.com/MateuszChmiest'
							target="_blank"
							rel="noreferrer"
							className={"text-secondary text-2xl"}>
							<FaGithub />
						</a>
					</li>
					<li
						className={
							"w-14 h-14 flex justify-center items-center bg-[#161c21] rounded-full"
						}>
						<a
							href='https://drive.google.com/file/d/18DlxeUI-preg4KnDTEAvSFbue31g5f7E/view'
							target="_blank"
							rel="noreferrer"
							className={"text-secondary text-2xl"}>
							<AiFillFileText />
						</a>
					</li>
				</ul>
			</div>
			<div
				className={clsx(
					"w-14 h-14 fixed md:hidden bottom-3 right-3 bg-primary rounded-full flex items-center justify-center mt-1 text-xl border-2 border-[#21a0a0]", {"animate-bounce" : !mobileMenu})
				} onClick={() => setMobileMenu(!mobileMenu)}>
				<BiShareAlt />
			</div>
		</div>
	);
};

export default Navigation;
