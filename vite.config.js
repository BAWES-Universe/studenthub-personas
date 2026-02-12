import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves from https://<user>.github.io/<repo>/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/studenthub-personas/' : '/',
}))
