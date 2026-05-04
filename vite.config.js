// c:\Users\User\Desktop\my-app\vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Füge diese Zeile hinzu oder erweitere sie, falls sie bereits existiert
  assetsInclude: ['**/*.jpg', '**/*.JPG'] 
})
