import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Inspect(), react()],
});
