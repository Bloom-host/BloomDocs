module.exports = {
  title: 'Bloom Docs',
  tagline: 'Docs for Bloom',
  url: 'https://docs.bloom.host',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'billy-bloom', // Usually your GitHub org/user name.
  projectName: 'bloomdocs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Bloom Docs',
      logo: {
        alt: 'Bloom Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://bloom.host',
          label: 'Home',
          position: 'right',
        },
        {
          href: 'https://github.com/billy-bloom/bloomdocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/2QxW8QY',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/billy-bloom/bloomdocs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Super Duper Broccoli, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'overview',
          routeBasePath: '/', // Set this value to '/'.
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/billy-bloom/bloomdocs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
