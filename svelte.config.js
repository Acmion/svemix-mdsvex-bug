import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

import svemix from 'svemix/plugin';
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: 
	[ 
		mdsvex({extension: ".svelte"}), // COMMENT THIS LINE WHEN YOU WISH TO DISABLE MDSVEX!!!!
		preprocess()
	],

	kit: {
		adapter: adapter(),
		vite: 
		{
			plugins: [svemix()]
		}
	}
};

export default config;
