import React from "react";
import FooterWave from "../../elements/Wave/FooterWave";

const Footer = () => {
	return (
		<>
			<div
				className={
					"h-screen w-full bg-backgroundColor flex justify-center items-center relative gradient"
				}>
				<div className={"container flex items-center justify-center"}>
					<div>Footer</div>
				</div>
        <div className={"absolute -top-1 w-full z-10"}>
					<FooterWave />
				</div>
			</div>
		</>
	);
};

export default Footer;
