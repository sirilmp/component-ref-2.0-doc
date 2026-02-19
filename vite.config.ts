import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vpcrTagger } from 'vpcr'


export default defineConfig({
  plugins: [
vpcrTagger({
      prefix: "data-ref",
      enabled: true,
      basePath: "src",
      editor: "code", // 'cursor' | 'vscode' | 'webstorm'
      include: [".tsx", ".jsx"],
      exclude: ["node_modules", "main.tsx"],
      attributes: ['id', 'name', 'path', 'file', 'component'],
      shouldTag: (componentName, filePath) => {
        return !componentName.startsWith('Internal');
      },
      // openInEditor: (filePath, line) => {
      //   console.log(`Opening ${filePath} at line ${line}`);
      // }
    }),
    react()
  ],
  server:{
    port: 4001
  }
})
