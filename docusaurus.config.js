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
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '🌙',
        darkIconStyle: {
          marginLeft: '2px',
        },
        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '\u{1F602}',
        lightIconStyle: {
          marginLeft: '1px',
        },
      },    
    },

    algolia: {
      apiKey: "3ce68aac2f5dfa371171d1dad93cf6af",
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
};
