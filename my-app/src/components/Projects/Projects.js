import React, { useEffect } from "react";
import Carousel from "../Swiper/Swiper";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {

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
		<div ref={ref}>
			<motion.div
			animate={animation}
				className={
					"container mx-auto p-4 flex flex-col justify-center w-full min-h-[900px] "
				}>
				<div className={"pb-8"}>
					<p
						className={
							"text-2xl sm:text-3xl md:text-4xl font-bold text-backgroundColor inline border-b-[3px] border-primary"
						}>
						Projects
					</p>
					<p className={"py-4"}>\\ Check My projects</p>
				</div>
				<Carousel/>
			</motion.div>
		</div>
	);
};

export default Projects;
