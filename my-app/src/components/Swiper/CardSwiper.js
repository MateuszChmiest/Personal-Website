import React from "react";

const CardSwiper = ({ image, hrefDemo, hrefCode, name, alt }) => {
	return (
		<div className={"text-center pb-10"}>
			<div
				className={
					"shadow-md shadow-backgroundColor group flex justify-center items-center mx-auto content-div"
				}>
				<img src={image} alt={alt} className={"border-2"} />
			</div>
			<div>
				<h1 className={"my-3 font-bold text-xl sm:text-base md:text-xl text-gradient bg-gradient-to-r from-primary to-blackColor"}>{name}</h1>
				<button type="button" className={"border-2 border-primary hover:bg-primary duration-200 text-blackColor px-6 font-medium cursor-pointer z-50 text-lg"}><a href={hrefDemo} target="_blank" rel="noreferrer">Demo</a></button>
				<button type="button" className={"border-2 border-primary hover:bg-primary duration-200 text-blackColor px-6 font-medium cursor-pointer ml-3 z-50 text-lg"}><a href={hrefCode} target="_blank" rel="noreferrer">Code</a></button>
			</div>
		</div>
	);
};

export default CardSwiper;
