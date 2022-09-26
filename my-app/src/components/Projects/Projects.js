import React from "react";
import project1 from "../../asstes/project1.png"

const Projects = () => {
	return (
		<div className={"w-full md:h-screen"}>
			<div className={"container mx-auto p-4 flex flex-col justify-center w-full h-full"}>
				<div className={"pb-8"}>
					<p className={"text-2xl sm:text-3xl md:text-4xl font-bold text-backgroundColor inline border-b-[3px] border-primary"}>Work</p>
					<p className={"py-4"}>\\ Check My projects</p>
				</div>

				<div style={{ backgroundImage: `url(${project1})`}} className={"grid sm:grid-cols-2 md:grid-cols-3 gap-4"}>
					<div className={"shadow-md shadow-backgroundColor group flex justify-center items-center mx-auto content-div"}>
						<div>
							<span></span>
							<div>
								<a href='/'>
									<button></button>
								</a>
								<a href='/'>
                                    <button></button>
                                </a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
