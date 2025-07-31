/// <reference types='vitest' />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { UserConfigExport } from 'vite'
import { configDefaults } from 'vitest/config' // ✅ Important
import { type UserConfig as VitestUserConfig } from 'vitest/config' // ✅ Optional for TS types
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
} as UserConfigExport)
