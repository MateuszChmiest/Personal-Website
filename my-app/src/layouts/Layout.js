import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { useScroll, motion, useSpring } from "framer-motion";

const Layout = ({ children }) => {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress);

	return (
		<>
			<motion.div className="fixed top-0 left-0 right-0 h-1 bg-whiteColor origin-left z-50" style={{ scaleX }} />
			<Navigation />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
