require('../../load-env');

// get env keys
const environmentKeys = Object.keys(process.env)
    .filter(
        key => key.indexOf('FRAMEPAY_DOCS') === 0,
    );

const createIntercomScript = require('./plugins/intercom/create-header-script');

module.exports = {
    port: 8088, // for local dev
    base: '/framepay-docs/', // defines github.io location under /Rebilly
    title: 'Rebilly FramePay',
    description: 'Pre-built components for your checkout flow',
    head: [
        // add Rebilly script
        ['script', {src: 'https://cdn.rebilly.com/framepay/v1/rebilly.js'}],
    ],
    markdown: {
        lineNumbers: false,
    },
    head: [
        // add intercom script content
        ['script', {}, createIntercomScript()],
        // add Rebilly script
        ['script', {src: process.env.FRAMEPAY_DOCS_FRAMEPAY_JS_REMOTE_URL}],
    ],
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/guide/'},
            {text: 'Reference', link: '/reference/'},
            {text: 'Examples', link: '/examples/'},
        ],
        sidebar: {
            '/guide/': genSidebarConfig('Guide', [
                ['multiple-methods', 'Multiple Payment Methods'],
                ['lead-source', 'Lead Source Attribution'],
            ]),
            '/reference/': genSidebarConfig('Reference', [
                ['rebilly', 'Rebilly Namespace'],
                ['element', 'Element Instance'],
            ]),
            '/examples/': genSidebarConfig('Examples', []),
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
    plugins: [
        [require('./plugins/intercom/index.js'), {}],
    ],
    // update webpack env variables
    chainWebpack(config) {
        config.plugin('injections')
            .tap(([options]) => [
                Object.assign(
                    options,
                    environmentKeys.reduce((memo, key) => ({
                        ...memo,
                        [key]: JSON.stringify(process.env[key]),
                    }), {}),
                ),
            ]);
    },
};

function genSidebarConfig(title, children = []) {
    return [
        {
            title,
            collapsable: false,
            children: [
                '',
            ].concat(children),
        },
    ];
}
