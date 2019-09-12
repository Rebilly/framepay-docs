require('../../load-env');

const FRAMEPAY_DOCS_ENV_KEYS_LIST = require('./util/env-keys-list');

const createIntercomScript = require('./plugins/intercom/create-header-script');

module.exports = {
    port: 8088, // for local dev
    base: process.env.FRAMEPAY_DOCS_BASE_PATH, // defines github.io location under /Rebilly
    title: 'Rebilly FramePay',
    plugins: [
        // https://superbiger.github.io/vuepress-plugin-tabs/#install
        'vuepress-plugin-element-tabs',
        [require('./plugins/intercom/index.js'), {}],
        [require('./plugins/inject-env/index.js'), {}],
    ],
    description: 'Pre-built components for your checkout flow',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        // add Rebilly script
        ['script', {src: process.env.FRAMEPAY_DOCS_FRAMEPAY_JS_REMOTE_URL}],
        // add intercom script content
        ['script', {}, createIntercomScript()],
    ],
    markdown: {
        lineNumbers: false,
    },
    themeConfig: {
        logo: '/favicon.ico',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/guide/'},
            {text: 'Configuration', link: '/configuration/'},
            {text: 'Reference', link: '/reference/'},
            {text: 'Examples', link: '/examples/'},
            {text: 'React', link: 'https://github.com/Rebilly/framepay-react'},
            {text: 'Vue', link: 'https://github.com/Rebilly/framepay-vue'},
            {text: 'GitHub', link: 'https://github.com/Rebilly/framepay-docs'},
        ],
        sidebar: {
            '/guide/': genSidebarConfig(
                'Guide', [
                    ['multiple-methods', 'Multiple Payment Methods'],
                    ['lead-source', 'Lead Source Attribution'],
                ],
            ),
            '/reference/': genSidebarConfig(
                'Reference', [
                    ['rebilly', 'Rebilly Namespace'],
                    ['element', 'Element Instance'],
                    ['supported-browsers', 'Supported Browsers'],
                ],
            ),
            '/configuration/': genSidebarConfig(
                'Configuration', [
                    ['properties', 'Properties'],
                ], {sidebarDepth: 3},
            ),
            '/examples/': genSidebarConfig(
                'Examples', [],
                {sidebarDepth: 3},
            ),
        },
        sidebarDepth: 1,
        lastUpdated: 'Last Updated',
        // if your docs are in a different repo from your main project:
        docsRepo: 'Rebilly/framepay-docs',
        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'master',
        // defaults to false, set to true to enable
        editLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Edit this page on Github',
    },
    // update webpack env variables
    chainWebpack(config) {
        config.plugin('injections')
            .tap(([options]) => [
                Object.assign(
                    options,
                    FRAMEPAY_DOCS_ENV_KEYS_LIST.reduce((memo, key) => ({
                        ...memo,
                        [key]: JSON.stringify(process.env[key]),
                    }), {}),
                ),
            ]);
    },
};

function genSidebarConfig(title, children = [], params = {}) {
    return [
        {
            title,
            collapsable: false,
            ...params,
            children: [
                '',
            ].concat(children),
        },
    ];
}
