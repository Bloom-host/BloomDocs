module.exports = {
  title: 'Super Duper Broccoli',
  tagline: 'The tagline of my site',
  url: 'https://super-duper-broccoli.netlify.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'billydapoop', // Usually your GitHub org/user name.
  projectName: 'turbo-potato', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Super Duper Broccoli',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://bloomvps.com',
          label: 'Home',
          position: 'right',
        },
        {
          href: 'https://github.com/billydapoop/super-duper-broccoli',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
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
              href: 'https://github.com/billydapoop/super-duper-broccoli',
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
          homePageId: 'doc1',
          routeBasePath: '/', // Set this value to '/'.
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/BillyDaPoop/super-duper-broccoli/edit/master/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
