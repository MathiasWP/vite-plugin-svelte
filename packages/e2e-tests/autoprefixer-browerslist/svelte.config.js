import sveltePreprocess from 'svelte-preprocess';
import path from 'path';
import { fileURLToPath } from 'url';

export default {
	preprocess: sveltePreprocess({
		postcss: {
			// tests are run on project root and postcss-load-config uses cwd as default so force correct path here
			configFilePath: path.join(path.dirname(fileURLToPath(import.meta.url)), 'postcss.config.cjs')
		}
	})
};
