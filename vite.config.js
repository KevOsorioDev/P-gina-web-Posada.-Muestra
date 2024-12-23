import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mi-proyecto/', // Reemplaza "mi-proyecto" con el nombre exacto de tu repositorio
})
