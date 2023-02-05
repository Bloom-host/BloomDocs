module.exports = {
  title: "Docs",
  tagline: "Docs for Bloom",
  url: "https://docs.bloom.host",
  baseUrl: "/",
  onBrokenLinks: "warn",
  favicon: "imgs/favicon.ico",
  organizationName: "bloom-host",
  projectName: "bloomdocs",

  themeConfig: {
    image: 'imgs/meta.png',
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
    },
    metadata: [
      { name: 'og:site_name', content: 'Bloom.host' },
      { name: 'theme-color', content: '#ff6300' },
    ],

    algolia: {
      apiKey: "6e10e6fc7bbd9b5093c45f689e51d2df",
      appId: 'INL0MGKMMA',
      indexName: "bloom",
      contextualSearch: true,
      searchParameters: {},
    },

    navbar: {
      title: "Bloom Docs",
      logo: {
        alt: "Bloom Logo",
        src: "imgs/favicon.ico"
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
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Super Duper Broccoli, Inc. Built with Docusaurus.`,
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

};
