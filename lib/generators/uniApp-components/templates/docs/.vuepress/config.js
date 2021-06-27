const { description } = require('../../package');

module.exports = (options, context) => ({
    title: '@vtx/ember',
    description: description,
    base: '/ember/',
    port: '3000',
    dest: './doc-dist',
    themeConfig: {
        repo: 'https://git.cloudhw.cn:3443/front-end/ember',
        repoLabel: 'GitLab',
        sidebarDepth: 2,
        nav: [{ text: '组件', link: '/components/installation' }],
        sidebar: {
            '/component': [
                '/components/installation',
                {
                    title: '组件',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: ['/components/text'],
                },
            ],
        },
        smoothScroll: true, // 启用页面滚动效果
    },
    plugins: ['@vuepress/back-to-top'],
});
