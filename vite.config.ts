import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vpcrTagger } from 'vpcr'


export default defineConfig({
  plugins: [
   vpcrTagger({
      editor: 'antigravity', // Automatically handles line-positioning flags
      include: [/\.tsx?$/],
    }),
    react()
  ],
})
