/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Applicable Risk Assessment',
  tagline: 'Risk assessments that matter',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Applicable Risk Assessment',
      logo: {
        alt: 'Applicable Risk Assessment',
        src: 'img/logo.svg',
      },
      items: [        
        {
          type: 'doc',
          docId: 'Problems/Problem',
          position: 'left',
          label: 'Problem',
        },
        {
          type: 'doc',
          docId: 'Ideas/Ideas',
          position: 'left',
          label: 'Ideas',
        },
        {
          type: 'doc',
          docId: 'Supporting/Terms',
          position: 'right',
          label: 'Terms',
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
          title: 'Risk',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },            
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },            
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bayes Security.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
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
