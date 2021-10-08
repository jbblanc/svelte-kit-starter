import sveltePreprocess from "svelte-preprocess";
import node from "@sveltejs/adapter-node";
import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		preserve: ["ld+json"],
		/*defaults: {
			script: "typescript",
			//style: "scss",
		},*/
		/*scss: {
			prependData: `@import "./src/style/_theme.scss";`,
			renderSync: true,
		},*/
	}),
	kit: {
		adapter: node(),

		target: "#svelte",
		hostHeader: "X-Forwarded-Host",
		vite: {
			build: {
				minify: "terser",
				chunkSizeWarningLimit: 1000,
			},

			resolve: {
				alias: {
					$components: resolve("src/commons/components"),
					$stores: resolve("src/commons/stores"),
					$datasources: resolve("src/commons/datasources"),
					$libs: resolve("src/commons/libs"),
					//env: resolve("src/env.ts"),
				},
			},
		},
	},
};
export default config;
