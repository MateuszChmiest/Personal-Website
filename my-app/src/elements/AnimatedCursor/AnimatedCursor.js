import React from "react";
import AnimatedCursor from "react-animated-cursor";

const AnimCursor = () => {
	return (
		<AnimatedCursor
			innerSize={12}
			outerSize={20}
			color='58,183,183'
			outerAlpha={0.5}
			innerScale={0.7}
			outerScale={4}
			clickables={[
				"a",
				'input[type="text"]',
				'input[type="email"]',
				'input[type="number"]',
				'input[type="submit"]',
				'input[type="image"]',
				"label[for]",
				"select",
				"textarea",
				"button",
				".link",
			]}
		/>
	);
};

export default AnimCursor;
