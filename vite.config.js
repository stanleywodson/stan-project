import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [
		laravel({
			input: 'resources/js/app.tsx',
			refresh: true,
		}),
		react(),
	],
	watch: {
		usePolling: true,
		origin: 'http://167.172.245.192'
	},
	server: {
		hmr: {
			host: '167.172.245.192'
		},
		host: true,
		port: 3000,
		watch: {
			usePolling: true
		}
	}
});
