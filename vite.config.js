import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Base relativa para funcionar em subdiretório do GitHub Pages
  // (https://heltonbts.github.io/tfassessoria/).
  base: './',
  plugins: [react()],
})
