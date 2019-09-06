require('../../load-env');

// get env keys
const environmentKeys = Object.keys(process.env)
    .filter(
        key => key.indexOf('FRAMEPAY_DOCS') === 0,
    );

module.exports = {
    port: 8088, // for local dev
    base: '/framepay-docs/', // defines github.io location under /Rebilly
    title: 'Rebilly FramePay',
    description: 'Pre-built components for your checkout flow',
    plugins: [
        // https://superbiger.github.io/vuepress-plugin-tabs/#install
        'vuepress-plugin-element-tabs',
    ],
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['script', {src: process.env.FRAMEPAY_DOCS_FRAMEPAY_JS_REMOTE_URL}],
    ],
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
                    environmentKeys.reduce((memo, key) => ({
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
