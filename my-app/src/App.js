import React, { useEffect } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import Layout from "./layouts/Layout";
import Skills from "./components/Skills/Skills";
import { Element } from "react-scroll";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import AnimCursor from "./elements/AnimatedCursor/AnimatedCursor";


const App = () => {

	return (
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
			<Element name='Projects'>
				<Projects />
			</Element>
			<Element name='Contact'>
				<Contact />
			</Element>
			<AnimCursor />
		</Layout>
	);
};

export default App;
