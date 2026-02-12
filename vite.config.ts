import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { componentRefTagger } from 'vite-plugin-component-ref';


export default defineConfig({
  plugins: [
    componentRefTagger({
      editor: 'antigravity', // Automatically handles line-positioning flags\
    }),
    react()
  ],
})
