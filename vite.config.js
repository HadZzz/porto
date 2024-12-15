import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},

	build: {
		target: 'esnext',
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true
			}
		},
		rollupOptions: {
			output: {
				manualChunks: {
					'vendor': ['svelte', '@sveltejs/kit'],
					'icons': ['lucide-svelte']
				}
			}
		},
		chunkSizeWarningLimit: 1000
	},

	optimizeDeps: {
		include: ['svelte', '@sveltejs/kit', 'lucide-svelte']
	}
});
