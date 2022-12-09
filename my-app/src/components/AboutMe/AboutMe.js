import React, { useEffect } from "react";
import MyPhoto from "../../asstes/myPhoto.JPG";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
	const { ref, inView } = useInView({
		threshold: 0.3
	});
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				x: 0,
				transition: {
					type: "spring",
					duration: 1.4,
					bounce: 0.2,
				},
			});
		}

		if (!inView) {
			animation.start({x: `-100vw`});
		}
	}, [inView]);

	return (
		<div
		ref={ref}
			className={
				"w-full min-h-[900px] flex justify-center items-center -mt-20"
			}>
			<motion.div
				animate={animation}
				className={
					"container h-full mx-auto flex flex-col justify-center items-center"
				}>
				<div className={"grid grid-cols-2 gap-8 w-full"}>
					<div className={"md:text-right mb-4 pb-8 pl-4"}>
						<p
							className={
								"text-2xl sm:text-3xl md:text-4xl text-backgroundColor inline border-b-[3px] font-bold border-primary "
							}>
							About Me
						</p>
					</div>
					<div></div>
				</div>
				<div className={"container grid grid-cols-2 gap-8"}>
					<div className={"ml-2 md:mr-2 relative frame"}>
						<img
							className={"max-w-[280px] w-full float-right"}
							src={MyPhoto}
							alt='Mateusz portrait'
						/>
					</div>
					<div className={"mr-2"}>
						<p
							className={
								"text-[10px] xs:text-[12px] leading-tight sm:text-sm md:leading-8 md:text-xl max-w-xs"
							}>
							I started my adventure with programming in December 2021, on a
							course at the IT school "Coders Lab". In programming, I am
							fascinated by the possibility of creating, constant development
							and the end result of my work. I'm an ambitious person with a
							great willingness to learn and develop.
						</p>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default AboutMe;
