import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import Layout from "./layouts/Layout";
import { ParallaxProvider } from "react-scroll-parallax";

const App = () => {
	return (
		<ParallaxProvider>
			<Layout>
				<Hero />
				<AboutMe />
			</Layout>
		</ParallaxProvider>
	);
};

export default App;
