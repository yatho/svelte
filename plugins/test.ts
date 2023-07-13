export function MyPluginCustom(): import("vite").PluginOption  {
    return {
            apply: 'serve',
            name: 'devVersionPlugin',
            transformIndexHtml: (html: string) => html.replace(/<title>(.*?)<\/title>/, `<title>Dev mode!</title>`,)
        };
}