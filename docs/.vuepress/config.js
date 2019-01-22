module.exports = {
    port: 8088, // for local dev
    base: '/framepay-docs/', // defines github.io location under /Rebilly
    title: 'Rebilly FramePay',
    description: 'Pre-built components for your checkout flow',
    markdown: {
        lineNumbers: false,
    },
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
