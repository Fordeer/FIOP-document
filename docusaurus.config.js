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
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'https://cdn.pdfinvoices.fordeer.io/img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Fordeer', // Usually your GitHub org/user name.
  projectName: 'FIOP-document', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  trailingSlash: true,
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
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Ver 1.0',
              // path: '/',
            },
          },
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
        title: 'Helpdesk',
        logo: {
          alt: 'Fordeer Logo',
          src: 'img/fordeer-logo.png',
          srcDark: 'img/fordeer-logo-dark.png',
        },
        items: [
          {
            label: 'Home',
            position: 'left',
            to: 'https://fordeer.io?ref=helpdesk_page',
          },
          {
            type: 'dropdown',
            label: 'Apps',
            position: 'left',
            items: [
              {
                label: 'Fordeer Invoice Order Printer',
                to: '/docs/fordeer-invoice-order-printer/introduction',
              },
            ],
          },
          {
            label: 'Blogs',
            position: 'left',
            to: 'https://blog.fordeer.io?ref=helpdesk_page',
          },
          {
            label: 'Partners',
            position: 'left',
            to: 'https://fordeer.io/partners?ref=helpdesk_page',
          },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          dropdownActiveClassDisabled: true,
        },
          {
            href: 'https://link.fordeer.io/mIQ3TO',
            label: 'START A FREE 14-DAY TRIAL',
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
                to: 'https://link.fordeer.io/mIQ3TO',
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
            title: 'Company',
            items: [
              {
                label: 'About us',
                href: 'https://fordeer.io/about?ref=helpdesk_page',
              },
              {
                label: 'Contact us',
                href: 'https://fordeer.io/contact?ref=helpdesk_page',
              },
              {
                label: 'Careers',
                href: 'https://career.fordeer.io/?ref=helpdesk_page',
              },
              {
                label: 'Terms and Conditions',
                href: 'https://fordeer.io/content/terms-and-conditions?ref=helpdesk_page'
              },
              {
                label: 'Privacy policy',
                href: 'http://fordeer.io/content/privacy-policy?ref=helpdesk_page'
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
    }),
  plugins: [
    'docusaurus-plugin-sass',
    [require.resolve('docusaurus-lunr-search'), {
                indexBaseUrl: true
            }
    ]
  ],
};

module.exports = config;
