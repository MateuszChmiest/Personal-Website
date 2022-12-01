import React from "react";
import Carousel from "../Swiper/Swiper";

const Projects = () => {
	return (
		<div>
			<div
				className={
					"container mx-auto p-4 flex flex-col justify-center w-full min-h-[800px] "
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
			</div>
		</div>
	);
};

export default Projects;
