import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
export default {
  build: {
    outDir: 'dist',
    manifest: true,
  },
  plugins: [
    laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
  ]
}
// export default defineConfig({
   
//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.js'],
//             refresh: true,
//         }),
//     ],
// });
