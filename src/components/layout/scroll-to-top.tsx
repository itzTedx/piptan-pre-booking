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
			aria-label="Scroll to top of page"
			className="justify-self-end rounded-xl"
			onClick={scrollToTop}
			size="icon"
			title="Scroll to top"
			variant="outline"
		>
			<svg
				aria-hidden="true"
				fill="none"
				height="24"
				role="img"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				viewBox="0 0 24 24"
				width="24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0 0h24v24H0z" fill="none" stroke="none" />
				<path d="M6 15l6 -6l6 6" />
			</svg>
		</Button>
	);
};
