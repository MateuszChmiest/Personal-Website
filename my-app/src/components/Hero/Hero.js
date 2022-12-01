import React from "react";
import Wave from "../../elements/Wave/Wave";
import Typewriter from "typewriter-effect";
import Button from "../../elements/Button/Button";
import { Link as LinkScroll } from "react-scroll";

const Hero = () => {

	return (
		<>
			<div
				className={
					"min-h-[750px] md:min-h-[900px] xl:min-h-[1000px] w-full bg-backgroundColor flex justify-center items-center relative gradient"
				}>
				<div
					className={
						"container h-full mx-auto flex flex-col justify-center items-center px-4 z-20"
					}>
					<div className={"md:mb-20"}>
						<p className={"text-primary md:text-xl"}>Hi, my name is</p>
						<h1 className={"text-4xl md:text-5xl xl:text-7xl text-secondary"}>
							Mateusz Chmiest
						</h1>
						<p
							className={"text-4xl xl:text-5xl text-secondary text-opacity-60"}>
							<Typewriter
							options={{
								deleteSpeed: 100,
								loop: true,
								delay: 80,
							}}
								onInit={(typewriter) => {
									typewriter
										.typeString("I'm a Frontend Developer.")
										.pauseFor(300)
										.deleteAll()
										.typeString("Check my portfolio!")
										.pauseFor(300)
										.start();
								}}
							/>
						</p>
						<p
							className={
								"py-4 max-w-xl xl:max-w-2xl xl:text-xl text-secondary text-opacity-60"
							}>
							I am a frontend developer specializing in building web
							applications. Currently I am focusing on learning typescript and
							docker.
						</p>
						<LinkScroll to='Projects' spy={true} smooth={true} duration={500}>
							<Button
								text={"Portfolio"}
								classes={"py-2 w-1/2 md:w-1/3 mt-2 md:text-xl"}
							/>
						</LinkScroll>
					</div>
				</div>
				<div className={"absolute -bottom-1 w-full z-10"}>
					<Wave />
				</div>
			</div>
		</>
	);
};

export default Hero;
