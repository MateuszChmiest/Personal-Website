import React from "react";

const CardSwiper = ({ image, hrefDemo, hrefCode, name }) => {
	return (
		<div className={"text-center pb-8"}>
			<div
				className={
					"shadow-md shadow-backgroundColor group flex justify-center items-center mx-auto content-div"
				}>
				<img src={image} className={"border-2"} />
			</div>
			<div className={""}>
				<h1 className={"my-2"}>{name}</h1>
				<button type="button" className={"border-2 border-primary hover:bg-primary duration-200 text-blackColor px-5 font-medium cursor-pointer z-50 text-lg"}><a href={hrefDemo} target="_blank">Demo</a></button>
				<button type="button" className={"border-2 border-primary hover:bg-primary duration-200 text-blackColor px-5 font-medium cursor-pointer ml-3 z-50 text-lg"}><a href={hrefCode} target="_blank">Code</a></button>
			</div>
		</div>
	);
};

export default CardSwiper;
