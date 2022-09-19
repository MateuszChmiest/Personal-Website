import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import Layout from "./layouts/Layout";
import { ParallaxProvider } from "react-scroll-parallax";
import Skills from "./components/Skills/Skills";
import { Element } from "react-scroll";

const App = () => {
	return (
		<ParallaxProvider>
			<Layout>
				<Element name='Hero'>
					<Hero />
				</Element>
				<Element name='AboutMe'>
					<AboutMe />
				</Element>
				<Element name='Skills'>
					<Skills />
				</Element>
			</Layout>
		</ParallaxProvider>
	);
};

export default App;
