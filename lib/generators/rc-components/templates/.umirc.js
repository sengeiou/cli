import { defineConfig } from 'dumi';

export default defineConfig({
    title: '@babe0806/components',
    favicon: '/favicon.ico',
    logo: '/favicon.ico',
    outputPath: 'docs-dist',
    mode: 'site',
    resolve: {
        includes: ['docs', 'components'],
    },
    base: '/react-components',
    publicPath: '/react-components/',
    exportStatic: {},
    navs: [
        null,
        {
            title: 'GitLab',
            path: 'https://git.cloudhw.cn:3443/front-end/react-components',
        },
    ],
    extraBabelPlugins: [
        ['import', { libraryName: 'antd', style: 'css' }, 'antd'],
        [
            'import',
            {
                libraryName: '@babe0806/components',
                libraryDirectory: 'components',
                customStyleName: name => {
                    return `../style`;
                },
            },
            '@babe0806/components',
        ],
    ],
    styles: [
        `.__dumi-default-previewer-demo .ant-calendar-picker {margin-bottom: 10px}`,
        `.__dumi-default-previewer-demo .ant-time-picker {margin-bottom: 10px}`,
        `.markdown table td:nth-child(3) {color: #c41d7f;}`,
    ],
    locale: {
        default: 'zh-CN',
        antd: true,
        baseNavigator: false,
    },
    proxy: {
        
    },
});
