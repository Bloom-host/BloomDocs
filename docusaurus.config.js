module.exports = {
    title: 'Docs',
    tagline: 'Docs for Bloom',
    url: 'https://docs.bloom.host',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    favicon: '/favicon.ico',
    organizationName: 'bloom-host',
    projectName: 'bloomdocs',

    plugins: [
        // Todo (notgeri): waiting on https://github.com/gabrielcsapo/docusaurus-plugin-image-zoom/issues/29
        /*require.resolve('docusaurus-plugin-image-zoom')*/
    ],

    themeConfig: {
        image: 'https://bloom.host/favicon/favicon-og.png',
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
        },

        metadata: [
            {name: 'og:site_name', content: 'Bloom.host'},
            {name: 'theme-color', content: '#ff6300'},
            {name: 'og:image', content: 'https://bloom.host/favicon/favicon-og.png'},
            {name: 'twitter:image', content: 'https://bloom.host/favicon/favicon-og.png'}
        ],

        algolia: {
            apiKey: '6e10e6fc7bbd9b5093c45f689e51d2df',
            appId: 'INL0MGKMMA',
            indexName: 'bloom',
            contextualSearch: true,
            searchParameters: {},
        },

        zoom: {
            selector: '.markdown :not(em) > img',
            background: {
                light: 'rgb(255, 255, 255)',
                dark: 'rgb(33, 33, 50)'
            },
            config: {}
        },

        navbar: {
            title: 'Bloom Docs',
            logo: {
                alt: 'Bloom Logo',
                src: '/logo.webp'
            },
            items: [
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
                {
                    href: 'https://bloom.host/',
                    label: 'Website',
                },
                {
                    href: 'https://discord.gg/bloom',
                    label: 'Support Discord',
                },
                {
                    href: 'https://billing.bloom.host/supporttickets.php',
                    label: 'Billing Support',
                },
            ],
        },

        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Super Duper Broccoli, Inc. Built with Docusaurus.`,
        },
    },

    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],

    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es'],
    },

};
