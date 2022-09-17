import React, { useEffect, useRef, useState } from "react";
import useWindowWidth from "react-hook-use-window-width";
import Logo from "../../asstes/logo.png";
import { FaBars, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiFillFileText } from "react-icons/ai";
import clsx from "clsx";

const Navigation = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
    const [navBackground, setNavBackground] = useState(false);
    const navRef = useRef();
    navRef.current = navBackground;
    const width = useWindowWidth();
  
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > window.innerHeight / 6
  
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener("scroll", handleScroll)
      return () => {
        document.removeEventListener("scroll", handleScroll)
      }
    }, [])
  

	const menu = [
		{
			name: "Home",
		},

		{
			name: "About me",
		},

		{
			name: "Skills",
		},

		{
			name: "Projects",
		},

		{
			name: "Contact",
		},
	];
	return (
		<div
			className={clsx(
				"w-full h-[70px] flex justify-between items-center px-4 lg:px-8 text-secondary fixed z-30", {"bg-blackColor bg-opacity-70 transition-colors duration-300": navBackground})
			}>
			<div>
				<img src={Logo} alt='logo image' className={"max-w-[145px] w-full"} />
			</div>
			<div className={"hidden md:flex"}>
				<ul className={"flex md:flex"}>
					{menu.map((item, index) => (
						<li
							key={index}
							className={
								"text-secondary hover:text-opacity-60 transition-all duration-150"
							}>
							{item.name}
						</li>
					))}
				</ul>
			</div>

            {/* Burger */}
			<div className={"md:hidden z-20"}>
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
					<li key={index} className={"py-4 text-3xl"} onClick={handleClick}>
						{item.name}
					</li>
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
								"flex justify-between items-center w-full text-secondary hover:text-backgroundColor duration-200"
							}>
							Linkedin <FaLinkedin size={30} className={"-mr-2"}/>
						</a>
					</li>
					<li
						className={
							"w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#161c21] rounded-r-xl"
						}>
						<a
							href='https://github.com/MateuszChmiest'
							className={
								"flex justify-between items-center w-full text-secondary hover:text-opacity-60 duration-200"
							}>
							GitHub <FaGithub size={30} className={"-mr-2"}/>
						</a>
					</li>
					<li
						className={
							"w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-primary rounded-r-xl"
						}>
						<a
							href='https://drive.google.com/file/d/18DlxeUI-preg4KnDTEAvSFbue31g5f7E/view'
							className={
								"flex justify-between items-center w-full text-secondary hover:text-backgroundColor duration-200"
							}>
							My CV <AiFillFileText size={30} className={"-mr-2"}/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navigation;
