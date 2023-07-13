/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_TITLE_APP: string;
    readonly VITE_LATITUDE: number;
    readonly VITE_LONGITUDE: number;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}