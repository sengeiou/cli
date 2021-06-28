const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    devServer: {
        hot: true,
    },
    chainWebpack: config => {
        config.resolve.alias.set('ember/components', resolve('components/'));
    },
};
