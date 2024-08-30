import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		{
			name: "treat-js-files-as-jsx",
			async transform(code, id) {
				if (!id.match(/src\/.*\.js$/)) return null;
				return transformWithEsbuild(code, id, {
					loader: "jsx",
					jsx: "automatic",
				});
			},
		},
	],
	optimizeDeps: {
		force: true,
		exclude: ["js-big-decimal"],
		esbuildOptions: {
			loader: {
				".js": "jsx",
			},
		},
	},
	resolve: {
		alias: {
			src: resolve(__dirname, "src"),
		},
	},
})
