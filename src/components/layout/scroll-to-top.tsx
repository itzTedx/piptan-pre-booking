"use client";

import { Button } from "../ui/button";

export const ScrollToTop = () => {
	// Scroll to top smoothly
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={scrollToTop}
			aria-label="Scroll to top of page"
			title="Scroll to top"
			className="justify-self-end rounded-xl"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				aria-hidden="true"
				role="img"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M6 15l6 -6l6 6" />
			</svg>
		</Button>
	);
};
