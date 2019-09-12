require('./load-env');

const FRAMEPAY_DOCS_BASE_PATH = process.env.FRAMEPAY_DOCS_BASE_PATH;

module.exports = {
    watch: true,
    server: {
        baseDir: './docs/.vuepress/dist',
        routes: {
            [FRAMEPAY_DOCS_BASE_PATH]: './docs/.vuepress/dist',
        },
    },
    files: ['./docs/vuepress/dist/**'],
    startPath: FRAMEPAY_DOCS_BASE_PATH,
};
