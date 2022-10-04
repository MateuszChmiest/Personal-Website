import React from "react";
import project1 from "../../asstes/project1.png";

const CardSwiper = () => {
	return (
		<div>
			<div
				className={
					"shadow-md shadow-backgroundColor group flex justify-center items-center mx-auto content-div"
				}>
				<img src={project1} className={"border-2"}/>
				<div className={"opacity-0 group-hover:opacity-100"}>
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
	);
};

export default CardSwiper;
