/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_TITLE_APP: string;
    readonly VITE_LATITUDE: string;
    readonly VITE_LONGITUDE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}