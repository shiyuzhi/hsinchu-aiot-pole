import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hsinchu-aiot-pole/', // 必須設為你的倉庫名稱
})