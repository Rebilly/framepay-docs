module.exports = {
    title: 'FramePay',
    description: 'Rebilly FramePay',
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
        ],
        sidebar: {
            '/guide/': genSidebarConfig('Guide')
        },
        lastUpdated: 'Last Updated',
    },
}

function genSidebarConfig (title) {
    return [
        {
            title,
            collapsable: false,
            children: [
                '',
                'getting-started',
            ]
        }
    ]
}
