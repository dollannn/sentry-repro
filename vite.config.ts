import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'playpark',
				project: 'sentry-repro',
				url: 'https://sentry.playpark.se/',
				sourcemaps: {
					filesToDeleteAfterUpload: '**/*.js.map',
				},
			},
		}),
		sveltekit(),
	],
});
