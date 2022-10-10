import React from "react";
import FooterWave from "../../elements/Wave/FooterWave";
import Typewriter from "typewriter-effect";
import Button from "../../elements/Button/Button";

const Contact = () => {
	return (
		<div
			className={
				"h-full w-full min-h-[900px] xl:min-h-[1250px] bg-backgroundColor flex items-center justify-center relative gradient p-4"
			}>
			<form className={"w-full max-w-[700px] flex flex-col z-10"}>
				<div className={"pb-6 pt-8"}>
					<p
						className={
							"text-2xl sm:text-3xl md:text-4xl font-bold text-secondary inline border-b-[3px] border-primary"
						}>
						Contact
					</p>
					<p className={"text-base text-secondary text-opacity-60 py-2"}>
						<Typewriter
							options={{
								deleteSpeed: 100,
								loop: true,
								delay: 70,
							}}
							onInit={(typewriter) => {
								typewriter
									.typeString("Do you have any questions?")
									.pauseFor(300)
									.deleteAll()
									.typeString("Send me a message!")
									.pauseFor(300)
									.start();
							}}
						/>
					</p>
				</div>
				<input
					className={"bg-secondary p-2 border-2 border-primary"}
					type='text'
					placeholder='Name'
					name='name'
				/>
				<input
					className={"bg-secondary p-2 border-2 border-primary my-4"}
					type='email'
					placeholder='Email'
					name='email'
				/>
				<textarea
					className={"bg-secondary p-2 border-2 border-primary resize-none"}
					name='message'
					rows='10'
					placeholder='Your message'></textarea>
				<Button text={"Send Message"} type={"submit"} classes={"py-2 mt-4"}/>
			</form>
			<div className={"absolute -top-1 w-full z-10"}>
				<FooterWave />
			</div>
		</div>
	);
};

export default Contact;
