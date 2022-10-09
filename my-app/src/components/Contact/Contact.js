import React from "react";
import FooterWave from "../../elements/Wave/FooterWave";
import Typewriter from "typewriter-effect";

const Contact = () => {
	return (
			<div
				className={
					"h-full w-full xl:min-h-[1200px] bg-backgroundColor flex justify-center items-center relative gradient"
				}>
				<form className={"container flex flex-col items-center justify-center z-50"}>
					<div className={"pb-8"}>
						<p>Contact</p>
						<p
							className={"text-base xl:text-lgl text-secondary text-opacity-60"}>
							<Typewriter
								options={{
									deleteSpeed: 50,
									loop: true,
									delay: 90
								}}
								onInit={(typewriter) => {
									typewriter
										.typeString("I'm a Frontend Developer.")
										.pauseFor(1000)
										.deleteAll()
										.typeString("Check my portfolio!")
										.start();
								}}
							/>
						</p>
					</div>
					<input className={"bg-secondary p-2 w-1/2"} type="text" placeholder="Name" name="name"/>
					<input className={"bg-secondary p-2 my-4 w-1/2"} type="email" placeholder="Email" name="email"/>
					<textarea className={"bg-secondary p-2 w-1/2"} name="message" rows="10" placeholder="Your message"></textarea>
					<button type="submit">okej</button>
				</form>
				<div className={"absolute -top-1 w-full z-10"}>
					<FooterWave />
				</div>
			</div>
	);
};

export default Contact;
