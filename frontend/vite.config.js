import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 3000,
    proxy:{
			"/api/socket.io":{
				target: `ws://localhost:3636`,
			},
      "/api":{
        target: `http://localhost:${process.env.PORT || 8000}`,
      }
    }
  },
})
