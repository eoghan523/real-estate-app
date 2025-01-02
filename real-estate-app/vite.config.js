import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Specify the root directory if index.html is not in the default public directory
export default defineConfig({
  root: 'public', // or another folder if necessary
  plugins: [react()],
});