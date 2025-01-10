/// <reference types="node" />

interface ImportMetaEnv {
    readonly MODE: string; // Replace this if you aren't using `import.meta.env`
    readonly NEXT_PUBLIC_API_URL?: string; // Add other environment variables prefixed with NEXT_PUBLIC_
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  