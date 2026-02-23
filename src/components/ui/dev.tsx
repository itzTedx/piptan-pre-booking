"use client";

import { useEffect } from "react";

export const DevMode = () => {
	const isDevelopment = process.env.NODE_ENV === "development";
	useEffect(() => {
		if (!isDevelopment) {
			console.group("Hello World!");
			console.log(
				"%c🚀 Powered by Ziron Media — Your Digital Marketing Partner",
				"color: #fff; background: #4938ff; padding: 8px 16px; font-size: 14px; font-family: monospace;"
			);
			console.log(
				"%c💡 Need a stunning website or want to boost your brand?\n📧 ashik@zironmedia.com | 🌐 www.zironmedia.com",
				"color: #962eff; font-size: 14px; font-family: monospace; padding: 8px 16px;"
			);
			console.groupEnd();
		}
	}, [isDevelopment]);

	return null;
};
