import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import Layout from "./layouts/Layout";
import { ParallaxProvider } from "react-scroll-parallax";
import Skills from "./components/Skills/Skills";

const App = () => {
	return (
		<ParallaxProvider>
			<Layout>
				<Hero />
				<AboutMe />
				<Skills/>
			</Layout>
		</ParallaxProvider>
	);
};

export default App;
