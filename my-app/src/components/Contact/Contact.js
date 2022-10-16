import React, { useState } from "react";
import FooterWave from "../../elements/Wave/FooterWave";
import Typewriter from "typewriter-effect";
import Button from "../../elements/Button/Button";
import axios from "axios";

const Contact = () => {
	const [formStatus, setFormStatus] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [query, setQuery] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = () => (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setQuery((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormStatus(false);
		if (!query.name || !query.email || !query.message) return setError("Error: All fields must be completed!")
		if (loading) return;
		setLoading(true);
		const formData = new FormData();
		Object.entries(query).forEach(([key, value]) => {
			formData.append(key, value)
		})

		axios
		.post('https://getform.io/f/ad3f1861-ab36-4b6f-b91b-cf48be8f6db7',formData,{ headers: {Accept: "application/json"} }
		).then(function (resp) {
			setFormStatus(true);
			setQuery({
				name: "",
				email: "",
				message: ""
			});
			setLoading(false);
			setError("")
		}).catch(function (err) {
			console.log(err);
			setLoading(false)
		});
	};

	return (
		<div
			className={
				"h-full w-full min-h-[900px] xl:min-h-[1250px] bg-backgroundColor flex items-center justify-center relative gradient p-4"
			}>
			<form
				encType="multipart/form-data"
				onSubmit={handleSubmit}
				className={"w-full max-w-[700px] flex flex-col z-10"}>
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
					value={query.name}
					onChange={handleChange()}
				/>
				<input
					className={"bg-secondary p-2 border-2 border-primary my-4"}
					type='email'
					placeholder='Email'
					name='email'
					value={query.email}
					onChange={handleChange()}
				/>
				<textarea
					className={"bg-secondary p-2 border-2 border-primary resize-none"}
					name='message'
					rows='10'
					placeholder='Your message'
					value={query.message}
					onChange={handleChange()}></textarea>

					{formStatus && <p className={"text-center md:text-xl text-primary animate-bounce mt-4"}>Message sent. Thank you for contact!</p>}
					{error.length > 1 && <p className={"text-center md:text-xl text-[red] font-bold mt-4 animate-bounce"}>{error}</p>}

				<Button text={"Send Message"} type={"submit"} classes={"py-2 mt-4"} />
				
			</form>
			<div className={"absolute -top-1 w-full z-10"}>
				<FooterWave />
			</div>
		</div>
	);
};

export default Contact;
