import { defineConfig } from 'dumi';

export default defineConfig({
    title: '@vtx/hooks',
    favicon: './favicon.ico',
    logo: './favicon.ico',
    outputPath: 'docs-dist',
    base: '/vhooks',
    publicPath: '/vhooks/',
    exportStatic: {},
    extraBabelPlugins: [['import', { libraryName: 'antd', style: 'css' }, 'antd']],
});
