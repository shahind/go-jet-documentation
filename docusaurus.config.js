const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Go-Jet',
  tagline: 'A lightweight and fast framework for Golang',
  url: 'https://shahind.github.io/go-jet',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'shahind', // Usually your GitHub org/user name.
  projectName: 'go-jet', // Usually your repo name.
  trailingSlash: true,
  i18n: {
    defaultLocale: 'fa',
    locales: ['en','fa','it','id'],
  },
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-WWQ2Q8EH3T',
        anonymizeIP: true,
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      { 
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    {
      navbar: {
        title: 'Go-Jet',
        logo: {
          alt: 'Go-Jet',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            href: 'https://github.com/shahind/go-jet',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              /*{
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label: 'GitHub',
                href: 'https://github.com/shahind/go-jet',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Go-Jet.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
});