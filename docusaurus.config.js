// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fordeer Knowledge Base',
  tagline: 'The great assistance tools for the best businesses.',
  url: 'https://help.fordeer.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://cdn.pdfinvoices.fordeer.io/img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'FIOP-document', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Fordeer/FIOP-document/tree/master/',

        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  // themes: ['@docusaurus/theme-search-algolia'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Fordeer Helpdesk',
        logo: {
          alt: 'Fordeer Logo',
          src: 'img/fordeer-logo.png',
          srcDark: 'img/fordeer-logo-dark.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Shopify Apps',
            position: 'left',
            items: [
              {
                label: 'Fordeer Invoice Order Printer',
                to: '/docs/fordeer-invoice-order-printer/introduction',
              },
            ],
          },
          {
            href: 'https://pdfinvoices.apps.fordeer.io',
            label: 'Get started',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Shopify Apps',
            items: [
              {
                label: 'Fordeer Invoice Order Printer',
                to: 'https://pdfinvoices.apps.fordeer.io',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Fordeer Blog',
                href: 'https://blog.fordeer.io',
              },
              {
                label: 'Fordeer Dev Blog',
                href: 'https://code.fordeer.io',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Fordeer',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/fordeer',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/fordeer',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fordeer Team. Built with ❤️  Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'DTSCAQZAAY',

        // Public API key: it is safe to commit it
        apiKey: '88400350c8dff64a45534c671655f9a8',

        indexName: 'FORDEER_HELPDESK',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        // searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        // searchPagePath: 'search',

        //... other Algolia params
      },
    }),
  plugins: [
    'docusaurus-plugin-sass',
  ],
};

module.exports = config;
