import React from "react";
import MyPhoto from "../../asstes/myPhoto.JPG"

const AboutMe = () => {

	return (
		<div className={"w-full h-screen flex justify-center items-center"}>
			<div
				className={
					"container h-full mx-auto flex flex-col justify-center items-center -mt-20"
				}>
				<div className={"grid grid-cols-2 gap-8 w-full"}>
					<div className={"text-right pb-8 pl-4"}>
						<p
							className={"text-2xl sm:text-3xl md:text-4xl text-primary inline border-b-2 border-blackColor"}>
							About Me
						</p>
					</div>
					<div></div>
				</div>
				<div className={"container grid grid-cols-2 gap-8"}>
					<div className={"ml-2"}>
						<img className={"max-w-[280px] w-full float-right"} src={MyPhoto} alt="Mateusz portrait"/>
					</div>
					<div className={"mr-2"}>
						<p className={"text-[10px] xs:text-[12px] leading-tight sm:text-sm md:leading-8 md:text-xl max-w-xs"}>I started my adventure with programming in December 2021, on a course at the IT school "Coders Lab". In programming, I am fascinated by the possibility of creating, constant development and the end result of my work. I'm an ambitious person with a great willingness to learn and develop.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
